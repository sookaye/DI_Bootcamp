-- Create the items table
CREATE TABLE IF NOT EXISTS items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10, 2)
);

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

-- Create the product_orders table
CREATE TABLE IF NOT EXISTS product_orders (
  order_id SERIAL PRIMARY KEY,
  user_id INT,
  order_date DATE,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create the order_items table to establish the one-to-many relationship
CREATE TABLE IF NOT EXISTS order_items (
  order_id INT,
  item_id INT,
  quantity INT,
  FOREIGN KEY (order_id) REFERENCES product_orders(order_id),
  FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Function to calculate the total price for a given order
CREATE OR REPLACE FUNCTION calculate_total_price(order_id INT) RETURNS DECIMAL(10, 2) AS $$
DECLARE
  total_price DECIMAL(10, 2);
BEGIN
  SELECT SUM(items.price * order_items.quantity) INTO total_price
  FROM items
  INNER JOIN order_items ON items.item_id = order_items.item_id
  WHERE order_items.order_id = calculate_total_price.order_id;
  
  RETURN total_price;
END;
$$ LANGUAGE plpgsql;

-- Function to calculate the total price for a given order of a given user
CREATE OR REPLACE FUNCTION calculate_total_price_for_user(user_id INT, order_id INT) RETURNS DECIMAL(10, 2) AS $$
DECLARE
  total_price DECIMAL(10, 2);
BEGIN
  SELECT SUM(items.price * order_items.quantity) INTO total_price
  FROM items
  INNER JOIN order_items ON items.item_id = order_items.item_id
  INNER JOIN product_orders ON product_orders.order_id = order_items.order_id
  WHERE product_orders.order_id = calculate_total_price_for_user.order_id
    AND product_orders.user_id = calculate_total_price_for_user.user_id;
  
  RETURN total_price;
END;
$$ LANGUAGE plpgsql;
