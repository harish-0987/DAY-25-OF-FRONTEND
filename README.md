# ⚡ Day 24 of Frontend: Basic Level Array and String Methods in JavaScript

Welcome to **Day 24 of the 100 Days Frontend Challenge**! Today's project focuses on understanding and practicing the most essential **String Methods** and **Array Methods** in JavaScript with simple, beginner-friendly code examples.

🔗 **Repository:** [harish-0987/DAY-24-OF-FRONTEND](https://github.com/harish-0987/DAY-24-OF-FRONTEND)

---

## 📌 Part 1: Basic String Methods

In JavaScript, **Strings** represent sequences of text. Strings are **immutable**, meaning string methods do not change the original string—they always return a brand new string or a result.

### Essential Basic String Methods

#### 1. `toUpperCase()` & `toLowerCase()`
Changes the case of a string.
```javascript
const text = "Frontend Development";

console.log(text.toUpperCase()); // "FRONTEND DEVELOPMENT"
console.log(text.toLowerCase()); // "frontend development"
```

#### 2. `trim()`
Removes whitespace from both ends of a string (great for sanitizing user inputs).
```javascript
const messyInput = "   Hello JavaScript!   ";
console.log(messyInput.trim()); // "Hello JavaScript!"
```

#### 3. `includes()`
Checks if a string contains a specific substring (case-sensitive) and returns `true` or `false`.
```javascript
const sentence = "Learning JavaScript is fun";
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.includes("Python"));     // false
```

#### 4. `slice(start, end)`
Extracts a section of a string and returns it as a new string.
```javascript
const phrase = "CodeWithHarish";
console.log(phrase.slice(0, 4)); // "Code"
console.log(phrase.slice(4));    // "WithHarish"
```

#### 5. `replace(search, replacement)`
Replaces the first occurrence of a substring with another string.
```javascript
const message = "I like apples";
console.log(message.replace("apples", "oranges")); // "I like oranges"
```

#### 6. `split(separator)`
Splits a string into an array of substrings based on a delimiter.
```javascript
const skills = "HTML,CSS,JavaScript";
console.log(skills.split(",")); // ["HTML", "CSS", "JavaScript"]
```

---

## 📌 Part 2: Basic Array Methods

An **Array** in JavaScript is an ordered list of elements. Unlike strings, arrays are **mutable**, so some methods modify the original array in-place, while others return a new array.

### Essential Basic Array Methods

#### 1. Adding & Removing Elements
- **`push(item)`**: Adds an item to the **end** of the array.
- **`pop()`**: Removes the **last** item from the array and returns it.
- **`unshift(item)`**: Adds an item to the **beginning** of the array.
- **`shift()`**: Removes the **first** item from the array and returns it.

```javascript
const fruits = ["🍎 Apple", "🍌 Banana"];

// Add to end
fruits.push("🍊 Orange");       // ["🍎 Apple", "🍌 Banana", "🍊 Orange"]

// Remove from end
const lastItem = fruits.pop();   // "🍊 Orange"

// Add to beginning
fruits.unshift("🍓 Strawberry"); // ["🍓 Strawberry", "🍎 Apple", "🍌 Banana"]

// Remove from beginning
const firstItem = fruits.shift(); // "🍓 Strawberry"
```

#### 2. `includes()` & `indexOf()`
- **`includes(value)`**: Returns `true` if the value is present in the array.
- **`indexOf(value)`**: Returns the index position of the value, or `-1` if not found.

```javascript
const colors = ["red", "green", "blue"];

console.log(colors.includes("green")); // true
console.log(colors.indexOf("blue"));   // 2
console.log(colors.indexOf("yellow")); // -1 (not found)
```

#### 3. `slice(start, end)`
Returns a shallow copy of a portion of an array without modifying the original array.
```javascript
const numbers = [10, 20, 30, 40, 50];
const subArray = numbers.slice(1, 4); // [20, 30, 40]
```

#### 4. `reverse()`
Reverses the elements of an array in-place.
```javascript
const letters = ["A", "B", "C", "D"];
letters.reverse(); // ["D", "C", "B", "A"]
```

#### 5. `join(separator)`
Combines all elements of an array into a single string separated by the specified delimiter.
```javascript
const techStack = ["React", "Node", "MongoDB"];
console.log(techStack.join(" - ")); // "React - Node - MongoDB"
```

---

## 🔄 The Bridge: `split()` and `join()`

One of the most practical basic patterns in JavaScript is converting a string to an array with `split()`, manipulating it, and joining it back into a string with `join()`:

```javascript
// Reversing a string using basic methods
const word = "hello";
const reversedWord = word.split("").reverse().join("");
console.log(reversedWord); // "olleh"
```

---

## 📊 Summary Quick Reference

| Method | Type | Modifies Original? | Return Value | Example |
| :--- | :--- | :--- | :--- | :--- |
| `toUpperCase()` | String | ❌ No | String (uppercase) | `"hi".toUpperCase()` -> `"HI"` |
| `trim()` | String | ❌ No | String (trimmed) | `" a ".trim()` -> `"a"` |
| `includes()` | String & Array | ❌ No | Boolean (`true`/`false`) | `[1, 2].includes(2)` -> `true` |
| `slice()` | String & Array | ❌ No | Substring / Sub-array | `"hello".slice(0, 2)` -> `"he"` |
| `replace()` | String | ❌ No | New string with replacement | `"cat".replace("c", "b")` -> `"bat"` |
| `push()` | Array | ✅ Yes | New length of array | `arr.push("item")` |
| `pop()` | Array | ✅ Yes | Removed item | `arr.pop()` |
| `unshift()` | Array | ✅ Yes | New length of array | `arr.unshift("item")` |
| `shift()` | Array | ✅ Yes | Removed item | `arr.shift()` |
| `reverse()` | Array | ✅ Yes | Mutated reversed array | `arr.reverse()` |
| `split()` | String -> Array | ❌ No | Array of strings | `"a,b".split(",")` -> `["a", "b"]` |
| `join()` | Array -> String | ❌ No | Combined string | `["a", "b"].join("-")` -> `"a-b"` |

---

## 🚀 Interactive Features Included in This Project

- **String Transformation Studio:** Live demonstration of `toUpperCase()`, `toLowerCase()`, and `trim()` on user input.
- **String Search & Replace:** Live testing of `includes()`, `slice()`, and `replace()`.
- **Interactive Array Playground:** Visual list where you can live `push()`, `pop()`, `unshift()`, and `shift()` items.
- **Array Utility Tools:** Check `includes()`, find `indexOf()`, `slice()`, and `reverse()` in real-time.
- **String ⇄ Array Converter:** Live bidirectional conversion demo using `split()` and `join()`.

---

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/harish-0987/DAY-24-OF-FRONTEND.git
   ```
2. Open the project folder:
   ```bash
   cd DAY-24-OF-FRONTEND
   ```
3. Open `index.html` in any modern web browser.

---

## 👤 Author
- **Harish** - [@harish-0987](https://github.com/harish-0987)
- 100 Days Frontend Challenge
