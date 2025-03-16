from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/scorespeech", methods=["POST"])
def score_speech():
    mp3_file = next(iter(request.files.values()), None)
    print(mp3_file)

    return jsonify({
        "score": 67,
        "transcription": "Uh, so, um, today I want to talk about, uh, artificial intelligence and, um, how it, uh, changes our world.",
        "speaking_speed": 1.3,
        "average_pitch": 180.2,
        "tone": "Neutral",
        "gemini_analysis": {
            "transcription_feedback": "Your speech contains multiple filler words ('uh', 'um') which may reduce clarity. Try practicing with structured pauses instead of fillers.",
            "speaking_speed_feedback": "Your speaking speed is slightly slow at 1.3 words per second. Increasing it to around 1.8-2.5 words per second could improve engagement.",
            "average_pitch_feedback": "Your pitch is on the lower end (180.2 Hz), which may make the speech sound monotonous. Adding slight variations in pitch can enhance expressiveness.",
            "tone_feedback": "Your tone appears neutral, which may not fully engage the audience. Consider emphasizing key points with slight enthusiasm or vocal variation."
        }
    })

if __name__ == "__main__":
    app.run("0.0.0.0", port=8000, threaded=True, debug=True)