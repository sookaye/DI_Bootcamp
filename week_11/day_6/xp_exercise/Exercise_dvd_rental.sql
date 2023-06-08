-- PART 1
-- Get a list of all film languages:
SELECT DISTINCT name
FROM language;

-- Get a list of all films joined with their languages, including film title, description, and language name. Use different joins for each case:
SELECT film.title, film.description, language.language_name
FROM film
LEFT JOIN language ON film.language_id = language.language_id;

--Get all languages, even if there are no films in those languages:
SELECT film.title, film.description, language.language_name
FROM language
LEFT JOIN film ON film.language_id = language.language_id;

--Create a new table called new_film with columns id and name:
CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

--Add some new films to the new_film table:
INSERT INTO new_film (name) VALUES ('Film A'), ('Film B');

-- Create a new table called customer_review with the necessary columns, including the appropriate constraints:
CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INT REFERENCES language(language_id),
  title VARCHAR(255),
  score INT,
  review_text TEXT,
  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Add two movie reviews and link them to valid objects in other tables:
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 1, 'Review 1', 8, 'This is the first review.'),
       (2, 2, 'Review 2', 6, 'This is the second review.');

----part 2
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
