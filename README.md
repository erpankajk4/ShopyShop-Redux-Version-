# ShopyShop (Redux Version)

ShopyShop is a web application for the customers of an e-commerce business. It allows users to register, login, browse products, add them to a cart, make orders, and more.

## Hosted Link on Netlify
https://shopyshop-redux.netlify.app - Click the Link to Preview <br/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/0c8ecddc-7bf5-45d3-8f79-df5d8485a808/deploy-status)](https://app.netlify.com/sites/shopyshop-redux/deploys) <br/>
**Note:**
Product loading on the hosted link may take about 10 seconds initially as it fetches data from the API and stores it in Firestore DB before rendering it on the DOM, but after the first loading, it loads faster.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Redux State Management](#redux-state-management)
- [Folder Structure](#folder-structure)

## Demo
![Home Page](https://github.com/erpankajk4/ShopyShop-Redux-Version-/assets/118353291/41681f92-6146-455a-9564-b079ec5b6a98)

## Features

- **User Authentication**: Register and log in to access your account.
- **Product Catalog**: Browse a wide range of products with detailed information.
- **Shopping Cart**: Add and remove products, adjust quantities and review your cart, cart badge.
- **Real-time Updates**: Cart and product listings update in real-time using FireBase.
- **Orders History**: View your past orders and purchase details.
- **Efficient State Management**: Redux Toolkit ensures organized and efficient state handling.
- **Performance Optimization**: Memoized selectors and normalized state structure.
- **Firebase Integration**: Firestore for data storage and Firebase Authentication for secure logins.
- **Toasts & Notifications**: Receive notifications for successful actions and errors.
- **Responsive Design**: Enjoy a seamless experience on various screen sizes.
- **Search & Filter**: Easily find products using search and category filters.

## Technologies Used

- **React**: Building user interfaces.
- **Redux Toolkit**: Managing global state.
- **Firebase**: Authentication and data storage.
- **Axios**: Making network requests.
- **React Router DOM**: Client-side routing.
- **Tailwind CSS**: Styling the application.
- **Font Awesome**: High-quality icons.
- **React Toastify**: Displaying notifications.
- **React Spinners**: Adding loading indicators.

## Getting Started

Follow these steps to set up and run the ShopyShop Redux Version on your local machine.

1. Clone the repository:

   ```
   git clone https://github.com/erpankajk4/ShopyShop-Redux-Version-.git
   cd ShopyShop-redux
   npm install
   ```
2. Install the dependencies:
```
npm install
```
3. Start the server:
```
npm start
```
The application should now be running at `http://localhost:3000`.

## Redux State Management

Redux is a state management library used in the ShopyShop Redux Version application to manage global state, ensuring a consistent and predictable data flow throughout the application. Redux Toolkit is utilized to simplify and streamline the Redux setup.

### Reducers and Actions

#### `cartReducer.js`

- **addItem**: An asynchronous thunk responsible for adding a product to the user's cart. It checks if the product is already in the cart and handles the addition accordingly.

- **fetchCartProducts**: An asynchronous thunk for fetching cart products in real-time. It listens for changes to the cart collection and updates the cart items in the state.

- **removeFromCart**: An asynchronous thunk to remove a particular product from the cart.

- **increaseQuantity**: An asynchronous thunk to increase the quantity of a specific product in the cart.

- **decreaseQuantity**: An asynchronous thunk to decrease the quantity of a product in the cart or remove it if the quantity reaches zero.

- **purchase**: An asynchronous thunk to purchase all items in the cart. It removes items from the cart one by one and adds them to the MyOrders collection.

#### `productReducer.js`

- **fetchProductsAndStore**: An asynchronous thunk responsible for fetching from `https://fakestoreapi.com/products` and storing products in DataBase . It checks the last fetch timestamp to determine if data should be fetched from an external API or Firebase.

#### `userReducer.js`

- **signIn**: An asynchronous thunk to handle user sign-in. It signs in the user using email and password, updates the userUID in the Redux store, and stores it in local storage.

- **logOut**: An asynchronous thunk to handle user log-out. It logs the user out, clears the userUID from the state, and removes it from local storage.

### Redux State Structure

The Redux state is divided into multiple parts:

- **Cart State**: Managed by `cartReducer.js`, including cart items, loading state, and error handling.

- **Product State**: Managed by `productReducer.js`, which holds the list of products, loading state, and error handling.

- **User State**: Managed by `userReducer.js`, storing the user's unique identifier (UID).


### Firebase Integration

Firestore from Firebase is used for data storage and Firebase Authentication is used for user sign-in and log-out.

With Redux and Firebase, ShopyShop Redux Version ensures efficient state management and data handling, providing a seamless shopping experience for users.


## Folder Structure
📦shopyshop-redux<br/>
 ┣ 📂public<br/>
 ┃ ┣ 📜favicon.png<br/>
 ┃ ┗ 📜index.html<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂assets<br/>
 ┃ ┃ ┗ 📜favicon.png   - LOGO <br/>
 ┃ ┣ 📂Components<br/>
 ┃ ┃ ┣ 📂CSS<br/>
 ┃ ┃ ┃ ┗ 📜itemCard.module.css<br/>
 ┃ ┃ ┣ 📜CartItem.js<br/>
 ┃ ┃ ┣ 📜FilterComponent.js<br/>
 ┃ ┃ ┣ 📜ItemCard.js<br/>
 ┃ ┃ ┣ 📜ItemCardList.js<br/>
 ┃ ┃ ┣ 📜Loader.js<br/>
 ┃ ┃ ┣ 📜NavBar.js<br/>
 ┃ ┃ ┣ 📜notify.js<br/>
 ┃ ┃ ┗ 📜ProductDetailsModal.js<br/>
 ┃ ┣ 📂FireBaseDB<br/>
 ┃ ┃ ┗ 📜firebaseInit.js<br/>
 ┃ ┣ 📂Pages<br/>
 ┃ ┃ ┣ 📜Cart.js<br/>
 ┃ ┃ ┣ 📜ErrorPage.js<br/>
 ┃ ┃ ┣ 📜Home.js<br/>
 ┃ ┃ ┣ 📜MyOrder.js<br/>
 ┃ ┃ ┣ 📜SignIn.js<br/>
 ┃ ┃ ┗ 📜SignUp.js<br/>
 ┃ ┣ 📂ReduxToolKit<br/>
 ┃ ┃ ┣ 📜cartReducer.js<br/>
 ┃ ┃ ┣ 📜productReducer.js<br/>
 ┃ ┃ ┣ 📜store.js<br/>
 ┃ ┃ ┗ 📜userReducer.js<br/>
 ┃ ┣ 📜App.js<br/>
 ┃ ┣ 📜index.css<br/>
 ┃ ┗ 📜index.js<br/>
 ┣ 📜.gitignore<br/>
 ┣ 📜package-lock.json<br/>
 ┣ 📜package.json<br/>
 ┣ 📜README.md<br/>
 ┣ 📜SOP.txt<br/>
 ┗ 📜tailwind.config.js<br/>
![Product Modal ](https://github.com/erpankajk4/ShopyShop-Redux-Version-/assets/118353291/57844ed7-afba-4b38-861b-d449a1d0726c)
![SignIn Page](https://github.com/erpankajk4/ShopyShop-Redux-Version-/assets/118353291/2554c29d-baae-4966-ae76-570b43ef2d10)
![SignOut Page](https://github.com/erpankajk4/ShopyShop-Redux-Version-/assets/118353291/c709882f-c949-430b-ac82-c6628b1f22d0)
![Cart Page](https://github.com/erpankajk4/ShopyShop-Redux-Version-/assets/118353291/f9fca465-6f47-4a0e-aa53-99b7e942c7df)
![My Order Page](https://github.com/erpankajk4/ShopyShop-Redux-Version-/assets/118353291/7ac51235-16ef-4085-b315-33d037789b36)
![Loading](https://github.com/erpankajk4/ShopyShop-Redux-Version-/assets/118353291/a7be1788-ecac-4302-b1d9-00bd563e7ff5)
![error page](https://github.com/erpankajk4/ShopyShop-Redux-Version-/assets/118353291/78a034f6-6076-475b-ab65-d9fb1b4aebb1)


