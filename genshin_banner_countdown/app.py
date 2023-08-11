from flask import Flask, jsonify
from countdown import calculate_remaining_time

app = Flask(__name__)

@app.route('/get_remaining_time')
def get_remaining_time():
    remaining_time = calculate_remaining_time()
    return jsonify({'remaining_time': remaining_time})

if __name__ == '__main__':
    app.run()