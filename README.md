
# Tasty Tales

Tasty Tales is a restaurant website featuring user authentication, profile management, and a responsive navigation bar. This project uses React for the frontend and includes JWT-based authentication.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [After Installation](#after-installation)
4. [Usage](#usage)
5. [UI/UX Example](#Ui/UX-Examples)
6. [Technologies Used](#technologies-used)


## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Responsive Navbar:** Dynamic navigation bar that changes based on user authentication state.
- **User Profile Management:** Users can view their profile and orders.
- **Logout Functionality:** Securely logs out the user by clearing the JWT token.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/tasty-tales.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd tasty-tales
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```

## After Installation

1. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     PORT=4000
     JWT_SECRET=your_jwt_secret
     MONGODB_URI=your_mongodb_connection_string
     ```

2. **Start the backend server:**
   - Navigate to the backend directory and start the server:
     ```bash
     npm start
     ```
   
3. **Start the frontend development server:**
   - In another terminal window, navigate to the frontend directory and start the React development server:
     ```bash
     npm start
     ```

4. **Access the application:**
   - Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Register or log in to access personalized features.
- Use the navigation bar to navigate through the site.
## Ui/UX Examples:
 **Sign Up page:**
![image](https://github.com/user-attachments/assets/666fe71d-becc-4a24-bbaf-03aa5aab0da8)

**Login Page:**
   ![image](https://github.com/user-attachments/assets/c15d7fa0-4e96-43b6-ab70-21107e7ba81d)

**Landing Page**:
![image](https://github.com/user-attachments/assets/854895d0-84a0-41c1-8336-16d0cef8db0b)

## Technologies Used

- React
- React-Bootstrap
- Axios
- Node.js
- Express
- MongoDB
- JWT

