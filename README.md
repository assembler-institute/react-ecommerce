`#react-basics` `#assembler-institute-of-technology` `#master-in-software-engineering`

# React E-commerce <!-- omit in toc -->

A demo app to learn the basics of React and to create a shopping cart using hooks.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Instructions](#instructions)
- [Extra steps 💯](#extra-steps-)
- [Requirements](#requirements)
- [Available Scripts](#available-scripts)
- [Author](#author)
- [License](#license)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Run `npm i` or `yarn` in the terminal to install the dependencies.

Then, run `npm run start` or `yarn start` to start up the app.

The app will be run by default in the following url: `http://localhost:3000/`

### The repo

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/react-basics-hooks-shopping-cart.git
```

## Instructions

Throughout this week you will start creating the dashboard of your e-commerce. We will start this pill with the contents given during the class, and scalate as we get deepen into the information.

The `main` branch of the future repos will have the favourite class solution of the previous pill so that you can get started with it, should you get stucked at any stage.

### Instructions

<img src='https://github.com/assembler-institute/react-basics-hooks-shopping-cart/blob/main/src/img/repo/react-basics-classes-initial.png?raw=true' width='600'>

Once you have installed the dependencies of the pill you will need to start using components in a way that is as reusable and modularized as possible.

Each UI element should be a React component, for example, buttons are UI elements that are reused in multiple places in the app so they should be extracted to React components.

### App features

Once you have modularized the app in components you will have to implement to logic so that you can create an ecommerce app.

#### Rendering the products

The products are stored in the `products.js` file which you should use to render the products to the screen dynamically using a JavaScript loop `map`.

As we go along the first lessons, each product should have the event listeners and methods needed to handle the UI interactions needed such as adding the product to the cart.

#### Add to cart

<img src='https://github.com/assembler-institute/react-basics-hooks-shopping-cart/raw/main/src/img/repo/react-basics-classes-add-to-cart.png' width='600'>

During the first stage, you will be required to have a counter for the quantity of products you would like to have directly on each product. Clicking the `Add to Cart` button should add the product that was clicked to the shopping cart.

By default, the shopping cart will be empty.

The items in the cart should be able to render in the shopping cart when the `Add to Cart` button is clicked to add products to the cart. You can set any default items at the start.

#### Shopping cart

<img src='https://github.com/assembler-institute/react-basics-hooks-shopping-cart/raw/main/src/img/repo/react-basics-classes-add-to-cart.png' width='600'>

Once a product has been added to the cart you should be able to:

- Edit the product quantity using the select element which will update the cart’s total price
- Remove items from the cart which will update the cart’s total price
- The cart total price should always be updated so that it represents the total cost of all the items in the cart
- When the cart is empty you should conditionally render a message inside the cart saying that the cart is empty. Then, when the cart has had items added, you should instead render the cart items and remove the default message.

### State management

You should use React to handle the state management in the app. You cannot use a state management library.

## Extra steps 💯

Once you have finished the initial part of the pill you should implement the following steps to improve your skills:

<img src='https://github.com/assembler-institute/react-basics-hooks-shopping-cart/raw/main/src/img/repo/react-basics-classes-add-to-cart.png' width='600'>

- You should check if the cart item has already been added to the cart to only update the quantity instead of adding it again. You should stablish a quantity limit for each product that could depend upon the stock you stablish on your `products.js` data.
- Store the items in local storage and load them if the page is reloaded so that the cart items are not lost of page refresh
- Each time the page is refreshed you should load the cart items from local storage to save them in the React state so that the app renders with the contents from local storage if there are any of them. Otherwise, the cart should display the default message of “Your cart is empty”

## Requirements

- You should extract and modularize all the UI elements to React components
- The products must be rendered dynamically using JavaScript loops
- The products should be rendered as React components
- You cannot use external state management libraries
- All the components that require state should be created using React
- Use `functional components` and `setState` methods to update the state of the application

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Learn More <!-- omit in toc -->

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

Licensed under the [MIT License](./LICENSE).
