# ITI Client-Side Development Labs (HTML, CSS, JS)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Labs Completed](https://img.shields.io/badge/Labs-1/5-brightgreen.svg)  <!-- Update as you add more labs -->

## Overview
This repository contains my laboratory exercises for the **Client-Side Development** course in the ITI scholarship. The course focuses on building interactive web pages using HTML for structure, CSS for styling, and JavaScript for behavior. Labs start with basic HTML elements and progress to dynamic scripting and responsive design.

We used standard web tools, with labs emphasizing hands-on coding and browser rendering.

There are [X] labs in total (update as completed), building progressively:
- **Lab 1**: Basic HTML tags, lists, images, links, and simple pages.
- **Lab 2**: [e.g., CSS basics, selectors, layouts]
- **Lab 3**: [e.g., Advanced CSS, responsive design]
- **Lab 4**: [e.g., JavaScript fundamentals, DOM manipulation]
- **Lab 5**: [e.g., JS events, APIs, or full projects]

Each lab is in its own folder (`lab-01`, etc.) with:
- Source files: `.html`, `.css`, `.js` (plus assets like images)
- README.md: Objectives, key tasks, code highlights, and sample outputs/screenshots

## Repository Structure
```
ITI-Client-Side-Labs/
├── lab-01/          # Basic HTML elements and pages
├── lab-02/          # [Future lab]
├── assets/          # Shared images/icons (if needed)
└── README.md        # This file - course overview
```

## Tools & Setup
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Editor**: Visual Studio Code (or any text editor)
- **Browser**: Chrome/Firefox for testing (DevTools for debugging)
- **How to Run**:
  1. Clone the repo.
  2. Open `.html` files in a browser (right-click → Open with Browser).
  3. For JS-heavy labs, use Live Server extension in VS Code for auto-reload.

## Key Skills Demonstrated
- Semantic HTML structure and deprecated tags (e.g., font)
- Lists, images, links, and image maps
- Basic page layout with headings, paragraphs, HR
- (Later labs): CSS styling, JS interactivity

This repo is part of my ITI scholarship portfolio — check my profile for other courses like OOP in C++ and Database Systems!

Happy coding! 🚀

---

*(Now, for Lab 1's specific README – place this in `lab-01/README.md`.)*

# Lab 1: Basic HTML Elements

## Lab Objectives
- Practice fundamental HTML tags: headings, paragraphs, images, lists, preformatted text, font (deprecated), HR, maps.
- Build simple static pages with links, alignments, and basic structure.
- Understand rendering in browsers.

Tasks (from provided images and solutions):
1. Font tag example.
2. Preformatted C program code.
3. Personal page with image and story.
4. Nested ordered lists (fruits/vegetables).
5. Image map with social links.
6. Bistro page with centered logo, headings, and HR.

## Project Structure
```
lab-01/
├── task1.html       # Font tag demo
├── task2.html       # Preformatted C code
├── task3.html       # Ricardo's dog page
├── task4.html       # Nested lists
├── task5.html       # Image map with links
├── task6.html       # Black Goose Bistro page
├── assets/          # Images (img.png, icon.png, logo.png, ass5.jpg)
└── README.md        # This file
```

## Key Highlights
Here are snippets from standout tasks. For full code, open the .html files in a browser.

### Task 4: Nested Ordered Lists
```html
<ol>
    <li>Fruits
        <ol>
            <li>Mango</li>
            <li>Orange</li>
        </ol>
    </li>    
    <li>Vegetables
        <ol>
            <li>Cabbage</li>
            <li>Capsicum
                <ol>
                    <li>Green Capsicum</li>
                    <li>Yellow Capsicum</li>
                    <li>Red Capsicum</li>
                </ol>
            </li>
        </ol>
    </li>    
</ol>
```

   **Explanation**: Demonstrates ordered lists with nesting for hierarchy.  
   **Sample Output**: (See provided image of fruits/vegetables list.)

### Task 5: Image Map
```html
<img src="./assets/ass5.jpg" usemap="#mymap">
<map name="mymap">
    <area shape="rect" coords="90,38,284,76" href="https://facebook.com">
    <area shape="circle" coords="111,109,50" href="https://youtube.com">
    <area shape="poly" coords="91,167, 88,196, 281,195, 286,166" href="https://instagram.com">
</map>
```

   **Explanation**: Creates clickable areas on an image linking to social sites.  
   **Sample Output**: Interactive image with regions (see social icons image).

### Task 6: Bistro Page
```html
<div align="center"><img src="./assets/logo.png"></div>
<p align="center"><font size="5"><b>BLACK GOOSE BISTRO</b></font></p>
<hr color="cyan" width="800"/>
<h2><font color="red">The Restaurant</font></h2>
<p>The Black Goose Bistro offers casual lunch and dinner fare in a hip atmosphere. The menu changes regularly to highlight the freshest ingredients.</p>
<!-- More sections... -->
```

   **Explanation**: Basic layout with centering, colors, and HR for separation.  
   **Sample Output**: (See provided bistro page screenshot.)

## Notes
- Labs use deprecated tags (e.g., font, align) for educational purposes—modern CSS preferred.
- Test in browser; no JS/CSS in this lab.
- Outputs match provided images (e.g., lists, font examples, bistro page).

Foundational HTML practice! 🚀