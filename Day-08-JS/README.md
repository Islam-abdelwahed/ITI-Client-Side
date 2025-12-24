# Lab 8: E-Commerce Website with Cart and Favorites Functionality

## Lab Objectives
This project builds upon the static e-commerce website created earlier in the course, enhancing it with dynamic client-side JavaScript features to implement core e-commerce functionality:

1. Display a product listing page with multiple products fetched and rendered dynamically.
2. Allow users to add products to a **Favorites (Wishlist)** list.
3. Allow users to add products to a **Shopping Cart** with quantity control.
4. Implement cart management:
   - Increase/decrease item quantity.
   - Remove items from the cart.
   - Calculate and display the total price in real-time.
   - Clear the entire cart.
5. Implement favorites management:
   - View all favorited products.
   - Clear the entire favorites list.
6. Persist both cart and favorites data using **localStorage** so items remain after page refresh.
7. Provide a consistent navigation experience across pages (Home, Products, About Us, Contact Us, Favorites, Cart).
8. Include basic static pages: Login, Signup, About Us, Contact Us, and individual Product detail view.

## Project Structure
```
ecommerce-lab/
├── aboutus.html         # About Us page with ITI branding
├── cart.html            # Shopping cart page with total and controls
├── contactus.html       # Contact information page
├── fav.html             # Favorites (wishlist) page
├── list.html            # Main product listing page (home)
├── login.html           # Login form (static)
├── product.html         # Single product detail page (example)
├── signup.html          # Signup form (static)
├── assets/
│   ├── home.png
│   ├── whats.png
│   ├── p (1).jpg ...    # Product images
│   └── ...              # Backgrounds and icons
├── css/
│   ├── common.css       # Shared styles (header, footer, layout)
│   ├── list.css         # Product grid styling
│   ├── fav.css          # Favorites page styling
│   ├── cart.css         # Cart page styling
│   ├── product.css      # Single product page
│   ├── login.css
│   ├── signup.css
│   ├── contactus.css
│   └── aboutus.css
├── scripts/
│   └── pages/
│       ├── list.js      # Renders products on list page
│       ├── favourate.js # Manages favorites display and clear
│       └── cart.js      # Full cart logic (add, update, remove, total)
└── README.md            # This file
```

## Key Highlights
Open `list.html` as the entry point. All functionality is client-side using vanilla JavaScript (ES6 modules).

### Product Listing (list.html + list.js)
```javascript
// Dynamically creates product cards with:
// - Image
// - Title, specs, price
// - "Add to Cart" and "Add to Favorites" buttons
// Clicking a product image navigates to product detail (static example)
```

   **Features**:
   - Responsive grid layout using Flexbox.
   - Hover effects on product cards.
   - Buttons trigger adding to cart/favorites with immediate localStorage persistence.

### Favorites System (fav.html + favourate.js)
```javascript
// Loads saved favorites from localStorage
// Displays them in a similar grid
// "Clear Favorites" button removes all items
```

   **Behavior**: Favorites persist across sessions and page refreshes.

### Shopping Cart System (cart.html + cart.js)
```javascript
// Full-featured cart with:
// - Quantity controls (+ / -)
// - Remove item button
// - Real-time total price calculation
// - "Clear Cart" button
```

   **Key Logic**:
   - Items stored in localStorage as JSON array.
   - Quantity updates modify the stored object.
   - Total price recalculated on every change.
   - Clean, responsive item layout with image, title, price, and controls.

### Shared UI Components
- Consistent dark header navigation with hover effects.
- Fixed footer with copyright.
- Responsive backgrounds and overlays on informational pages.
- Clean, modern card-based design on Contact/About pages.

### Static Pages
- **Login & Signup**: Styled forms (no backend validation).
- **About Us**: Displays ITI-related logos and branding.
- **Contact Us**: Shows phone, location, and hours in styled cards.
- **Single Product**: Example detail view with WhatsApp order link.

## Notes
- All interactivity is powered by **vanilla JavaScript** (no frameworks).
- Data persistence via **localStorage** — cart and favorites survive page reloads and browser closures (same device).
- Modular script structure using `type="module"` for clean separation.
- Responsive design with CSS Flexbox and media-friendly layouts.
- External ordering via WhatsApp link (realistic for small shops).
- No server-side code or database — fully static and client-side.

Bringing a full e-commerce experience to life with pure front-end technologies! 🛒✨