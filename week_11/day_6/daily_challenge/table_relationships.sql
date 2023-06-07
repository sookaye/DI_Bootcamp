-- Create Customer table
CREATE TABLE Customer (
  id INT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

-- Create Customer profile table
CREATE TABLE CustomerProfile (
  id INT PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT false,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

-- Insert customers
INSERT INTO Customer (id, first_name, last_name)
VALUES (1, 'John', 'Doe'),
       (2, 'Jerome', 'Lalu'),
       (3, 'Lea', 'Rive');

-- Insert customer profiles
INSERT INTO CustomerProfile (id, isLoggedIn, customer_id)
VALUES (1, true, 1),
       (2, false, 2);

SELECT c.first_name
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

SELECT COUNT(*) AS count_not_logged_in
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;

--part 11
-- Create Book table
CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

-- Insert books
INSERT INTO Book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K Rowling'),
       ('To kill a mockingbird', 'Harper Lee');

-- Create Student table
CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INT CHECK (age <= 15)
);

-- Insert students
INSERT INTO Student (name, age)
VALUES ('John', 12),
       ('Lera', 11),
       ('Patrick', 10),
       ('Bob', 14);

-- Create Library table
CREATE TABLE Library (
  book_fk_id INT,
  student_id INT,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_id),
  FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert records in the junction table
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
       ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
       ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
       ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');
SELECT *
FROM Library;

