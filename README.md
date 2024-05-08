<h1 align=center>Budget Calculation App 💵</h1>

[![React](https://img.shields.io/badge/React-18.2.0+-lightblue?style=for-the-badge&logo=react&logoColor=white&labelColor=101010)](https://react.dev)

[![HTML](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5&logoColor=white&labelColor=101010)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-blue?style=for-the-badge&logo=css3&logoColor=white&labelColor=101010)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://developer.mozilla.org/es/docs/Web/JavaScript)

### App developed with [React](https://react.dev/) and [Tailwind](https://tailwindcss.com/). It calculates via checkboxes the total budget for an hypothetical web developer site.
> ##### The Budget Calculation App was the 6th project for my Barcelona ITAcademy course.

## Skills
### React
* Components
* Props
* Hooks (useState, useContext, useRef, useEffect...)
* Conditional Rendering
* Event Handling
* React folder structure
* Efficient Navigation with React Router
### CSS
* Tailwind
* DaisyUI
* Responsive Design

<h2 align=center>Images</h2>

## Services checkboxes and dynamic total price
![328600371-70739961-4656-4ef4-85a6-15c16e67c967](https://github.com/opujade/budget-calculation-app/assets/146122361/b3487eda-b8a4-42aa-9168-de4ac9a6c952)

## Saving and listing different budgets. Order filter by date, name and amount.
![budget-list](https://github.com/opujade/budget-calculation-app/assets/146122361/bf6d71c6-2f3e-4f59-8652-48d5c37a803f)

## Theme toggler
![Captura de Pantalla 2024-05-08 a las 11 13 13](https://github.com/opujade/budget-calculation-app/assets/146122361/4620fd3b-7b3f-47f2-a9b8-9a001373a0b5)

## Responsive Design
![budget-responsive](https://github.com/opujade/budget-calculation-app/assets/146122361/12629f93-3625-479e-ac83-f0786fe011ff)


## Description
### The objective of this app to create a budget list of web development services, letting the user choose and calculate the total price for a web dev service.
1. Given an array of objects with services information, the app prints a list of checkable services with its price and description. These services can have extra options, which will print with an add and delete buttons, and also an information button which shows a modal with information.
2. Using a State of an array of booleans for each service (to check if a service is selected), the information will be captured to a newUser context, which will be recieving the information of the user budget dynamically.
3. This newUser context will also recieve information from writable inputs (name, phone and email).
4. On submit, every information recieved in this newUser, will be pushed to a context of an array of users, and the newUser context will be empty again, reseting every service checkbox, input values and total price.
5. Every object inside the users array will be printed with its name, phone and email, the selected services and its total price.
6. There will be also a togglable option at the top of the app which will allow the user to choose between monthly and yearly payment. The yearly payment will add a discount of the 20% to the total price.
7. As an addition to the project, there will be a theme selector at the top-right corner, which will allow us tot toggle between light, dark or cupcake themes, given by Tailwind DaisyUI component library.
