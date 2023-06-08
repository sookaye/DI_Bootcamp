--1
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (
  SELECT salary
  FROM employees
  WHERE last_name = 'Bull'
);
--2/// 
SELECT first_name, last_name
FROM employees
WHERE manager_id IN (
    SELECT employee_id
    FROM employees
    WHERE department_id IN (
        SELECT department_id
        FROM departments
        WHERE location_id IN (
            SELECT location_id
            FROM locations
            WHERE country_id = 'US'
        )
    )
);
--3 // 
SELECT first_name, last_name
FROM employees
WHERE manager_id IN (
  SELECT employee_id
  FROM employees
  WHERE department_id IN (
    SELECT department_id
    FROM departments
   WHERE location_id IN (
            SELECT location_id
            FROM locations
            WHERE country_id = 'US'
     )
  )
);

--4 
SELECT first_name, last_name
FROM employees
WHERE employee_id IN (
  SELECT distinct manager_id
  FROM employees
);
--5  
SELECT first_name, last_name
FROM employees
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
);
-- 6 
SELECT first_name, last_name
FROM employees
WHERE salary = (
  SELECT MIN(salary)
  FROM employees
  WHERE job_id = employees.job_id
);
--7 

SELECT first_name, last_name
FROM employees
WHERE employee_id NOT IN (
  SELECT distinct manager_id
  FROM employees
);
--8 
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
  WHERE department_id = employees.department_id
);
--9 
SELECT salary
FROM (
  SELECT salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn
  FROM employees
) AS sub
WHERE rn = 5;
--10
SELECT DISTINCT salary
FROM salaries s1
WHERE 4 = (
  SELECT COUNT(DISTINCT s2.salary)
  FROM salaries s2
  WHERE s2.salary <= s1.salary
);

--11 
SELECT salary
FROM (
  SELECT salary, ROW_NUMBER() OVER (ORDER BY salary ASC) AS rn
  FROM employees
) AS sub
WHERE rn = 4;

--PART II
--1
SELECT d.location_id, l.street_address, l.city, l.state_province, l.country_id
FROM departments d
JOIN locations l ON d.location_id = l.location_id;
--2
SELECT e.first_name, e.last_name, e.department_id, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

--3
SELECT e.first_name, e.last_name, e.job_id, d.department_name, d.department_id
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id
WHERE l.city = 'London';

--4
SELECT e.employee_id, e.last_name AS Employee, e.manager_id, m.last_name AS Manager
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;

--5
SELECT e.*, d.department_name, d.department_id
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

--6 id 90 does not exist
SELECT e.employee_id, e.job_id, COUNT(*) AS number_of_days_worked
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE d.department_id = 90
GROUP BY e.employee_id, e.job_id;


--7
SELECT d.department_name, CONCAT(e.first_name, ' ', e.last_name) AS manager_name, l.city
FROM departments d
LEFT JOIN employees e ON e.manager_id = e.employee_id
JOIN locations l ON d.location_id = l.location_id;

--8
SELECT j.job_title, AVG(e.salary) AS average_salary
FROM employees e
JOIN jobs j ON e.job_id = j.job_id
GROUP BY j.job_title;


--9
SELECT d.department_name, e.first_name, e.last_name, e.hire_date, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM e.hire_date) > 15;

----
SELECT d.department_name, e.first_name, e.last_name, e.hire_date, e.salary
FROM employees e
JOIN departments d ON e.employee_id = e.employee_id
WHERE EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM e.hire_date) > 15;










