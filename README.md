# ⚡ Day 23 of Frontend: Basic Level Functions in JavaScript

Welcome to **Day 23 of the 100 Days Frontend Challenge**! Today's project focuses on understanding and mastering fundamental **Functions in JavaScript** to write clean, reusable, and modular code.

🔗 **Repository:** [harish-0987/DAY-23-OF-FRONTEND](https://github.com/harish-0987/DAY-23-OF-FRONTEND)

---

## 📌 What is a Function?

A **function** in JavaScript is a reusable block of code designed to perform a specific task. Instead of writing the same lines of code multiple times, you package them into a function and call (invoke) it whenever needed.

### Key Benefits:
- **DRY Principle (Don't Repeat Yourself)**: Write code once and reuse it across your application.
- **Maintainability**: Fix bugs or update logic in one single location.
- **Modularity**: Break down complex problems into smaller, manageable functions.
- **Abstraction**: Use a function knowing what it does without worrying about its internal complexity.

---

## 💻 Core Concepts & Basic Level Code Snippets

### 1. Function Declaration (Named Function)
A standard way to declare a function using the `function` keyword. Declarations are **hoisted**, meaning they can be invoked before their definition in the code.

```javascript
// Syntax: function functionName(parameter1, parameter2) { ... }
function greetUser(name) {
    return `Hello, ${name}! Welcome to Day 23.`;
}

// Calling (invoking) the function
console.log(greetUser("Harish")); 
// Output: Hello, Harish! Welcome to Day 23.
```

---

### 2. Function Expression
A function assigned to a variable. Unlike declarations, function expressions are **not hoisted** and cannot be called before they are declared.

```javascript
// Anonymous function stored in a constant variable
const calculateArea = function(width, height) {
    return width * height;
};

// Calling the function expression
const area = calculateArea(6, 4);
console.log("Area:", area); 
// Output: Area: 24
```

---

### 3. Arrow Function (ES6)
A modern and concise syntax introduced in ES6 using the `=>` (fat arrow) notation. If the function contains only a single expression, curly braces `{}` and the `return` keyword can be omitted (implicit return).

```javascript
// Arrow function with concise implicit return
const calculateDiscount = (price, discountPercent) => price - (price * discountPercent / 100);

// Single parameter arrow function (parentheses optional)
const doubleNumber = n => n * 2;

console.log(calculateDiscount(100, 20)); // Output: 80
console.log(doubleNumber(7));            // Output: 14
```

---

### 4. Parameters vs. Arguments & Default Parameters
- **Parameters**: The variable names listed in the function definition.
- **Arguments**: The real values passed into the function when invoking it.
- **Default Parameters**: Fallback values used when arguments are omitted or `undefined`.

```javascript
// Default parameters: role defaults to "Explorer", status defaults to "Active"
function createProfile(username, role = "Explorer", status = "Active") {
    return `User: ${username} | Role: ${role} | Status: ${status}`;
}

console.log(createProfile("Harish", "Frontend Developer", "Coding")); 
// Output: User: Harish | Role: Frontend Developer | Status: Coding

console.log(createProfile("Guest")); 
// Output: User: Guest | Role: Explorer | Status: Active
```

---

### 5. Return Values vs. `console.log`
- `console.log()` outputs information to the developer console for debugging.
- `return` sends a computed value **back** to the caller so it can be stored in a variable, passed to another function, or displayed on the webpage.
- If a function doesn't specify a `return` statement, it returns `undefined` by default.

```javascript
// Function that returns a value (usable in variables)
function add(a, b) {
    return a + b;
}

// Function that only logs (returns undefined)
function logSum(a, b) {
    console.log(a + b);
}

const sumResult = add(10, 5);      // sumResult is 15 (usable!)
const logResult = logSum(10, 5);   // Prints 15, but logResult is undefined
```

---

## 📊 Summary Comparison

| Concept | Syntax Example | Hoisted? | Best Used For |
| :--- | :--- | :--- | :--- |
| **Function Declaration** | `function calculate() {}` | ✅ Yes | General-purpose top-level reusable logic |
| **Function Expression** | `const calculate = function() {}` | ❌ No | Dynamic assignments or scoped functions |
| **Arrow Function** | `const calculate = (a, b) => a * b` | ❌ No | Short callbacks, array methods, modern ES6 code |
| **Default Parameters** | `function greet(name = "Guest") {}` | N/A | Gracefully handling missing function arguments |
| **Return Statement** | `return value;` | N/A | Producing data to store or pass into other functions |

---

## 🚀 Interactive Features Included in This Project

- **Greeting Maker:** Interactive demonstration of a **Function Declaration** taking a custom user input name.
- **Rectangle Area Calculator:** Interactive **Function Expression** computing area with dynamic width and height inputs.
- **Price Discount Calculator:** Interactive **Arrow Function** computing real-time savings and final price.
- **Profile Generator (Default Params):** Toggle between customized inputs and default fallback parameters.
- **Return vs. Console Inspector:** Live visualizer showing what a returning function yields vs. a void/log-only function.

---

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/harish-0987/DAY-23-OF-FRONTEND.git
   ```
2. Open the project folder:
   ```bash
   cd DAY-23-OF-FRONTEND
   ```
3. Open `index.html` in any modern web browser.

---

## 👤 Author
- **Harish** - [@harish-0987](https://github.com/harish-0987)
- 100 Days Frontend Challenge
