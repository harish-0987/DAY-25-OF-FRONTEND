// ======================================================
// Day 23: Basic Level Functions in JavaScript
// 100 Days Frontend Challenge by Harish (@harish-0987)
// ======================================================

// ------------------------------------------------------
// 1. Function Declaration (Named Function)
// ------------------------------------------------------
// Characteristics:
// - Declared with the 'function' keyword.
// - Hoisted to the top of their scope (can be called before declaration).
function greetUser(name) {
    if (!name || name.trim() === "") {
        return "Hello, Friend! 👋 Welcome to Day 23.";
    }
    return `Hello, ${name.trim()}! 👋 Welcome to Day 23.`;
}

// ------------------------------------------------------
// 2. Function Expression (Anonymous Function in a Variable)
// ------------------------------------------------------
// Characteristics:
// - A function stored inside a variable.
// - NOT hoisted: Must be defined before calling.
const calculateArea = function(width, height) {
    const parsedWidth = parseFloat(width);
    const parsedHeight = parseFloat(height);

    if (isNaN(parsedWidth) || isNaN(parsedHeight) || parsedWidth <= 0 || parsedHeight <= 0) {
        return null;
    }
    return parsedWidth * parsedHeight;
};

// ------------------------------------------------------
// 3. Arrow Function (Modern ES6 Syntax)
// ------------------------------------------------------
// Characteristics:
// - Uses the '=>' syntax.
// - Compact and concise.
// - Implicit return when braces '{}' are omitted.
const calculateDiscount = (price, discountPercent) => {
    const p = parseFloat(price);
    const d = parseFloat(discountPercent);

    if (isNaN(p) || isNaN(d) || p < 0 || d < 0 || d > 100) {
        return null;
    }

    const discountAmount = (p * d) / 100;
    const finalPrice = p - discountAmount;

    return {
        originalPrice: p.toFixed(2),
        discountPercent: d,
        discountAmount: discountAmount.toFixed(2),
        finalPrice: finalPrice.toFixed(2)
    };
};

// ------------------------------------------------------
// 4. Default Parameters & Arguments
// ------------------------------------------------------
// Characteristics:
// - Provide fallback values if arguments are omitted or undefined.
function createProfile(username = "Guest User", role = "Explorer", status = "Active") {
    return {
        username: username.trim() || "Guest User",
        role: role.trim() || "Explorer",
        status: status.trim() || "Active"
    };
}

// ------------------------------------------------------
// 5. Return Value vs. console.log (Void)
// ------------------------------------------------------
// Function WITH return: yields data back to caller.
function addWithReturn(a, b) {
    return a + b;
}

// Function WITHOUT return: logs to console, but returns undefined.
function addWithoutReturn(a, b) {
    const sum = a + b;
    console.log(`[Inside addWithoutReturn] The sum is ${sum}`);
    // No return statement -> implicitly returns undefined
}

// ======================================================
// DOM UI Handlers for Interactive Playground
// ======================================================

// Helper: Render structured output in result box
function setResult(containerId, content, isSuccess = true) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.className = isSuccess ? "result-box success chips-wrap" : "result-box error";
    container.innerHTML = "";

    if (typeof content === "string") {
        container.textContent = content;
        return;
    }

    if (Array.isArray(content)) {
        content.forEach((text, index) => {
            const chip = document.createElement("span");
            chip.className = "step-chip";
            chip.textContent = text;
            chip.style.animationDelay = `${index * 40}ms`;
            container.appendChild(chip);
        });
    }
}

// Handler 1: Function Declaration (Greeting)
function handleGreeting() {
    const nameInput = document.getElementById("name-input");
    const nameVal = nameInput ? nameInput.value : "";
    const message = greetUser(nameVal);

    setResult("declaration-result", [
        `Output: "${message}"`,
        `Type: Function Declaration`,
        `Hoisted: Yes ✅`
    ], true);
}

// Handler 2: Function Expression (Rectangle Area)
function handleAreaCalc() {
    const widthInput = document.getElementById("rect-width");
    const heightInput = document.getElementById("rect-height");

    const w = widthInput ? widthInput.value : 0;
    const h = heightInput ? heightInput.value : 0;

    const area = calculateArea(w, h);

    if (area === null) {
        setResult("expression-result", "Please enter positive numbers for width and height.", false);
        return;
    }

    setResult("expression-result", [
        `Width: ${w}`,
        `Height: ${h}`,
        `Area: ${area} sq units`,
        `Type: Function Expression 📦`
    ], true);
}

// Handler 3: Arrow Function (Discount Calculation)
function handleDiscountCalc() {
    const priceInput = document.getElementById("item-price");
    const discountInput = document.getElementById("item-discount");

    const price = priceInput ? priceInput.value : 100;
    const discount = discountInput ? discountInput.value : 15;

    const result = calculateDiscount(price, discount);

    if (!result) {
        setResult("arrow-result", "Please enter a valid price and discount (0% - 100%).", false);
        return;
    }

    setResult("arrow-result", [
        `Original: $${result.originalPrice}`,
        `Discount: ${result.discountPercent}% (-$${result.discountAmount})`,
        `Final Price: $${result.finalPrice} 🏷️`,
        `Syntax: Arrow =>`
    ], true);
}

// Handler 4: Default Parameters
function handleDefaultParams(useCustom = false) {
    let profile;

    if (useCustom) {
        const username = document.getElementById("custom-username").value || "Harish";
        const role = document.getElementById("custom-role").value || "Frontend Developer";
        const status = document.getElementById("custom-status").value || "Online";
        profile = createProfile(username, role, status);
    } else {
        // Calling with no arguments -> relies entirely on defaults!
        profile = createProfile();
    }

    setResult("defaults-result", [
        `User: ${profile.username}`,
        `Role: ${profile.role}`,
        `Status: ${profile.status}`,
        useCustom ? "Used Custom Arguments 👤" : "Used Default Parameters ⚙️"
    ], true);
}

// Handler 5: Return vs Console.log
function handleReturnDemo(withReturn = true) {
    const container = document.getElementById("return-result");
    if (!container) return;

    if (withReturn) {
        const value = addWithReturn(15, 25);
        setResult("return-result", [
            `Function: addWithReturn(15, 25)`,
            `Returned Value: ${value}`,
            `Can store in variable? Yes ✅`,
            `Result type: ${typeof value}`
        ], true);
    } else {
        const value = addWithoutReturn(15, 25);
        setResult("return-result", [
            `Function: addWithoutReturn(15, 25)`,
            `Returned Value: ${value} (undefined)`,
            `Check DevTools Console for log 🔍`,
            `Result type: ${typeof value}`
        ], true);

        const note = document.createElement("div");
        note.className = "note-text";
        note.textContent = "💡 Without a return statement, JavaScript returns undefined by default.";
        container.appendChild(note);
    }
}

// ------------------------------------------------------
// Initial triggers on page load
// ------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
    handleGreeting();
    handleAreaCalc();
    handleDiscountCalc();
    handleDefaultParams(false);
    handleReturnDemo(true);
});
