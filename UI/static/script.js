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
		console.log("Redirecting to result page");

        // Build the query string with the data values
        var queryString = "?output=" + encodeURIComponent(data.output) + "&result=" + encodeURIComponent(data.result);

        // Redirect to the result page with the query string
        window.location.href = "/result.html" + queryString;
      })
      .catch(function(error) {
        console.error("Error: " + error);
      });
  });
});
