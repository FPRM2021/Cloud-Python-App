from flask import Flask, render_template, request
import sys
from io import StringIO

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/execute', methods=['POST'])
def execute():
    code = request.form.get('code')
    
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
    
    return render_template('result.html', result=result, output=output)

if __name__ == '__main__':
    app.run()