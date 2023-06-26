from flask import Flask, request, jsonify
import sys
from io import StringIO

app = Flask(__name__)

@app.route('/')
def home():
    return "Python Code Execution"

@app.route('/eval', methods=['POST'])
def evaluate_code():
    data = request.get_json()
    code = data['code']

    try:
        # Redirect standard output to capture the output
        stdout = sys.stdout
        sys.stdout = StringIO()

        exec(code)

        # Get the captured output
        output = sys.stdout.getvalue()

        result = "Code executed successfully."
    except Exception as e:
        output = ""
        result = f"An error occurred: {e}"

    # Reset the standard output
    sys.stdout = stdout

    response = {
        "result": result,
        "output": output
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
