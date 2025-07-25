# 🏦 `frontend-oredata-demo-banking-app`

This is the **frontend** of a demo project developed for the **Oredata recruitment process**.  
It is built using:

- 🔐 **JWT authentication**
- 🔁 **Axios** for HTTP requests
- 🗃️ **React Redux** for state management
- 🌐 **React Router** for client-side routing**

---

## 🔧 `.env` File

Make sure to define the base URL for your API in the `.env` file as below:

```env
REACT_APP_API_BASE_URL=https://{your_url}/api
```

---

## 🚀 Project Overview

### 🔑 Login & Register Pages

- Unauthenticated users can only access `/login` and `/register`.
- If an unauthenticated user tries to access any other route (e.g., `/dashboard/home`), they are **automatically redirected to `/login`**.

![Login Page](https://github.com/user-attachments/assets/5c076fb0-7e23-4550-9e37-72e19ab86220)
![Register Page](https://github.com/user-attachments/assets/92122b13-5bf4-4fed-95c1-565b5e84ba71)

---

### 🏠 Home Page & Navigation

- After successful login, the user is redirected to `/dashboard/home`.
- Access to `/login` and `/register` is now **restricted**.
- Users can now navigate freely within all `/dashboard/**` routes.
- The **navbar** provides quick access to routes, while the right side displays **user information** and a **Logout** button.

![Home Page](https://github.com/user-attachments/assets/5bba258c-7b24-4188-9c35-cbb8113a664c)

---

## 🧾 Account Management

### 📋 Account List

- Displays all user accounts.
- Includes **filtering options** at the top.
- Allows navigation to:
  - **Create New Account**
  - **View Details**
  - **Transaction History**

![Account List](https://github.com/user-attachments/assets/3ef28237-3726-44be-9c9f-1d3f75c0f263)
![Filter Accounts](https://github.com/user-attachments/assets/5c41a984-3ac8-40a7-acb8-15151602e62c)
![Navigation](https://github.com/user-attachments/assets/ff33bd79-f785-4c25-b9f8-1bc78ad48954)

---

### 🆕 Create Account

- Users can create a new account and manually set an initial balance (for testing purposes).

![Create Account](https://github.com/user-attachments/assets/dbc2593c-1ece-4a6c-b2f7-7ad70f1f943d)

---

### 🧾 Account Details

- Displays read-only details of the selected account by default.
- On clicking **"Update Account"**, fields become editable and extra buttons are shown.
- User can also **delete** their account.

![Account Details View](https://github.com/user-attachments/assets/98a62390-d74f-4f81-ba9a-a2743efd4faa)
![Account Update Mode](https://github.com/user-attachments/assets/2b823cad-ac3b-4279-bcfc-98475cfb6919)

---

## 💸 Transfers

- All of the user's accounts are listed for selection.
- Selecting a sender account:
  - Auto-fills and locks the **Sender Account Number**.
  - Enables transfer to another account via **Recipient Account Number** (free-text input).
  - Allows auto-selection of another **own account** for easy internal transfers.
- Prevents:
  - Sending to the same account.
  - Transfers with insufficient funds.

![Transfer Page](https://github.com/user-attachments/assets/fcc0c1f9-9fc6-4b7c-9356-519337f6b6e0)
![Transfer Action](https://github.com/user-attachments/assets/734103ef-b671-434b-bacd-7a2b1924e05c)

---

## 📈 Transaction History

- Displays transaction logs for a specific account.
- Includes:
  - **Date**, **Amount**, **Status**
  - "From" and "To" fields, highlighting the current account in blue
  - Amount column shows inflow/outflow direction

![Transaction History](https://github.com/user-attachments/assets/420ac5ec-4240-4c3e-9381-e6833fda8307)

---

## 🔄 Inter-user Transfers

- Transfers can also be made between different users.
- Example: Transactions from `testuser2`'s account are shown below:

![Other User Account](https://github.com/user-attachments/assets/7192ff82-ad49-4870-a0e5-a59c28ce028e)
![Other User Transfer](https://github.com/user-attachments/assets/97f2e005-f010-4917-ab97-1fdd73724307)

---
