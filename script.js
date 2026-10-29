// ======================================================
// Day 22: Basic Level Loops in JavaScript
// ======================================================

// 1. Classic for Loop (Counting from 1 to N)
// Syntax: for (initialization; condition; increment/decrement)
function runForLoop(count) {
    const results = [];
    for (let i = 1; i <= count; i++) {
        results.push(`i = ${i}`);
    }
    return results;
}

// 2. while Loop (Countdown timer)
// Syntax: while (condition) { ... }
function runWhileLoop(startNumber) {
    const steps = [];
    let count = startNumber;
    while (count > 0) {
        steps.push(`Count: ${count}`);
        count--;
    }
    steps.push("🚀 Blast Off!");
    return steps;
}

// 3. do...while Loop (Guaranteed to execute at least once)
// Syntax: do { ... } while (condition);
function runDoWhileLoop(startVal, limit) {
    const steps = [];
    let val = startVal;
    let iterations = 0;

    do {
        iterations++;
        steps.push(`Step ${iterations}: val = ${val}`);
        val++;
    } while (val <= limit);

    return steps;
}

// 4. for...of Loop (Iterating over elements of an Array)
// Syntax: for (const item of array) { ... }
function runForOfLoop(items, mode = "all") {
    const output = [];

    for (const item of items) {
        if (mode === "skip-banana" && item.includes("Banana")) {
            output.push(`${item} (Skipped via continue ⏭️)`);
            continue; // Skip this iteration
        }

        if (mode === "stop-orange" && item.includes("Orange")) {
            output.push(`${item} (Stopped via break 🛑)`);
            break; // Terminate loop early
        }

        output.push(item);
    }

    return output;
}

// ======================================================
// DOM UI Handlers for Interactive Playground
// ======================================================

// Helper: Render items as modern chips
function renderChips(containerId, items, isSuccess = true) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    container.className = isSuccess ? "result-box success chips-wrap" : "result-box error";

    if (!Array.isArray(items) || items.length === 0) {
        container.textContent = "No items to display.";
        return;
    }

    items.forEach((text, index) => {
        const chip = document.createElement("span");
        chip.className = "step-chip";
        chip.textContent = text;
        chip.style.animationDelay = `${index * 50}ms`;
        container.appendChild(chip);
    });
}

// Handler 1: for Loop
function handleForLoop() {
    const input = document.getElementById("for-input");
    const count = parseInt(input.value, 10);

    if (isNaN(count) || count < 1 || count > 12) {
        const resultBox = document.getElementById("for-result");
        resultBox.className = "result-box error";
        resultBox.textContent = "Please enter a number between 1 and 12!";
        return;
    }

    const steps = runForLoop(count);
    renderChips("for-result", steps);
}

// Handler 2: while Loop
function handleWhileLoop() {
    const input = document.getElementById("while-input");
    const startNum = parseInt(input.value, 10);

    if (isNaN(startNum) || startNum < 1 || startNum > 10) {
        const resultBox = document.getElementById("while-result");
        resultBox.className = "result-box error";
        resultBox.textContent = "Please enter a countdown between 1 and 10!";
        return;
    }

    const steps = runWhileLoop(startNum);
    renderChips("while-result", steps);
}

// Handler 3: do...while Loop
function handleDoWhileLoop(isFalseInitial) {
    let steps;
    const resultBox = document.getElementById("dowhile-result");

    if (isFalseInitial) {
        // Start val is 10, limit is 5.
        // Condition (10 <= 5) is FALSE from the start, but loop runs once!
        steps = runDoWhileLoop(10, 5);
        renderChips("dowhile-result", steps);
        
        const note = document.createElement("div");
        note.className = "note-text";
        note.textContent = "💡 Condition (10 <= 5) was false, but body executed once!";
        resultBox.appendChild(note);
    } else {
        // Normal case: Start 1, limit 4 -> runs 4 times
        steps = runDoWhileLoop(1, 4);
        renderChips("dowhile-result", steps);
    }
}

// Handler 4: for...of Loop
const defaultFruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍇 Grape", "🥭 Mango"];

function handleForOf(mode = "all") {
    const steps = runForOfLoop(defaultFruits, mode);
    renderChips("forof-result", steps);
}

// Initial triggers on load
window.addEventListener("DOMContentLoaded", () => {
    handleForLoop();
    handleWhileLoop();
    handleDoWhileLoop(false);
    handleForOf("all");
});
