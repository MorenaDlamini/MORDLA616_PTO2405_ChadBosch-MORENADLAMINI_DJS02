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

     // Check for division by zero
     if (numDivider === 0) {
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error("Error: Division by zero.");
      return;
    }

     // Perform division and handle decimal results
     const divisionResult = numDividend / numDivider;
     result.innerText = divisionResult % 1 === 0 ? divisionResult : Math.floor(divisionResult);
   } catch (error) {
     // Handle unexpected errors
     console.error("Critical Error:", error);
     result.innerText = "Something critical went wrong. Please reload the page.";
     document.body.innerHTML = `<div>Something critical went wrong. Please reload the page.</div>`;
   }
 });
