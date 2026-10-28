# ⚡ Day 21 of Frontend: Basic Level Conditional Statements

Welcome to **Day 21 of the 100 Days Frontend Challenge**! Today covers decision-making in JavaScript using fundamental **conditional statements**.

🔗 **Repository:** [harish-0987/DAY-21-OF-FRONTEND](https://github.com/harish-0987/DAY-21-OF-FRONTEND)

---

## 📌 What are Conditional Statements?

Conditional statements perform different actions based on different logical conditions (evaluating whether an expression is `true` or `false`).

JavaScript supports the following basic forms:
1. **`if` statement** – executes a block if a condition is true.
2. **`if...else` statement** – executes one block if true, another if false.
3. **`if...else if...else` ladder** – tests multiple conditions in sequence.
4. **`switch` statement** – selects one of many code blocks based on matching a specific value.
5. **Ternary Operator (`? :`)** – compact shorthand for basic `if...else`.

---

## 💻 Essential Code Snippets

### 1. Simple `if` Statement
Executes only when the given condition evaluates to `true`:
```javascript
let score = 75;

if (score >= 50) {
    console.log("Passed! 🎉");
}
```

### 2. `if...else` Statement
Provides an alternative branch when the condition is `false`:
```javascript
let age = 16;

if (age >= 18) {
    console.log("Eligible to vote! 🗳️");
} else {
    console.log("Not eligible yet (must be 18+). ⏳");
}
```

### 3. `if...else if...else` Ladder
Checks multiple conditions in sequential order until one matches:
```javascript
let marks = 82;

if (marks >= 90) {
    console.log("Grade A+ 🌟");
} else if (marks >= 75) {
    console.log("Grade A 👍");
} else if (marks >= 50) {
    console.log("Grade B 👌");
} else {
    console.log("Grade F (Fail) ❌");
}
```

### 4. `switch` Statement
Ideal when testing a single expression against multiple fixed values:
```javascript
let signal = "Red";

switch (signal) {
    case "Red":
        console.log("STOP! 🛑");
        break;
    case "Yellow":
        console.log("GET READY! ⚠️");
        break;
    case "Green":
        console.log("GO! 🟢");
        break;
    default:
        console.log("Invalid signal ❓");
}
```

### 5. Ternary Operator (`condition ? exprIfTrue : exprIfFalse`)
One-line shorthand for simple conditional assignments:
```javascript
let isLoggedIn = true;
let greeting = isLoggedIn ? "Welcome back! 👤" : "Please log in 🔒";
console.log(greeting);
```

---

## 🚀 Interactive Features Included in This Project

- **Voting Age Checker:** Interactive input demonstrating `if...else`.
- **Grade Calculator:** Score input (0-100) demonstrating `if...else if...else`.
- **Traffic Light Controller:** Buttons demonstrating `switch` case handling.
- **Login Status Toggle:** One-click toggle demonstrating the **ternary operator**.

---

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/harish-0987/DAY-21-OF-FRONTEND.git
   ```
2. Open the folder:
   ```bash
   cd DAY-21-OF-FRONTEND
   ```
3. Open `index.html` in your web browser.

---

## 👤 Author
- **Harish** - [@harish-0987](https://github.com/harish-0987)
- 100 Days Frontend Challenge
