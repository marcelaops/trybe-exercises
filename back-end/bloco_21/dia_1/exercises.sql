use hr; 
select * from employees;

-- 1 
select max(salary) from employees;

-- 2
select max(salary) - min(salary) from employees;

-- 3
select job_id, avg(salary) as average_salary from employees group by job_id order by average_salary desc;

-- 4
select sum(salary) from employees;

-- 5
select max(salary), min(salary), sum(salary), round(avg(salary), 2) from employees;

-- 6
select count(*) from employees where job_id = 'IT_PROG';

-- 7
select job_id, sum(salary) from employees group by job_id;

-- 8
select job_id, sum(salary) from employees where job_id = 'IT_PROG';

-- 9 
select job_id, avg(salary) as average from employees where job_id <> 'IT_PROG' group by job_id order by average desc ;

-- 10 
select * from employees;
select department_id, avg(salary), count(*) 'empl' from employees group by department_id having count(department_id) > 10;

-- 13
select employee_id, first_name, year(hire_date) from employees;

