# frontend-oredata-demo-banking-app
## This is the front-end of the demo project developed for the Oredata recruitment process.
The project uses JWT authentication, Axios for HTTP requests, React Redux for state management, and React Router for client-side routing.

## .env file
REACT_APP_API_BASE_URL=https://{your_url}/api
## Project Overview

### Login & Register Pages
Unless logging in and getting JWT token, users cannot reach any other routes except "/login" and "/register". If user tries to reach another route like "/dashboard/home", user automatically forwarded to "/login" route.

<img width="1080" height="680" alt="front-1" src="https://github.com/user-attachments/assets/5c076fb0-7e23-4550-9e37-72e19ab86220" />
<img width="1080" height="681" alt="front-2" src="https://github.com/user-attachments/assets/92122b13-5bf4-4fed-95c1-565b5e84ba71" />

### Home Page and Components
After logging in successfully, user gets JWT token and grants access to the application. User automatically forwarding to the "/dashboard/home" route after a successful login. Now user cannot reach "/login" and "/register" routes. If user tries to reach these routes, user automatically forwarded to "/dashboard/home" route. Now user can reach all available routes in the "/dashboard/**"

On the Navbar, user can go any route as they wish quickly. Also on the right side, there is a user information and Logout button that applies the logging out logic for user. Deletes the token and forwards user to "/login" page.

<img width="1080" height="685" alt="front-3" src="https://github.com/user-attachments/assets/5bba258c-7b24-4188-9c35-cbb8113a664c" />

### Account Pages

In this panel, user can preview all accounts they have. On the top of the table, there are options for filtering accounts. In the page, user can go to the "Create New Account" page, "View Details" page and "Transaction History" of the selected account. 

<img width="1080" height="683" alt="front-4" src="https://github.com/user-attachments/assets/3ef28237-3726-44be-9c9f-1d3f75c0f263" />
<img width="1080" height="681" alt="front-5" src="https://github.com/user-attachments/assets/5c41a984-3ac8-40a7-acb8-15151602e62c" />
<img width="1080" height="682" alt="front-6" src="https://github.com/user-attachments/assets/ff33bd79-f785-4c25-b9f8-1bc78ad48954" />

In the Create Account page, user can create accounts. For testing, users can type their own balance when creating new account.

<img width="1080" height="680" alt="front-7" src="https://github.com/user-attachments/assets/dbc2593c-1ece-4a6c-b2f7-7ad70f1f943d" />


In the Account Details page, user can view specific account's details. If user don't presses the "Update Account" button, this page can be view read only. However, if user presses the "Update Account" button new buttons shows up and Account Name becomes mutable and can be changed by user. Also users can delete their own account. 

<img width="1080" height="683" alt="front-8" src="https://github.com/user-attachments/assets/98a62390-d74f-4f81-ba9a-a2743efd4faa" />
<img width="1080" height="682" alt="front-9" src="https://github.com/user-attachments/assets/2b823cad-ac3b-4279-bcfc-98475cfb6919" />

In the Transfer page, all accounts of the user are listed. User can select specific account and transfer money from it. When an account selected, the Sender Account Number box automatically filled and becomes immutable. Recipient Account Number can be entered by free text. Also if user wants to transfer between their own account, user can easily select the account and Recipient Account Number part will be filled automatically. Also user cannot transfer to the same account number. If Amount is sufficient and proper, transaction can be done. 

<img width="1080" height="685" alt="front-10" src="https://github.com/user-attachments/assets/fcc0c1f9-9fc6-4b7c-9356-519337f6b6e0" />
<img width="1080" height="683" alt="front-11" src="https://github.com/user-attachments/assets/734103ef-b671-434b-bacd-7a2b1924e05c" />

In the Transaction History page, user can see the specific account's transactions. Transaction Date can be seen on the table. "From" and "To" part, the blue text indicates that, that account is previewing right now. Amount part, shows that whether the money comes in or out. Status shows that the transaction completed successfully or failed.

<img width="1080" height="682" alt="front-12" src="https://github.com/user-attachments/assets/420ac5ec-4240-4c3e-9381-e6833fda8307" />

In these pictures, another user's (testuser2) account can be seen. The transfers also can be done between different user's accounts.  

<img width="1078" height="679" alt="front-13" src="https://github.com/user-attachments/assets/7192ff82-ad49-4870-a0e5-a59c28ce028e" />
<img width="1080" height="680" alt="front-14" src="https://github.com/user-attachments/assets/97f2e005-f010-4917-ab97-1fdd73724307" />
