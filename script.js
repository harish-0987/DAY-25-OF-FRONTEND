// ======================================================
// Day 25: Basic Level DOM Manipulation in JavaScript
// 100 Days Frontend Challenge by Harish (@harish-0987)
// ======================================================

// ------------------------------------------------------
// 1. SELECTING & MODIFYING CONTENT (textContent vs innerHTML)
// ------------------------------------------------------

// textContent: Safely sets plain text (does not parse HTML)
function setElementText(elementId, text) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = text;
    }
}

// innerHTML: Parses and renders HTML markup
function setElementHTML(elementId, htmlString) {
    const el = document.getElementById(elementId);
    if (el) {
        el.innerHTML = htmlString;
    }
}

// ------------------------------------------------------
// 2. MODIFYING STYLES & CSS CLASSES (style & classList)
// ------------------------------------------------------

// Inline style modification
function setBoxColor(elementId, color, bgColor) {
    const el = document.getElementById(elementId);
    if (el) {
        el.style.color = color;
        el.style.backgroundColor = bgColor;
        el.style.borderColor = color;
    }
}

// classList manipulation (add, remove, toggle, contains)
function toggleBoxHighlight(elementId, className = "highlight-active") {
    const el = document.getElementById(elementId);
    if (el) {
        el.classList.toggle(className);
        return el.classList.contains(className);
    }
    return false;
}

// ------------------------------------------------------
// 3. CREATING & REMOVING ELEMENTS (createElement, appendChild, remove)
// ------------------------------------------------------

let elementCounter = 0;

// createElement & appendChild: Creates a new element and adds to container
function createAndAppendChip(containerId, labelText) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    elementCounter++;
    const newChip = document.createElement("span");
    newChip.className = "dynamic-item";
    newChip.textContent = `#${elementCounter} ${labelText}`;
    newChip.setAttribute("data-id", elementCounter);

    // Optional: Clicking on the chip directly removes it
    newChip.addEventListener("click", () => {
        newChip.remove();
        updateElementCountDisplay();
    });

    container.appendChild(newChip);
    return newChip;
}

// removeChild / remove: Removes the last child element
function removeLastChildElement(containerId) {
    const container = document.getElementById(containerId);
    if (container && container.lastElementChild) {
        const removedText = container.lastElementChild.textContent;
        container.lastElementChild.remove();
        return removedText;
    }
    return null;
}

// Clear all dynamically created elements
function clearContainerChildren(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = "";
        elementCounter = 0;
    }
}

// ------------------------------------------------------
// 4. ATTRIBUTE MANIPULATION (setAttribute, getAttribute)
// ------------------------------------------------------

function toggleInputAttributeType(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return "text";

    const currentType = input.getAttribute("type");
    const newType = currentType === "password" ? "text" : "password";
    input.setAttribute("type", newType);
    return newType;
}

function changePlaceholderAttribute(inputId, newPlaceholder) {
    const input = document.getElementById(inputId);
    if (input) {
        input.setAttribute("placeholder", newPlaceholder);
        return input.getAttribute("placeholder");
    }
    return null;
}

// ======================================================
// DOM UI Handlers for Interactive Playground
// ======================================================

// Helper: Render status chips in result box
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
        items.forEach((text, index) => {
            const chip = document.createElement("span");
            chip.className = "step-chip";
            chip.textContent = text;
            chip.style.animationDelay = `${index * 40}ms`;
            container.appendChild(chip);
        });
    }
}

// --- Handler 1: Content Update ---
function handleTextContentChange() {
    const customText = document.getElementById("content-input").value || "JavaScript DOM is interactive!";
    setElementText("content-target", customText);

    renderChips("content-result", [
        `Used: .textContent = "${customText}"`,
        `Safety: Plain text (Safe from XSS) 🔒`
    ], true);
}

function handleInnerHTMLChange() {
    const customText = document.getElementById("content-input").value || "JavaScript DOM";
    const formattedHTML = `✨ <strong>${customText}</strong> (Rendered with <em>HTML tags</em>!)`;
    setElementHTML("content-target", formattedHTML);

    renderChips("content-result", [
        `Used: .innerHTML = "<strong>...</strong>"`,
        `Tags Rendered: <strong> and <em> 🎨`
    ], true);
}

