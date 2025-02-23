from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.debug = True  # Enable debug mode for auto-reloading
    app.run(host='0.0.0.0', port=5000)
