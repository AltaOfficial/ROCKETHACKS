from flask import Flask,jsonify

app = Flask(__name__)

@app.route("/scorespeech")
def score_speech():
    


    return jsonify({})

if __name__ == "__main__":
    app.run("0.0.0.0", port=8000, threaded=True, debug=True)