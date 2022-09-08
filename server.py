from flask import Flask, render_template, request, redirect, url_for
import data_manager

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        player_name = request.form.get('player_name')
        data_manager.write_name_in_scores(player_name)
    return render_template('index.html')


if __name__ == '__main__':
    app.run(
        port=5200,
        debug=True
    )
