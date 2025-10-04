# Café Fausse — Frontend (React)

This repository contains the frontend for Café Fausse, a fictional fine-dining restaurant. It is a responsive single-page application (SPA) built with [React](https://reactjs.org/) and styled with [Tailwind CSS](https://tailwindcss.com/).

The application provides a user-friendly interface for customers to explore the menu, learn about the restaurant, and make table reservations by interacting with the backend API.

---

## Features

-   **Modern UI:** A clean and elegant user interface built with React and Tailwind CSS.
-   **Fully Responsive:** A mobile-first design that works seamlessly on desktops, tablets, and smartphones.
-   **Component-Based Architecture:** Code is organized into reusable components and pages for maintainability.
-   **API Integration:** Connects to the backend API to:
    -   Check table availability in real-time.
    -   Submit reservation requests.
    -   Handle newsletter signups.
-   **Dynamic User Feedback:** Forms provide clear loading, success, and error states.
-   **Client-Side Routing:** Uses React Router for seamless navigation between pages.

---

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or later recommended)
-   [npm](https://www.npmjs.com/) (usually included with Node.js)
-   A running instance of the [Café Fausse Backend API](<link-to-your-backend-repo>).

### Installation & Startup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>/frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of the `frontend` directory by copying the example:
    ```bash
    cp .env.example .env
    ```
    The default `REACT_APP_API_BASE_URL` is set to `http://localhost:8000/api`, which works with the backend's default configuration. Modify it if your backend API is running on a different address.

4.  **Start the development server:**
    ```bash
    npm start
    ```

    The application will open automatically in your browser at `http://localhost:3000`.

---

## Project Structure

The project follows a standard Create React App structure, with our components organized as follows:

-   `src/api/`: Contains the configured Axios client for making API requests.
-   `src/components/`: Contains reusable UI components used across multiple pages (e.g., `Navbar`, `Footer`).
-   `src/pages/`: Contains the top-level component for each page of the application (e.g., `HomePage`, `ReservationPage`).
-   `src/App.js`: The main application component that sets up routing.

---

## Available Scripts

In the project directory, you can run:

-   `npm start`: Runs the app in development mode.
-   `npm test`: Launches the test runner in interactive watch mode.
-   `npm run build`: Builds the app for production to the `build` folder.

---

## Contributing

Contributions are welcome. Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

---

