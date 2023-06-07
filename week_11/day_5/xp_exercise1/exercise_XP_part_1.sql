--Q1
SELECT first_name AS "First", last_name AS "Last" FROM employees;
--Q2
SELECT DISTINCT department_id FROM employees;
--Q3
SELECT * FROM employees ORDER BY first_name DESC;
--Q4
SELECT first_name, last_name, salary, salary * 0.15 AS PF FROM employees;
--Q5
SELECT * FROM employees ORDER BY salary, first_name, last_name ASC;
--Q6
SELECT SUM("salary") FROM employees;
--Q7
SELECT MAX("salary") AS max_salary, MIN("salary") AS min_salary FROM employees;
--Q8
SELECT AVG("salary") AS Avg_salary FROM employees;
--Q9
SELECT COUNT(*) AS employee_count FROM employees;
--Q10
SELECT UPPER("first_name") AS first_name_uppercase FROM employees;
--Q11
SELECT SUBSTRING(first_name,1,2) AS first_three_charater FROM employees;
--Q12
SELECT first_name || ' ' || last_name AS full_name FROM employees;
--Q13
SELECT first_name, last_name, LENGTH(first_name || ' ' || last_name) AS full_name_length FROM employees;
--Q14
SELECT * FROM employees WHERE first_name LIKE '%[0-9]%';
--Q15
SELECT * FROM employees ORDER BY first_name ASC LIMIT 10;

--Restricting And Sorting
--Q1
SELECT first_name, last_name FROM employees WHERE salary BETWEEN 11000 AND 15000;
--Q2
SELECT first_name, last_name, hire_date FROM employees WHERE hire_date>= '1987-01-01' AND hire_date <= '1987-12-31'; 
--Q3
SELECT * FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%';
--Q4
SELECT first_name, last_name, salary From employees WHERE job_id NOT IN(9, 6) AND salary NOT IN(4500,10000,15000);
--Q5
SELECT last_name FROM employees WHERE LENGTH(last_name) = 6;
--Q6
SELECT last_name FROM employees WHERE last_name LIKE '__e%';
--Q7
SELECT DISTINCT job_id FROM employees;
--Q8
SELECT * FROM employees WHERE last_name IN ('JONES', 'BLAKE', 'SCOTT', 'KING', 'FORD');










