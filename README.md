# ⚡ Day 22 of Frontend: Basic Level Loops in JavaScript

Welcome to **Day 22 of the 100 Days Frontend Challenge**! Today's project focuses on understanding and using fundamental **Loops in JavaScript** to automate repetitive tasks with clean and basic code.

🔗 **Repository:** [harish-0987/DAY-22-OF-FRONTEND](https://github.com/harish-0987/DAY-22-OF-FRONTEND)

---

## 📌 What is a Loop?

A **loop** in programming is used to repeat a specific block of code multiple times until a defined condition is met. Loops help eliminate redundant code and make programs efficient.

JavaScript supports several basic loop constructs:
1. **`for` loop** – Used when you know in advance how many times you want the code to run.
2. **`while` loop** – Runs repeatedly as long as a specified condition remains `true`.
3. **`do...while` loop** – Similar to a `while` loop, but guarantees the code block runs **at least once** before checking the condition.
4. **`for...of` loop** – A clean and modern syntax to iterate through items in an array or iterable.
5. **Loop Control Statements (`break` and `continue`)** – Used to exit early or skip specific iterations.

---

## 💻 Essential Code Snippets (Basic Level)

### 1. `for` Loop
Best for counting or iterating a fixed number of times.

```javascript
// Syntax: for (initialization; condition; increment/decrement)
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}
// Output: 1, 2, 3, 4, 5
```

---

### 2. `while` Loop
Best when the number of iterations depends on an external or changing condition.

```javascript
let count = 5;

while (count > 0) {
    console.log("Countdown:", count);
    count--; // Decrement to prevent infinite loop
}
console.log("🚀 Blast Off!");
```

---

### 3. `do...while` Loop
Always executes the code block **once** even if the condition is false right from the start.

```javascript
let number = 10;

do {
    console.log("Number is:", number); // Runs once!
    number++;
} while (number <= 5);
```

---

### 4. `for...of` Loop (Arrays)
The simplest way to loop through arrays and list items.

```javascript
const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

---

### 5. Loop Control: `break` and `continue`

- **`break`**: Immediately stops and exits the loop.
- **`continue`**: Skips the current iteration and jumps to the next one.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue; // Skips number 2
    }
    if (i === 4) {
        break; // Stops the loop at 4
    }
    console.log(i); // Output: 1, 3
}
```

---

## 📊 Summary Comparison

| Loop Type | When to Use | Execution Guarantee |
| :--- | :--- | :--- |
| **`for`** | Known number of iterations (counter-based) | 0 or more times |
| **`while`** | Unknown iterations, condition evaluated first | 0 or more times |
| **`do...while`** | Must run at least once (e.g. user prompt/roll) | **At least 1 time** |
| **`for...of`** | Traversing arrays and lists easily | 0 or more times |

---

## 🚀 Interactive Features Included in This Project

- **Classic Counter:** Interactive step-by-step counter demonstrating `for` loop.
- **Countdown Timer:** Input-driven countdown sequence demonstrating `while` loop.
- **At-Least-Once Demo:** Comparison testing standard condition vs. initially false condition in `do...while`.
- **Array Traversal Studio:** Real-time array iteration demonstrating `for...of` with `break` and `continue` buttons.

---

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/harish-0987/DAY-22-OF-FRONTEND.git
   ```
2. Open the project folder:
   ```bash
   cd DAY-22-OF-FRONTEND
   ```
3. Open `index.html` in any web browser.

---

## 👤 Author
- **Harish** - [@harish-0987](https://github.com/harish-0987)
- 100 Days Frontend Challenge
