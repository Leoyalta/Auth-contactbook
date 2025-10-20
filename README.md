# Auth Contactbook App

## Description

This project is a web application built with React and Redux Toolkit, designed to demonstrate authentication flow, state management, and protected routing.
It allows users to:
• Register and log in securely,
• Manage a personal list of contacts (create, view, and delete),
• Navigate within a protected environment where routes are only accessible based on authentication state.

The core of this project focuses on using Redux Toolkit to manage authentication state through an Auth Slice, and implementing route protection using PrivateRoute and RestrictedRoute components.

## Technologies Used

- **React 18**: Modern library for building user interfaces.
- **Redux Toolkit**: Simplified and efficient state management solution.
- **React Router DOM v6**: Dynamic routing with private and restricted access.
- **Axios**: For handling API requests to the backend service.
- **Formik + Yup**: For form handling and validation.
- **React Toastify**: For user notifications and feedback.
- **JCSS Modules**: For component-scoped, maintainable styling.

## Installation and Setup

1. Clone the repository:Clone the repository:

   - git clone https://github.com/Leoyalta/Auth-contactbook

2. Navigate to the project directory:

   - cd auth-contactbook

3. Install dependencies:

   - npm install

4. Start the development server:

   - npm run dev

5. Open in your browser:

- http://localhost:3000

## Key Features

- ✅ User Authentication: Register, log in, and log out using a simple and secure API integration.
- ✅ Redux Toolkit Auth Slice: Centralized authentication state handling, including token management and user refresh logic.
- ✅ Protected Routes:
   - PrivateRoute ensures only authenticated users can access certain pages (like Contacts).
   - RestrictedRoute prevents logged-in users from accessing pages like Login or Register.
- ✅ Persistent State: Authentication state remains after page reloads via local storage.
- ✅ Contact Management: Fetch, display, and delete contacts dynamically from the API.
- ✅ Form Validation: With clear error messages using Yup schemas.
- ✅ Responsive UI: Clean layout and adaptive design built with CSS Modules.
- ✅ User Feedback: Toast notifications on key user actions (login, logout, registration, errors).

## Demo

You can view the live demo here:

- https://auth-contactbook.vercel.app
