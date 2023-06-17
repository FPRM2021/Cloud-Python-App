from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/execute', methods=['POST'])
def execute():
    code = request.form.get('code')
    try:
        exec(code)
        result = "Code executed successfully."
    except Exception as e:
        result = f"An error occurred: {e}"
    
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run()