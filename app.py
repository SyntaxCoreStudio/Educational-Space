from flask import Flask, render_template

app = Flask(__name__)

@app.get("/")
def home():
    return render_template("index.html")

@app.get("/modules/gravity")
def gravity():
    return render_template("modules/gravity.html")

if __name__ == "__main__":
    app.run(debug=True)