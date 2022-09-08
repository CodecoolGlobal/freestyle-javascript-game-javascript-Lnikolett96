from flask import Flask, render_template, request, redirect, url_for, jsonify
import data_manager

app = Flask(__name__)


@app.route('/')
def hello_world():

    return render_template('index.html')

@app.route('/api/highscore')
def high_score():
    name = request.args.get("name")
    print(type(name))
    score = request.args.get("score")
    print(type(score))
    data_manager.write_data_in_scores(name, score)
    return jsonify("OK")


if __name__ == '__main__':
    app.run(
        port=5500,
        debug=True
    )
