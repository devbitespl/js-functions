import { employees } from "./data.js";

// 1. get the employee with id:7865 (result: object)

// 2. get all French employees (result: list of objects)

// 3. group employees by nationalities (result: object[key: nationality, value: list of objects])

// 4. get number of employees of each nationality (result: object[key: nationality, value: number])

// 5. get the names of top 10 employees with highest salary, order by salary/descending (result: list of strings)

// 6. sort all employees by nationality/lexicographically, then by salary/descending. The result should be a flat list of employees (result: list of objects)

// 7. calculate sum of all salaries of French employees (result: number)

// 8. calculate sums of all salaries grouped by nationalities (result: object[key: nationality, value: number])

// 9. get the richest (e.g. with highest salary) American employee (result: object)

// 10. get the richest 4 employees, no matter the country, sorted by salary/descending (result: list of object)

// 11. get the richest employees of each country, sorted by salary/descending (result: list of object)

// 12. get the poorest (e.g. with lowest salary) British employee (result: object)

// 13. the chairman wants to meet his most valuable employees personally. Get the richest employees of each country, grab their email addresses and create a comma-separated recipients list (result: string)

// 14. the president of the company wants to know which country costs him the most. Find the average salary among employees in each country and find the average salary globally (result: object[key: string/uk,us,...,global, value: number])

// 15. the company will provide christmas bonus for the ones that need it the most. Find the poorest employee of each country, calculate a Christmas salary bonus, which is 150% of its salary. Finally sum them all together - the result is total amount of money to be spent on the Christmas salary for the poorest employees of each country (result: number)

// 16. the company is planning to give a raise for all employees within only one country and estimations of such raise is needed. For each country, calculate how much more money would have to be spent on all salaries (of all employees among given country) throughout a year, if the raise was 15% (result: object[key: nationality, value: number])

// 17. the chairman of the board wonders what would be the figures, if instead of giving 15% more for all employees, there would be a scale: +10% for employees with salary up to 3000, +15% up to 6000, + 20% salary up to 9000 and +30% salary above 9000 (result: object[key: nationality, value: number])

// 18. the receptionist wants to learn to pronounce all the employee names. Get list of first names of all employees, avoid duplicates (result: list of strings)

// 19. the HR dept. has nothing better to do and wants to find out the most frequent first names among all employees. Count how many employees have given first names (result: object[key: string/name, value: number/count])

// 20. create a employee search. Write a function that - for a given string phrase - will return first 10 employees who match first name or last name. Then, find employees matched by following phrases: "pad", "dot", "rip" (function call result: list of objects, matching criteria)

// 21. there has been a hacker attack at yahoo.com. Get the list of all names along with phone numbers (e.g. "John Smith, 0-123-456-789") of employees who have email address at yahoo.com (result: list of strings)