// --- Handler 2: Style & ClassList ---
function handleStyleColor(color, bgColor) {
    setBoxColor("style-target", color, bgColor);
    renderChips("style-result", [
        `style.color = "${color}"`,
        `style.backgroundColor = "${bgColor}"`
    ], true);
}

function handleClassToggle() {
    const isHighlighted = toggleBoxHighlight("style-target", "highlight-active");
    renderChips("style-result", [
        `classList.toggle("highlight-active")`,
        `Active Status: ${isHighlighted ? "true (Class Applied ✨)" : "false (Class Removed ❌)"}`
    ], true);
}

function handleStyleReset() {
    const box = document.getElementById("style-target");
    if (box) {
        box.removeAttribute("style");
        box.className = "target-box";
    }
    renderChips("style-result", "Styles & classes reset to defaults.", true);
}

// --- Handler 3: Dynamic Elements ---
function handleAddElement() {
    const input = document.getElementById("element-label-input");
    const label = input && input.value.trim() ? input.value.trim() : "DOM Task";
    
    const chip = createAndAppendChip("dynamic-container", label);
    if (chip) {
        renderChips("dynamic-result", [
            `document.createElement("span")`,
            `container.appendChild()`,
            `Added: "${chip.textContent}" (Click chip to delete)`
        ], true);
    }
}

function handleRemoveElement() {
    const removed = removeLastChildElement("dynamic-container");
    if (removed) {
        renderChips("dynamic-result", [
            `lastElementChild.remove()`,
            `Removed: "${removed}"`
        ], true);
    } else {
        renderChips("dynamic-result", "No elements left to remove!", false);
    }
}

function handleClearElements() {
    clearContainerChildren("dynamic-container");
    renderChips("dynamic-result", "Cleared all elements using innerHTML = ''", true);
}

function updateElementCountDisplay() {
    const container = document.getElementById("dynamic-container");
    const count = container ? container.children.length : 0;
    renderChips("dynamic-result", `Current elements count: ${count}`, true);
}

// --- Handler 4: Attributes ---
function handleToggleInputType() {
    const newType = toggleInputAttributeType("attr-input-demo");
    const btn = document.getElementById("btn-toggle-type");
    if (btn) {
        btn.textContent = newType === "password" ? "Show as Text" : "Hide as Password";
    }
    renderChips("attr-result", [
        `setAttribute("type", "${newType}")`,
        `Current type: ${newType}`
    ], true);
}

function handlePlaceholderChange() {
    const placeholders = [
        "Enter your secret code...",
        "Type something cool here...",
        "JavaScript is amazing!",
        "100 Days Frontend Challenge"
    ];
    const randomChoice = placeholders[Math.floor(Math.random() * placeholders.length)];
    changePlaceholderAttribute("attr-input-demo", randomChoice);

    renderChips("attr-result", [
        `setAttribute("placeholder", "${randomChoice}")`,
        `Updated successfully! 🏷️`
    ], true);
}

// --- Handler 5: Event Listeners (Click & Real-time Input) ---
let clickCounter = 0;

function setupEventListeners() {
    // 1. Click Listener
    const clickBtn = document.getElementById("btn-click-tracker");
    if (clickBtn) {
        clickBtn.addEventListener("click", () => {
            clickCounter++;
            const counterBadge = document.getElementById("click-counter-display");
            if (counterBadge) {
                counterBadge.textContent = `${clickCounter} clicks`;
            }
            renderChips("events-result", [
                `Event: "click"`,
                `Total clicks: ${clickCounter} 🖱️`
            ], true);
        });
    }

    // 2. Real-time Input Listener
    const liveInput = document.getElementById("live-mirror-input");
    const liveOutput = document.getElementById("live-mirror-output");

    if (liveInput && liveOutput) {
        liveInput.addEventListener("input", (e) => {
            const val = e.target.value;
            liveOutput.textContent = val.length > 0 ? val : "(Waiting for input...)";
            renderChips("events-result", [
                `Event: "input"`,
                `Characters: ${val.length}`,
                `Live Value: "${val}"`
            ], true);
        });
    }
}

// ------------------------------------------------------
// Initial triggers on DOM content loaded
// ------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
    // Pre-populate initial dynamic chips
    createAndAppendChip("dynamic-container", "Explore DOM");
    createAndAppendChip("dynamic-container", "Modify Nodes");

    setupEventListeners();
    handleTextContentChange();
    handleStyleColor("#38bdf8", "rgba(56, 189, 248, 0.12)");
});
