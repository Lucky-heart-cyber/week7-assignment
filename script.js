// 🌟 Part 2: JavaScript Functions - Scope, Parameters & Return

// Global variable for demonstration
let globalCount = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b; // Returns the sum
}

// Function showing local vs global scope
function incrementCounter() {
  let localCount = globalCount + 1; // local variable
  globalCount = localCount; // update global variable
  return localCount;
}

// Function to update message dynamically
function updateMessage(message) {
  document.getElementById("functionOutput").textContent = message;
}

// --- Hooking functions to buttons ---
document.getElementById("addBtn").addEventListener("click", () => {
  const result = addNumbers(5, 7);
  updateMessage("✅ Sum of 5 + 7 = " + result);
});

document.getElementById("countBtn").addEventListener("click", () => {
  const result = incrementCounter();
  updateMessage("🔢 Counter = " + result);
});

// 🌟 Part 3: Combining CSS Animations with JS

const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

// Reusable function to trigger animation
function triggerAnimation() {
  // Toggle rotation/scale class
  box.classList.toggle("animate");

  // Add flash effect for a short burst
  box.classList.add("flash");
  setTimeout(() => box.classList.remove("flash"), 1000);
}

// Attach event listener
animateBtn.addEventListener("click", () => {
  triggerAnimation();
  document.getElementById("message").textContent = "🎉 Animation triggered!";
});
