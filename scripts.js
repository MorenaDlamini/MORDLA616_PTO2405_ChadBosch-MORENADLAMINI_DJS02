const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Check if inputs are empty
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      return;
    }

    const numDividend = Number(dividend);
    const numDivider = Number(divider);

    // Validate that inputs are numbers
    if (isNaN(numDividend) || isNaN(numDivider)) {
      throw new Error("Invalid input: non-numeric values provided.");
    }
