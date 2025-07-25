# frontend-oredata-demo-banking-app

## This is the front-end of the demo project developed for the Oredata recruitment process.

The project uses **JWT authentication**, **Axios** for HTTP requests, **React Redux** for state management, and **React Router** for client-side routing.

---

## 📌 Routing Overview

| Route | Access | Description |
|-------|--------|-------------|
| `/login` | Public | Login page (unauthenticated users only) |
| `/register` | Public | Registration page (unauthenticated users only) |
| `/dashboard/home` | Protected | Homepage after login |
| `/dashboard/accounts` | Protected | List of user's accounts |
| `/dashboard/accounts/new` | Protected | Create a new account |
| `/dashboard/accounts/:id` | Protected | View and update specific account details |
| `/dashboard/transaction-history/:id` | Protected | View transaction history of an account |
| `/dashboard/transfer` | Protected | Transfer money between accounts |
| `*` | Redirect | Any undefined or unauthorized route redirects to `/login` |

---

## 🔐 Login & Register Pages

Unless logged in and received a JWT token, users cannot access any routes other than `/login` and `/register`. If a user tries to access a protected route (e.g. `/dashboard/home`), they will be automatically redirected to `/login`.

<img width="1080" height="680" alt="front-1" src="https://github.com/user-attachments/assets/5c076fb0-7e23-4550-9e37-72e19ab86220" />
<img width="1080" height="681" alt="front-2" src="https://github.com/user-attachments/assets/92122b13-5bf4-4fed-95c1-565b5e84ba71" />

---

## 🏠 Home Page and Navigation

After successful login, the user is redirected to `/dashboard/home`, and cannot access `/login` or `/register` again unless logged out.

On the Navbar, users can navigate to different pages quickly. The right side displays user information and a **Logout** button, which clears the token and redirects to `/login`.

<img width="1080" height="685" alt="front-3" src="https://github.com/user-attachments/assets/5bba258c-7b24-4188-9c35-cbb8113a664c" />

---

## 🧾 Account Pages

Users can view all of their accounts in a table. Filter options are available at the top. Users can also:

- Create a new account
- View account details
- View transaction history

<img width="1080" height="683" alt="front-4" src="https://github.com/user-attachments/assets/3ef28237-3726-44be-9c9f-1d3f75c0f263" />
<img width="1080" height="681" alt="front-5" src="https://github.com/user-attachments/assets/5c41a984-3ac8-40a7-acb8-15151602e62c" />
<img width="1080" height="682" alt="front-6" src="https://github.com/user-attachments/assets/ff33bd79-f785-4c25-b9f8-1bc78ad48954" />

### ➕ Create Account

Users can input their desired balance when creating a new account for testing purposes.

<img width="1080" height="680" alt="front-7" src="https://github.com/user-attachments/assets/dbc2593c-1ece-4a6c-b2f7-7ad70f1f943d" />

### 🔍 Account Details & Edit

- View account in read-only mode.
- Pressing "Update Account" makes the account name editable.
- Accounts can also be deleted.

<img width="1080" height="683" alt="front-8" src="https://github.com/user-attachments/assets/98a62390-d74f-4f81-ba9a-a2743efd4faa" />
<img width="1080" height="682" alt="front-9" src="https://github.com/user-attachments/assets/2b823cad-ac3b-4279-bcfc-98475cfb6919" />

---

## 💸 Transfer Page

Users can transfer funds:

- Between their own accounts
- To accounts belonging to other users

The sender account is automatically selected and locked once chosen. Transfers to the same account are not allowed. Transfers only succeed if the amount is valid and the balance is sufficient.

<img width="1080" height="685" alt="front-10" src="https://github.com/user-attachments/assets/fcc0c1f9-9fc6-4b7c-9356-519337f6b6e0" />
<img width="1080" height="683" alt="front-11" src="https://github.com/user-attachments/assets/734103ef-b671-434b-bacd-7a2b1924e05c" />

---

## 📜 Transaction History Page

Users can view all transactions for a selected account.

- Blue text in "From" or "To" fields indicates the currently viewed account
- The direction of money is clear via amount signs
- Status shows whether the transaction succeeded or failed

<img width="1080" height="682" alt="front-12" src="https://github.com/user-attachments/assets/420ac5ec-4240-4c3e-9381-e6833fda8307" />

---

## 👥 Transfers Between Users

Transfers can also occur between different users' accounts.

<img width="1078" height="679" alt="front-13" src="https://github.com/user-attachments/assets/7192ff82-ad49-4870-a0e5-a59c28ce028e" />
<img width="1080" height="680" alt="front-14" src="https://github.com/user-attachments/assets/97f2e005-f010-4917-ab97-1fdd73724307" />
