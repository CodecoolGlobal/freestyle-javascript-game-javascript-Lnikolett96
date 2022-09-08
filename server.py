from flask import Flask, render_template, request, redirect, url_for, jsonify
import data_manager

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    player_name = ""
    if request.method == 'POST':
        player_name = request.form.get('player_name')
    return render_template('index.html', player_name=player_name)


@app.route('/api/highscore')
def high_score():
    # highscores = [{"name": "KA", "score": 20}, {"name": "MU", "score": 40}]
    highscores = data_manager.get_data_from_sql()
    return render_template('Highscores.html', highscores=highscores)


@app.route('/api/updatescores', methods=['POST'])
def update_score():
    if request.method == 'POST':
        player_name = request.form.get('name')
        score = request.form.get('score')
        data_manager.write_data_in_scores(player_name, score)
        return "OK"


if __name__ == '__main__':
    app.run(
        port=5000,
        debug=True
    )
