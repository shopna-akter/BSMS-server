# 🚲 Bike Servicing Management API

This is a backend API for managing bike servicing operations in a repair shop or service center. The API provides full CRUD capabilities for **Customers**, **Bikes**, and **Service Records**. It’s built with **Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.

---

## 📦 Features

- **Customer Management**
  - Create, read, update, and delete customers
- **Bike Management**
  - Register bikes and associate them with customers
  - Get all bikes or specific bike details
- **Service Record Management**
  - Log service records with status tracking (`pending`, `in_progress`, `done`)
  - Mark a service as complete with an optional completion date
  - Fetch all services or specific service record by ID
  - Get pending or overdue services (not completed within 7 days)
- **Validation**
  - Robust input validation using Zod
- **Database**
  - PostgreSQL with Prisma ORM

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Validation:** Zod

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bike-servicing-api.git
cd bike-servicing-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://youruser:yourpassword@localhost:5432/yourdbname?schema=public"
PORT=5000
```

### 4. Set Up the Database

Run Prisma commands to set up your schema and generate the client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

If you already have a database:

```bash
npx prisma db pull
```

### 5. Run the Development Server

```bash
npm run dev
```

The server should now be running on `http://localhost:5000`.

---

## 📫 API Endpoints

### Customers

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/api/customers`     | Get all customers            |
| GET    | `/api/customers/:id` | Get single customer by ID    |
| POST   | `/api/customers`     | Create a customer            |
| PATCH  | `/api/customers/:id` | Update customer info         |
| DELETE | `/api/customers/:id` | Delete a customer            |

### Bikes

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/bikes`    | Get all bikes            |
| GET    | `/api/bikes/:id`| Get single bike          |
| POST   | `/api/bikes`    | Add a new bike           |

### Services

| Method | Endpoint                          | Description                          |
|--------|-----------------------------------|--------------------------------------|
| GET    | `/api/services`                   | Get all service records              |
| GET    | `/api/services/:id`               | Get service by ID                    |
| GET    | `/api/services/status`            | Get pending or overdue services      |
| POST   | `/api/services`                   | Create a new service record          |
| PUT    | `/api/services/:id/complete`      | Mark a service as completed          |

---

## ⚠️ Notes

- Make sure PostgreSQL is installed and running locally.
- The database URL in `.env` must be valid and point to a created PostgreSQL database.
- You can test the endpoints using Postman or Thunder Client.

---

## 🙌 Author

- **Nihal** — [GitHub](https://github.com/shopna-akter)

---
