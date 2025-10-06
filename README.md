# FoodApp - A Manifest-powered Restaurant Discovery App

This is a complete full-stack application for discovering and reviewing restaurants, built entirely with React and Manifest.

## Features

- **User Authentication**: Secure sign-up and login for users (`diners`).
- **Restaurant Management**: Logged-in users can create and manage their own restaurant listings.
- **Menu & Reviews**: Add menu items and reviews to restaurants (via Admin Panel).
- **Role-Based Access**: Clear separation of permissions between public users, logged-in diners, and admins.
- **Dynamic Frontend**: A responsive React frontend built with Tailwind CSS.
- **Automatic Admin Panel**: A built-in admin interface at `/admin` for easy data management.

## Tech Stack

- **Backend**: Manifest (handles database, API, auth, file storage, and business logic).
- **Frontend**: React, Vite.
- **Styling**: Tailwind CSS.
- **SDK**: `@mnfst/sdk` for all backend communication.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

### Default Credentials

- **Demo User**:
  - **Email**: `diner@manifest.build`
  - **Password**: `password`

- **Admin User**:
  - Access the admin panel at `<YOUR_BACKEND_URL>/admin`
  - **Email**: `admin@manifest.build`
  - **Password**: `admin`
