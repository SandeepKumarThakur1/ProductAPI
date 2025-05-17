# 🗂️ Project Title: Mini E-commerce Product Display

## 🎯 Goal:

Fetch product data from Fake Store API and display it in a styled UI using React.

📦 **API URL**: https://fakestoreapi.com/products

---

## ✅ Tools & Skills Needed:

- React.js
- JavaScript (ES6+)
- useEffect & useState
- CSS or TailwindCSS (optional for styling)
- API fetch (fetch or axios)

---

## 🧩 Features to Implement:

1. Product Listing Page

   - Fetch products from API
   - Show product title, image, price, category
   - Show loading text while fetching
   - Handle errors (if API fails)

2. Product Details Page (optional for extra learning)

   - On clicking a product, show full details on a new route
   - Use react-router-dom for navigation

3. Filter by Category (optional)

   - Add dropdown to filter by categories like electronics, jewelery, etc.

4. Search Feature (optional)
   - Search bar to filter products by title

---

## 📋 Project Plan (Step-by-Step)

Step 1: Setup Project

- Create a new React app using Create React App
- Start the development server

Step 2: Create ProductList Component

- Use useState to manage product list
- Use useEffect to fetch data from Fake Store API
- Set the product data in state and display title, price, image, and category
- Show "Loading..." while fetching data
- Handle fetch errors gracefully

Step 3: Use the Component in App

- Import the ProductList component in App.js
- Render it inside the main App layout

---

## 📦 Optional Add-ons (for extra learning)

- Add a product detail page using routing
- Add a dropdown to filter by category
- Add a search bar to find products by title
- Add a loading spinner instead of plain text
- Style using TailwindCSS or Bootstrap

---

## 📝 Summary

| Task                           | Status   |
| ------------------------------ | -------- |
| Project setup                  | ✅       |
| Product fetch & display        | ✅       |
| Loading state                  | ✅       |
| Error handling                 | ✅       |
| Extra features (search/filter) | Optional |

"""
