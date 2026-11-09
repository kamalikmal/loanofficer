/* DESK CALCULATOR LOGIC */
let calcMemory = "0";

function updateScreen() {
  const screenEl = document.getElementById("calc-screen");
  if (!screenEl) return;

  if (calcMemory === "Error") {
    screenEl.textContent = "Error";
    return;
  }

  const formatted = calcMemory.replace(/\d+(\.\d*)?/g, (num) => {
    const parts = num.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  });

  screenEl.textContent = formatted;
}

function calcInput(char) {
  if (calcMemory === "0" || calcMemory === "Error") {
    if (char === "00" || char === "000") return;
    calcMemory = "";
  }
  if (calcMemory.endsWith(" ") && (char === "00" || char === "000")) {
    char = "0";
  }
  calcMemory += char;
  updateScreen();
}

function calcBackspace() {
  if (calcMemory === "Error" || calcMemory.length <= 1) {
    calcMemory = "0";
  } else {
    if (calcMemory.endsWith(" ")) {
      calcMemory = calcMemory.trimEnd().slice(0, -1).trimEnd();
    } else {
      calcMemory = calcMemory.slice(0, -1);
    }
    if (calcMemory === "") calcMemory = "0";
  }
  updateScreen();
}

function calcOp(op) {
  if (calcMemory === "Error") calcMemory = "0";
  if (calcMemory.endsWith(" ")) {
    calcMemory = calcMemory.trimEnd().slice(0, -1);
  }
  calcMemory += " " + op + " ";
  updateScreen();
}

function calcClear() {
  calcMemory = "0";
  updateScreen();
}

function calcEquals() {
  try {
    const sanitized = calcMemory.replace(/[^0-9+\-*/.]/g, '');
    const res = Function(`'use strict'; return (${sanitized})`)();
    calcMemory = Number.isFinite(res)? (Math.round(res * 100) / 100).toString(): "Error";
  } catch (e) {
    calcMemory = "Error";
  }
  updateScreen();
}