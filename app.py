from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/send-message", methods=["POST"])
def send_message():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if name and email and message:
        # Here, you can save the data to a database or send it via email
        return jsonify({"message": "Message sent successfully!"})
    return jsonify({"message": "Failed to send message"}), 400

if __name__ == "__main__":
    app.run(debug=True)
