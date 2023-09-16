--part ii
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'English')
WHERE film_id IN (1, 2, 3); -- Replace with the actual film IDs you want to update

--To find the foreign keys (references) defined for the customer table, you can query the information schema.
SELECT
  conname AS foreign_key_name,
  conrelid::regclass AS table_name,
  a.attname AS column_name,
  confrelid::regclass AS referenced_table_name,
  af.attname AS referenced_column_name
FROM
  pg_constraint
INNER JOIN
  pg_attribute AS a ON a.attnum = ANY (conkey)
INNER JOIN
  pg_attribute AS af ON af.attnum = ANY (confkey)
WHERE
  conrelid = 'customer'::regclass;
  
  
--Step 3: Drop the customer_review table
DROP TABLE IF EXISTS customer_review;

-- Step 4: Find the number of rentals that are still outstanding
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- Step 5: Find the 30 most expensive outstanding movies
SELECT film.title, film.rental_rate
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;





