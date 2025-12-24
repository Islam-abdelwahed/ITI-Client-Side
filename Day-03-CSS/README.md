# Lab 3: Introduction to CSS - E-Commerce Site Project

## Lab Objectives
- First hands-on with CSS: Selectors, properties (colors, backgrounds, fonts, margins/padding), layouts (flex/grid alternatives via tables), and pseudo-classes (hover/active).
- Style HTML pages for a cohesive mini-website theme (e.g., e-commerce store with navigation, cards, forms).
- Practice separation of concerns: Common styles in shared CSS, page-specific overrides.
- Build responsive-ish elements (backgrounds, alignments) and interactive feedback (hover effects).

This lab is structured as a **small project**: A basic online store with pages for products listing, single product details, about us, contact us, login, and signup. It will be extended in future courses (e.g., adding JS interactivity or full responsiveness).

## Project Structure
```
lab-03/
├── aboutus.html     # About Us page
├── contactus.html   # Contact Us page with info cards
├── List.html        # Products listing page
├── login.html       # Login form
├── product.html     # Single product detail
├── signup.html      # Signup form
├── css/             # Stylesheets
│   ├── aboutus.css
│   ├── common.css   # Shared header and footer styles
│   ├── contactus.css
│   ├── list.css
│   ├── login.css
│   ├── product.css
│   └── signup.css
├── assets/          # Images (home.png, user.png, etc.)
└── README.md        # This file
```

## Key Highlights
Open .html files in a browser to view (use a local server for relative paths). Here are snippets from key parts.

### Common Header (from common.css)
```css
.header {
    background-color: #343a40; /* Darker gray for better contrast */
    width: 100%;
    padding: 10px;
    margin: 0;
    text-align: center;
}

.header li {
    list-style: none;
    display: inline-block;
    margin: 0 25px; /* Increased margin for better spacing */
    vertical-align: middle;
}

.header li a {
    padding: 12px 18px; /* Slightly larger padding */
    color: #ffffff;
    font: bold 15px tahoma;
    text-decoration: none;
}

.header li a:hover {
    cursor: pointer;
    color: #ffd700; /* Gold hover */
    background-color: #495057; /* Subtle background */
}
```

   **Explanation**: Shared navigation bar with hover effects for interactivity. Used across all pages.  
   **Sample Output**: Consistent dark header with links (Products, About Us, Contact Us) and home icon.

### Product Listing (from List.html and list.css)
```html
<ul class="header">
    <li><a href="list.html"><img src="./assets/home.png" width="37" height="37" /></a></li>
    <li><a href="">Products</a></li>
    <li><a href="aboutus.html">About Us</a></li>
    <li><a href="contactus.html">Contact Us</a></li>
    <li><a>Cart 🛒</a></li>
</ul>

<div class="products">
    <div class="product">
        <a href="product.html"><img src="./assets/p (3).jpg" alt="Product"></a>
        <p>Hp Laptop</p>
    </div>
    <!-- More products -->
</div>
```

```css
.products {
    display: inline-block;
    margin: 20px auto;
    text-align: center;
    width: 100%;
}

.product {
    display: inline-block;
    margin: 10px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease-in-out;
}

.product:hover {
    cursor: pointer;
    transform: scale(1.05);
}
```

   **Explanation**: Grid-like product display with images, captions, and hover scale effect. Links to single product page.  
   **Sample Output**: (See provided products screenshot with laptops and headphones.)

### Signup Form (from signup.html and signup.css)
```html
<table>
    <tr>
        <td><img src="./assets/user.png" width="50" height="50" /></td>
    </tr>
    <tr>
        <td> <input type="text" placeholder="enter your username" /></td>
    </tr>
    <!-- More fields: Email, Password, etc. -->
    <tr>
        <td>
            <input type="button" value="Sign Up" />
        </td>
    </tr>
</table>
```

```css
body {
    background-image: url(../assets/1-support-team.svg);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 40% auto;
    background-color: #f8f9fa;
}

table {
    padding: 20px 0px;
    background-color: #ffffff;
    text-align: center;
    margin: 10px;
    position: absolute;
    top: 100px;
    right: 100px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
}

input[type="text"]:focus,
input[type='password']:focus {
    border-bottom: 2px solid #81d4fa;
}
```

   **Explanation**: Table-layout form with background image, shadows, and focus effects.  
   **Sample Output**: (See provided signup form screenshot.)

## Notes
- CSS introduces backgrounds, transitions, and pseudo-classes for modern feel.
- Project is static HTML/CSS; no JS yet—will extend in upcoming labs/courses.
- Test locally; forms are placeholders (no backend).

First step into styled web pages—building toward full sites! 🚀