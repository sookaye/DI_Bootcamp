SELECT *
FROM film
WHERE length < 60
AND rating = 'R';

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT film.title, film.rental_rate
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

SELECT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.last_name = 'Mahan'
  AND rental.rental_date BETWEEN '2005-07-28' AND '2005-08-01';
 
