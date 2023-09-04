# ShopyShop (Redux Version)

ShopyShop is a web application for the customers of an e-commerce business. It allows users to register, login, browse products, add them to a cart, make orders, and more.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Redux State Management](#redux-state-management)
- [Folder Structure](#folder-structure)

## Demo

[Link to the live demo of your application]


## Features

- **User Authentication**: Register and log in to access your account.
- **Product Catalog**: Browse a wide range of products with detailed information.
- **Shopping Cart**: Add and remove products, adjust quantities and review your cart.
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
   git clone https://github.com/yourusername/ShopyShop-redux.git
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
📦shopyshop-redux
 ┣ 📂public
 ┃ ┣ 📜favicon.png
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜favicon.png   - LOGO 
 ┃ ┣ 📂Components
 ┃ ┃ ┣ 📂CSS
 ┃ ┃ ┃ ┗ 📜itemCard.module.css
 ┃ ┃ ┣ 📜CartItem.js
 ┃ ┃ ┣ 📜FilterComponent.js
 ┃ ┃ ┣ 📜ItemCard.js
 ┃ ┃ ┣ 📜ItemCardList.js
 ┃ ┃ ┣ 📜Loader.js
 ┃ ┃ ┣ 📜NavBar.js
 ┃ ┃ ┣ 📜notify.js
 ┃ ┃ ┗ 📜ProductDetailsModal.js
 ┃ ┣ 📂FireBaseDB
 ┃ ┃ ┗ 📜firebaseInit.js
 ┃ ┣ 📂Pages
 ┃ ┃ ┣ 📜Cart.js
 ┃ ┃ ┣ 📜ErrorPage.js
 ┃ ┃ ┣ 📜Home.js
 ┃ ┃ ┣ 📜MyOrder.js
 ┃ ┃ ┣ 📜SignIn.js
 ┃ ┃ ┗ 📜SignUp.js
 ┃ ┣ 📂ReduxToolKit
 ┃ ┃ ┣ 📜cartReducer.js
 ┃ ┃ ┣ 📜productReducer.js
 ┃ ┃ ┣ 📜store.js
 ┃ ┃ ┗ 📜userReducer.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜SOP.txt
 ┗ 📜tailwind.config.js


