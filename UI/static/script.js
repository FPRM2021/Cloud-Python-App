document.addEventListener("DOMContentLoaded", function() {
  var codeForm = document.querySelector("#code-form");

  codeForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log("Form submitted");

    var codeTextArea = document.querySelector("textarea[name='code']");
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
		  // Create a form element dynamically
        var form = document.createElement("form");
        form.action = "/result.html";
        form.method = "GET";

        // Create hidden input fields for the data values
        var outputInput = document.createElement("input");
        outputInput.type = "hidden";
        outputInput.name = "output";
        outputInput.value = data.output;

        var resultInput = document.createElement("input");
        resultInput.type = "hidden";
        resultInput.name = "result";
        resultInput.value = data.result;

        // Append the input fields to the form
        form.appendChild(outputInput);
        form.appendChild(resultInput);

        // Append the form to the document body and submit it
        document.body.appendChild(form);
        form.submit();
      })
      .catch(function(error) {
        console.error("Error: " + error);
      });
  });
});
