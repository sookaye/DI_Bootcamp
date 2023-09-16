SELECT * FROM language;
--1
SELECT film.title, film.description, language.name AS language_name
FROM film
LEFT JOIN language ON film.language_id = language.language_id;
--ABORT2
CREATE TABLE new_film (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);
--ABORT3
INSERT INTO new_film (id, name) VALUES
(1, 'Film A'),
(2, 'Film B');

--ABORT
CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INT REFERENCES language(language_id),
  title VARCHAR(255),
  score INT,
  review_text TEXT,
  last_update TIMESTAMP
);

--
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) VALUES
(1, 1, 'Review 1', 8, 'This film was great!', NOW()),
(2, 2, 'Review 2', 6, 'Not a fan of this one.', NOW());

--Partii
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
  
--ABORT
DROP TABLE IF EXISTS customer_review;
--ABORT

SELECT COUNT(*) AS outstanding_rentals
FROM rentals
WHERE return_date IS NULL;

--ABORT
SELECT film.title, film.rental_rate
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

