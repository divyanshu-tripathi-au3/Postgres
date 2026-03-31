<!-- /Database : interview

 connection string: 

Server : 34.255.11.87

Username : interview

Password : G5gdrg34tergfdrgdtghrthtyhr

Table Data Structure:

 

public.employees

(

    id integer NOT NULL DEFAULT nextval('employees_id_seq'::regclass),

    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,

    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,

    salary numeric(12,2),

    CONSTRAINT employees_pkey PRIMARY KEY (id),

    CONSTRAINT employees_salary_check CHECK (salary > 0::numeric)

)

 

Tasks:

Make an API to return all employees in json

Make an API to return the total of the salary column in json


requirement: 
get Api to fetch all select * feom table
another get api to fetch total sal of all emp select Count(sal) from table   -->



1. npm install

2. npm run dev

3. port :3001

