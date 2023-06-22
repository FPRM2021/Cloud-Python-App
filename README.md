# Cloud-Python-App

The code executer API receives Python code and executes it.
It returns the code's output if it runs successfully and throws an exception if it doesn't.


# Endpoints

The Flask app includes two endpoints:

The '/' endpoint is associated with the home() function, which renders the index.html template. This template contains the form where you can enter the Python code.

The '/eval' endpoint is associated with the execute() function. This function is triggered when the form is submitted. It retrieves the Python code from the form, executes it, captures the output, and renders the result.html template with the execution result and output.
