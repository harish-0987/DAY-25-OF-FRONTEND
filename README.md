# ⚡ Day 25 of Frontend: Basic Level DOM Manipulation in JavaScript

Welcome to **Day 25 of the 100 Days Frontend Challenge**! Today's project focuses on understanding and practicing fundamental **DOM (Document Object Model) Manipulation** in JavaScript with clean, beginner-friendly examples.

🔗 **Repository:** [harish-0987/DAY-25-OF-FRONTEND](https://github.com/harish-0987/DAY-25-OF-FRONTEND)

---

## 📌 What is the DOM?

The **DOM (Document Object Model)** is a programming interface provided by web browsers. When an HTML document loads, the browser converts the HTML tags into a **tree of objects** (nodes) that JavaScript can access and manipulate.

With JavaScript and the DOM, you can:
- **Select** any HTML element on the page.
- **Change** element content (`textContent`, `innerHTML`).
- **Modify** element styles and CSS classes (`style`, `classList`).
- **Create & Remove** HTML elements dynamically (`createElement`, `appendChild`, `remove`).
- **Listen** to user interactions via events (`addEventListener`).

---

## 💻 Core Basic Level DOM Concepts & Code Snippets

### 1. Selecting Elements

JavaScript provides several ways to grab elements from the page:

```javascript
// 1. By ID (most direct and common)
const heading = document.getElementById("main-heading");

// 2. By CSS Selector (selects the FIRST matching element)
const button = document.querySelector(".action-btn");

// 3. By CSS Selector (selects ALL matching elements as a NodeList)
const allCards = document.querySelectorAll(".card");
```

---

### 2. Changing Content: `textContent` vs `innerHTML`

- **`textContent`**: Sets or retrieves the plain text content inside an element (safe from XSS).
- **`innerHTML`**: Parses and renders HTML tags inside an element.

```javascript
const box = document.getElementById("message-box");

// Plain text change
box.textContent = "Welcome to Day 25 of Frontend!";

// Rich HTML change
box.innerHTML = "Welcome to <strong>Day 25</strong> with <em>styled HTML</em>!";
```

---

### 3. Modifying Styles and Classes

#### Changing Inline Styles:
```javascript
const box = document.getElementById("demo-box");

box.style.backgroundColor = "#4f46e5";
box.style.color = "#ffffff";
box.style.padding = "16px";
```

#### Using `classList` (Recommended Best Practice):
Instead of hardcoding inline styles, toggle or add CSS classes:
```javascript
const card = document.getElementById("my-card");

// Add a class
card.classList.add("active");

// Remove a class
card.classList.remove("hidden");

// Toggle a class (adds if missing, removes if present)
card.classList.toggle("highlight");

// Check if class exists
const hasClass = card.classList.contains("active"); // true / false
```

---

### 4. Creating and Appending Elements Dynamically

You can generate brand new elements and insert them anywhere in the DOM tree:

```javascript
// 1. Create a new element
const newChip = document.createElement("span");

// 2. Add content and classes
newChip.className = "step-chip";
newChip.textContent = "New Dynamic Element 🎉";

// 3. Append to a parent container
const container = document.getElementById("chip-container");
container.appendChild(newChip);

// 4. Remove an element
newChip.remove();
```

---

### 5. Handling Events with `addEventListener`

Events allow your web page to react to user interactions like mouse clicks, keyboard input, and form submissions:

```javascript
const button = document.getElementById("btn-click");
const counterText = document.getElementById("counter-text");
let count = 0;

// Click event listener
button.addEventListener("click", () => {
    count++;
    counterText.textContent = `Total Clicks: ${count}`;
});

// Real-time input event listener
const textInput = document.getElementById("user-input");
textInput.addEventListener("input", (event) => {
    console.log("Current Value:", event.target.value);
});
```

---

## 📊 Summary Quick Reference Table

| DOM Method / Property | What It Does | Example |
| :--- | :--- | :--- |
| `document.getElementById("id")` | Grabs element by its ID | `const el = document.getElementById("title");` |
| `document.querySelector(".class")` | Grabs first element matching CSS selector | `const btn = document.querySelector(".btn");` |
| `element.textContent` | Sets or gets plain text | `el.textContent = "Hello";` |
| `element.innerHTML` | Sets or gets HTML content | `el.innerHTML = "<b>Bold</b>";` |
| `element.style.property` | Changes inline CSS style | `el.style.color = "red";` |
| `element.classList.toggle("cls")` | Toggles a CSS class | `el.classList.toggle("dark");` |
| `document.createElement("tag")` | Creates a new HTML element | `const li = document.createElement("li");` |
| `parent.appendChild(child)` | Appends child element to parent | `list.appendChild(li);` |
| `element.remove()` | Removes element from DOM | `li.remove();` |
| `element.addEventListener(type, fn)` | Attaches an event handler | `btn.addEventListener("click", run);` |

---

## 🚀 Interactive Features Included in This Project

- **Content Switcher:** Live toggle between `textContent` and `innerHTML` formatting.
- **Style & Class Controller:** Live manipulation of background colors, text colors, and `classList.toggle()`.
- **Dynamic Element Generator:** Add, remove, and clear elements in real-time with `createElement` and `appendChild`.
- **Attribute Inspector:** Dynamically inspect and switch element attributes (`placeholder`, `type`, `title`).
- **Live Event Playground:** Real-time click counter and live typing mirror using `addEventListener`.

---

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/harish-0987/DAY-25-OF-FRONTEND.git
   ```
2. Open the project folder:
   ```bash
   cd DAY-25-OF-FRONTEND
   ```
3. Open `index.html` in any web browser.

---

## 👤 Author
- **Harish** - [@harish-0987](https://github.com/harish-0987)
- 100 Days Frontend Challenge
