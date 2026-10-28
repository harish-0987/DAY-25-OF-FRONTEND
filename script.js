// ======================================================
// Day 21: Basic Level Conditional Statements in JavaScript
// ======================================================

// 1. if...else Statement (Basic Decision)
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote! 🗳️";
    } else {
        return "Not eligible yet (18+ required). ⏳";
    }
}

// 2. if...else if...else Statement (Multi-way Decision)
function calculateGrade(score) {
    if (score >= 90) {
        return "Grade A+ (Outstanding) 🌟";
    } else if (score >= 75) {
        return "Grade A (Very Good) 👍";
    } else if (score >= 50) {
        return "Grade B (Good) 👌";
    } else {
        return "Grade F (Needs Improvement) ❌";
    }
}

// 3. switch Statement (Fixed Options Matching)
function getTrafficAction(signalColor) {
    switch (signalColor) {
        case "Red":
            return "STOP! Wait behind the line. 🛑";
        case "Yellow":
            return "GET READY! Slow down safely. ⚠️";
        case "Green":
            return "GO! Road is clear to proceed. 🟢";
        default:
            return "Invalid signal color! ❓";
    }
}

// 4. Ternary Operator: (condition ? ifTrue : ifFalse)
let isLoggedIn = false;

function getAuthMessage() {
    return isLoggedIn 
        ? "Welcome back, User! 👤 (Authorized)" 
        : "Please log in to continue. 🔒 (Guest)";
}

// ======================================================
// DOM UI Handlers for Interactive Playground
// ======================================================

function handleAgeCheck() {
    const ageInput = document.getElementById("age-input");
    const resultBox = document.getElementById("age-result");
    const age = parseInt(ageInput.value, 10);

    if (isNaN(age) || age < 0) {
        resultBox.textContent = "Please enter a valid age!";
        resultBox.className = "result-box error";
        return;
    }

    resultBox.textContent = checkVotingEligibility(age);
    resultBox.className = age >= 18 ? "result-box success" : "result-box warning";
}

function handleGradeCheck() {
    const scoreInput = document.getElementById("score-input");
    const resultBox = document.getElementById("grade-result");
    const score = parseInt(scoreInput.value, 10);

    if (isNaN(score) || score < 0 || score > 100) {
        resultBox.textContent = "Please enter a score between 0 and 100!";
        resultBox.className = "result-box error";
        return;
    }

    const message = calculateGrade(score);
    resultBox.textContent = message;
    resultBox.className = score >= 50 ? "result-box success" : "result-box error";
}

function handleTrafficSignal(color) {
    const resultBox = document.getElementById("traffic-result");
    const message = getTrafficAction(color);
    resultBox.textContent = `[${color}] ${message}`;

    if (color === "Red") resultBox.className = "result-box error";
    else if (color === "Yellow") resultBox.className = "result-box warning";
    else if (color === "Green") resultBox.className = "result-box success";
}

function handleAuthToggle() {
    isLoggedIn = !isLoggedIn;

    const indicator = document.getElementById("auth-status-indicator");
    const resultBox = document.getElementById("ternary-result");

    indicator.textContent = `Status: ${isLoggedIn ? "Logged In" : "Logged Out"}`;
    resultBox.textContent = getAuthMessage();
    resultBox.className = isLoggedIn ? "result-box success" : "result-box warning";
}

// Initial trigger on load
window.addEventListener("DOMContentLoaded", () => {
    handleAgeCheck();
    handleGradeCheck();
});
