# Blog Application with Next.js

This project is a blog application built using **Next.js** and connects to a backend API for managing posts and comments. It features user authentication, post creation, and a comment system.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing the API with Postman](#testing-the-api-with-postman)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (registration and login).
- Create, read, update, and delete blog posts.
- Add and delete comments on blog posts.
- Responsive UI using Bootstrap or Tailwind CSS.
- Infinite scrolling on the homepage for blog posts.
- Search functionality to filter blog posts by title or author.
- User-specific blog management.
- Notifications using `react-toastify`.

## Technologies Used

- **Frontend**: Next.js, React, Axios, Redux (for state management), Joi (for validation), Bootstrap or Tailwind CSS.
- **Utilities**: dotenv for environment variable management.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A running instance of the backend API.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DIp15739/blog-task-tender247-frontend

   cd blog-task-tender247-frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory of the project and add your API base URL:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Your application will be running at `http://localhost:3000`.

## Folder Structure

```
├─ .gitignore
├─ components
│  ├─ AuthForm.js
│  ├─ BlogCard.js
│  ├─ CommentForm.js
│  ├─ Footer.js
│  ├─ Header.js
│  ├─ LoadingSpinner.js
│  ├─ LoginForm.js
│  └─ Notification.js
├─ layouts
│  └─ MainLayout.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ auth
│  │  ├─ login.js
│  │  └─ register.js
│  ├─ blog
│  │  ├─ myblog.js
│  │  └─ [id].js
│  ├─ index.js
│  └─ _app.js
├─ README.md
├─ redux
│  ├─ actions
│  │  ├─ authActions.js
│  │  ├─ commentActions.js
│  │  └─ postActions.js
│  ├─ reducers
│  │  ├─ authReducer.js
│  │  ├─ commentReducer.js
│  │  └─ postReducer.js
│  └─ store.js
├─ styles
│  └─ globals.css
└─ utils
   └─ api.js
```
