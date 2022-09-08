from flask import Flask, render_template, request, redirect, url_for
import data_manager

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    player_name = ""
    if request.method == 'POST':
        player_name = request.form.get('player_name')
        data_manager.write_name_in_scores(player_name)
    return render_template('index.html', player_name=player_name)


if __name__ == '__main__':
    app.run(
        port=5000,
        debug=True
    )
