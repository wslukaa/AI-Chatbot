from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request

from chatbot import ChatBot

# Setting up flask
app = Flask(__name__)

bot = ChatBot("chat")

# Render the main page
@app.route("/")
def index():
	return render_template("index.html")

# Get the response from the chatbot
@app.route('/message', methods=['POST'])
def reply():
	data = request.get_json(force=True)
	line = data.get("text", "")

	if len(line) > 0 and line[-1] == '\n':
			line = line[:-1]
	if line == '':
			jsonify({"response": "Pardon?"})

	return jsonify({"response": bot.chat(line)})
