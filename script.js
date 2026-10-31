// ======================================================
// Day 24: Basic Level Array and String Methods in JavaScript
// 100 Days Frontend Challenge by Harish (@harish-0987)
// ======================================================

// ------------------------------------------------------
// 1. BASIC STRING METHODS
// ------------------------------------------------------

// toUpperCase & toLowerCase: Case manipulation
function changeCase(text, mode = "upper") {
    if (mode === "upper") {
        return text.toUpperCase();
    }
    return text.toLowerCase();
}

// trim: Remove leading and trailing whitespace
function cleanWhitespace(text) {
    return text.trim();
}

// includes: Check if a substring exists (returns boolean)
function checkStringContains(text, searchTerm) {
    return text.includes(searchTerm);
}

// slice: Extract a portion of text
function extractSubstring(text, start, end) {
    const s = parseInt(start, 10) || 0;
    const e = end !== "" ? parseInt(end, 10) : undefined;
    return text.slice(s, e);
}

// replace: Replace first occurrence of target with replacement
function replaceText(text, target, replacement) {
    return text.replace(target, replacement);
}

// ------------------------------------------------------
// 2. BASIC ARRAY METHODS
// ------------------------------------------------------

// Active array state for live demonstration
let activeArray = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];

// push: Add item to the end
function addItemToEnd(arr, item) {
    arr.push(item);
    return arr;
}

// pop: Remove item from the end
function removeItemFromEnd(arr) {
    return arr.pop(); // returns removed element
}

// unshift: Add item to the beginning
function addItemToBeginning(arr, item) {
    arr.unshift(item);
    return arr;
}

// shift: Remove item from the beginning
function removeItemFromBeginning(arr) {
    return arr.shift(); // returns removed element
}

// reverse: Reverse items in-place
function reverseArray(arr) {
    return arr.reverse();
}

// slice: Extract a subarray without mutating original
function sliceArray(arr, start, end) {
    return arr.slice(start, end);
}

// includes & indexOf: Search in array
function searchInArray(arr, searchTerm) {
    const isPresent = arr.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    return isPresent;
}

// ------------------------------------------------------
// 3. THE BRIDGE: split() and join()
// ------------------------------------------------------

// split: Convert string to array
function stringToArray(str, separator = ",") {
    return str.split(separator);
}

// join: Convert array to string
function arrayToString(arr, separator = " - ") {
    return arr.join(separator);
}

// Reverse a string using split -> reverse -> join
function reverseString(str) {
    return str.split("").reverse().join("");
}

// ======================================================
// DOM UI Handlers for Interactive Playground
// ======================================================

// Helper: Render items or status chips
function renderChips(containerId, items, isSuccess = true) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.className = isSuccess ? "result-box success chips-wrap" : "result-box error";
    container.innerHTML = "";

    if (typeof items === "string") {
        container.textContent = items;
        return;
    }

    if (Array.isArray(items)) {
        if (items.length === 0) {
            container.textContent = "[Empty Array]";
            return;
        }

        items.forEach((text, index) => {
            const chip = document.createElement("span");
            chip.className = "step-chip";
            chip.textContent = text;
            chip.style.animationDelay = `${index * 40}ms`;
            container.appendChild(chip);
        });
    }
}

// --- Handler 1: String Case & Trim ---
function handleStringTransform(action) {
    const input = document.getElementById("str-transform-input");
    const rawVal = input ? input.value : "";

    let resultText = "";
    let methodUsed = "";

    if (action === "upper") {
        resultText = changeCase(rawVal, "upper");
        methodUsed = ".toUpperCase()";
    } else if (action === "lower") {
        resultText = changeCase(rawVal, "lower");
        methodUsed = ".toLowerCase()";
    } else if (action === "trim") {
        resultText = cleanWhitespace(rawVal);
        methodUsed = ".trim()";
    }

    renderChips("str-transform-result", [
        `Result: "${resultText}"`,
        `Method: ${methodUsed}`,
        `Length: ${resultText.length} chars`
    ], true);
}

// --- Handler 2: String Search & Slice & Replace ---
function handleStringSearch() {
    const textInput = document.getElementById("str-search-text");
    const queryInput = document.getElementById("str-search-query");

    const text = textInput ? textInput.value : "";
    const query = queryInput ? queryInput.value : "";

    const hasMatch = checkStringContains(text, query);
    const index = text.indexOf(query);

    renderChips("str-search-result", [
        `includes("${query}"): ${hasMatch ? "true ✅" : "false ❌"}`,
        `indexOf("${query}"): ${index}`,
        `Original: "${text}"`
    ], true);
}

