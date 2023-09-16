UPDATE employees
SET phone_number = '999'
WHERE phone_number LIKE '%124%';

SELECT *
FROM employees
WHERE LENGTH(first_name) >= 8;

SELECT CONCAT(UPPER(SUBSTRING(first_name, 1, 1)), LOWER(SUBSTRING(first_name, 2))), last_name, CONCAT(UPPER(SUBSTRING(first_name, 1, 1)), LOWER(SUBSTRING(first_name, 2))), '@example.com' AS email
FROM employees;

SELECT employee_id, SUBSTRING(email, 1, LENGTH(email) - 3) AS email
FROM employees;

SELECT
  CASE
    WHEN POSITION(' ' IN j.job_title) > 0 THEN SUBSTRING(j.job_title, 1, POSITION(' ' IN j.job_title) - 1)
    ELSE j.job_title
  END AS first_word_job_title
FROM employees e
JOIN jobs j ON e.job_id = j.job_id;

SELECT first_name AS "First Name", LENGTH(first_name) AS "Name Length"
FROM employees
WHERE first_name LIKE 'A%' OR first_name LIKE 'J%' OR first_name LIKE 'M%'
ORDER BY first_name;

SELECT first_name, CONCAT('$', salary) AS "SALARY"
FROM employees;












