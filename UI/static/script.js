document.addEventListener("DOMContentLoaded", function() {
  var codeForm = document.querySelector("#code-form");
  var resultContainer = document.querySelector(".result-container");
  var outputElement = resultContainer.querySelector(".output");
  var resultElement = resultContainer.querySelector(".result");

  codeForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log("Form submitted");

    var codeTextArea = document.querySelector("#code-input");
    var code = codeTextArea.value;

    fetch("/eval", {
      method: "POST",
      body: JSON.stringify({ code: code }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(function(data) {
        console.log("Updating result div");

        // Update the result div with the fetched data
        outputElement.textContent = data.output;
        resultElement.textContent = data.result;
      })
      .catch(function(error) {
        console.error("Error: " + error);
      });
  });
});
