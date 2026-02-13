from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/response', methods=['POST'])
def handle_response():
    data = request.get_json()
    response = data.get('response')
    
    if response == 'yes':
        return jsonify({
            'success': True,
            'message': '💕 You just made me the happiest person! I love you so much! 💕'
        })
    else:
        return jsonify({
            'success': True,
            'message': '😭 I understand... but I\'ll keep trying to win your heart! 💔'
        })

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)