function handleStringReplace() {
    const textInput = document.getElementById("str-search-text");
    const findInput = document.getElementById("str-find");
    const replaceWithInput = document.getElementById("str-replace-with");

    const text = textInput ? textInput.value : "";
    const findVal = findInput ? findInput.value : "";
    const repVal = replaceWithInput ? replaceWithInput.value : "";

    const newStr = replaceText(text, findVal, repVal);

    renderChips("str-search-result", [
        `Replaced: "${newStr}"`,
        `Method: .replace("${findVal}", "${repVal}")`
    ], true);
}

// --- Handler 3: Array Mutation (Push, Pop, Shift, Unshift) ---
function renderActiveArray(actionMsg = "") {
    const chips = activeArray.map((item, idx) => `[${idx}] ${item}`);
    if (actionMsg) {
        chips.unshift(`⚡ ${actionMsg}`);
    }
    renderChips("array-mutate-result", chips, true);
}

function handleArrayPush() {
    const input = document.getElementById("array-item-input");
    const val = input && input.value.trim() ? input.value.trim() : "🍇 Grape";
    addItemToEnd(activeArray, val);
    renderActiveArray(`.push("${val}") added to end`);
}

function handleArrayPop() {
    if (activeArray.length === 0) {
        renderChips("array-mutate-result", "Array is already empty!", false);
        return;
    }
    const removed = removeItemFromEnd(activeArray);
    renderActiveArray(`.pop() removed "${removed}" from end`);
}

function handleArrayUnshift() {
    const input = document.getElementById("array-item-input");
    const val = input && input.value.trim() ? input.value.trim() : "🍓 Strawberry";
    addItemToBeginning(activeArray, val);
    renderActiveArray(`.unshift("${val}") added to start`);
}

function handleArrayShift() {
    if (activeArray.length === 0) {
        renderChips("array-mutate-result", "Array is already empty!", false);
        return;
    }
    const removed = removeItemFromBeginning(activeArray);
    renderActiveArray(`.shift() removed "${removed}" from start`);
}

function handleArrayReset() {
    activeArray = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
    renderActiveArray("Array reset to default");
}

// --- Handler 4: Array Search, Reverse & Slice ---
function handleArrayReverse() {
    reverseArray(activeArray);
    renderActiveArray(".reverse() reversed items in-place");
}

function handleArraySlice() {
    const sliced = sliceArray(activeArray, 0, 2);
    const chips = sliced.map((item, idx) => `[${idx}] ${item}`);
    chips.unshift(".slice(0, 2) (shallow copy, original unchanged):");
    renderChips("array-util-result", chips, true);
}

function handleArrayCheck() {
    const queryInput = document.getElementById("array-search-input");
    const query = queryInput ? queryInput.value.trim() : "Apple";

    const isPresent = searchInArray(activeArray, query);

    renderChips("array-util-result", [
        `Search: "${query}"`,
        `Found in array: ${isPresent ? "true ✅" : "false ❌"}`,
        `Array size: ${activeArray.length}`
    ], true);
}

// --- Handler 5: Bridge (split & join & reverse string) ---
function handleBridgeSplit() {
    const input = document.getElementById("bridge-input");
    const text = input ? input.value : "HTML,CSS,JavaScript,React";
    const arr = stringToArray(text, ",");

    const chips = arr.map((item, i) => `[${i}] ${item.trim()}`);
    chips.unshift('.split(",") created Array:');
    renderChips("bridge-result", chips, true);
}

function handleBridgeJoin() {
    const joined = arrayToString(activeArray, " ➔ ");
    renderChips("bridge-result", [
        `Active Array joined with " ➔ ":`,
        `"${joined}"`
    ], true);
}

function handleBridgeReverseWord() {
    const input = document.getElementById("bridge-input");
    const text = input ? input.value : "Frontend";
    const reversed = reverseString(text);

    renderChips("bridge-result", [
        `Original: "${text}"`,
        `Reversed: "${reversed}"`,
        `Pattern: .split("").reverse().join("")`
    ], true);
}

// ------------------------------------------------------
// Initial triggers on page load
// ------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
    handleStringTransform("upper");
    handleStringSearch();
    renderActiveArray("Initial Array State");
    handleArraySlice();
    handleBridgeSplit();
});
