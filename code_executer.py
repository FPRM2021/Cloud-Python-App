def execute_python_code(code):
    try:
        exec(code)
    except Exception as e:
        print("An error occurred:", e)