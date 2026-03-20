# Food Ordering App (MERN Stack)

A full-stack food ordering platform built with the MERN stack (MongoDB, Express, React, Node.js), featuring Stripe payment processing and Firebase user authentication.

## Features

- Product menu with category filtering
- Shopping cart with item management
- User registration and login (Firebase)
- Stripe payment integration with webhooks
- Admin panel to add new products
- Order confirmation page

## Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Auth**: Firebase Authentication
- **Payments**: Stripe

## Getting Started

### 1. Install frontend dependencies

```bash
npm install
```

### 2. Install backend dependencies

```bash
cd server && npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add the following:

```env
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
REACT_APP_STRIPE_PUBLISHABLE_KEY=""
REACT_APP_FIREBASE_CONFIG_API_KEY=""
REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN=""
REACT_APP_FIREBASE_CONFIG_PROJECT_ID=""
REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET=""
REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID=""
REACT_APP_FIREBASE_CONFIG_APP_ID=""
REACT_APP_FIREBASE_CONFIG_MEASUREMENT_ID=""
```

### 4. Start the backend

```bash
cd server
node index.js
```

Or with auto-reload:

```bash
cd server
nodemon index.js
```

### 5. Start the frontend

Go back to the project root and run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
