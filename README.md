# MUI Shop App

## Overview

The **MUI Shop App** is a simple e-commerce application built using **React**, **TypeScript**, and **Material-UI** components from the MUI library. The app allows users to browse through a list of products, add items to their shopping cart, and get notifications when an item is added. It is a small demonstration of using Material-UI for layout and styling along with a shopping cart functionality.

## Features

- Display a list of goods with product information such as name, price, and category.
- Add products to the shopping cart.
- View the shopping cart and total cost of items.
- Search functionality to filter products.
- Snackbar notification when a product is added to the cart.
- Built with modern tools like React, TypeScript, Vite, and MUI.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: TypeScript is a superset of JavaScript that adds static types.
- **Material-UI (MUI)**: A popular React UI framework with pre-built components based on Google's Material Design.
- **Vite**: A next-generation frontend tooling for fast development.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/mui-shop-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd mui-shop-app
   ```

3. **Install dependencies:**
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Scripts

The following scripts are available in the `package.json`:

- **`npm run dev`**: Starts the Vite development server for local development.
- **`npm run build`**: Builds the application for production.
- **`npm run lint`**: Lints the project using ESLint.
- **`npm run preview`**: Previews the production build of the app.

## Project Structure

The main components and files in the project are:

- **App.tsx**: The main entry point for the application where the header, product list, cart, and notifications are handled.
- **GoodsList.tsx**: Displays a list of goods, each rendered by the `GoodsItem` component.
- **GoodsItem.tsx**: Represents a single product with an image, price, and the option to add to the cart.
- **Basket.tsx**: Manages the shopping cart display, total calculation, and the ability to remove items.
- **Snack.tsx**: Handles the notification (`Snackbar`) when an item is added to the cart.
- **Search.tsx**: Provides a search bar to filter goods by name.
- **BasketItem.tsx**: Represents an individual item in the cart.

## Components

### `GoodsList.tsx`
Displays all the available products. The `GoodsItem` component is used to show each individual product.

### `GoodsItem.tsx`
A card component that shows product details (name, price, and image) and has a "Buy" button to add the item to the shopping cart.

### `Basket.tsx`
Shows the shopping cart with a list of added items. It calculates the total price and allows users to remove items.

### `Snack.tsx`
A `Snackbar` component that displays a success message when a product is added to the cart.

### `Search.tsx`
A search bar that filters the list of products by name.

## Dependencies

- **@mui/material**: Provides the Material-UI components.
- **@mui/icons-material**: Provides Material-UI icons.
- **@emotion/react** and **@emotion/styled**: Provides styling support for Material-UI components.
- **react**: Core React library.
- **react-dom**: DOM-specific methods for React.

## Development Dependencies

- **TypeScript**: Adds static type-checking for JavaScript code.
- **Vite**: For fast builds and local development.
- **ESLint**: For linting and enforcing coding standards.

## Usage

- **Adding products to the cart**: Click the "Buy" button on a product card to add it to the cart.
- **Viewing the cart**: Click on the shopping cart icon to view the items added to the cart.
- **Removing products from the cart**: Use the "Remove" button on items in the cart to delete them.
- **Search**: Use the search bar to filter products by name.

## Contributing

If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Enjoy shopping with the **MUI Shop App**! 🎉