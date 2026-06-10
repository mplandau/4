from flask import Flask, jsonify
from flask_cors import CORS
import requests
import os 

app = Flask(__name__)
CORS(app)  # This allows your frontend website to securely talk to this server

# Keep your key safe inside the backend code where visitors cannot see it
API_KEY = os.getenv('NEWS_API_KEY')

@app.route('/api/news')
def get_site_news():
    # Correct the URL structure
    news_url = f'https://newsapi.org/v2/top-headlines?country=us&apiKey={API_KEY}'
    response = requests.get(news_url)
    if response.status_code == 200:
        return jsonify(response.json())
    return jsonify({"error": "Unable to fetch news"}), response.status_code

if __name__ == '__main__':
    app.run(port=5000)
