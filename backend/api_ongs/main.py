from flask import Flask, make_response, jsonify, request
from flask_cors import CORS
from bd import Ongs
from bd import Users

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
CORS(app)

@app.route('/ongs', methods=['GET'])
def get_ongs():
    return make_response(
        jsonify(
            message='Lista de Ongs',
            data=Ongs
        )
    )
 
@app.route('/ongs', methods=['POST'])
def create_ong():
    ong = request.json
    Ongs.append(ong)
    return make_response(
        jsonify(
        message='Ong cadastrada',
        data=ong
        )
    )

@app.route('/users', methods=['GET'])
def get_user():
    return make_response(
        jsonify(
            message='Lista de usuários',
            data=Users
        )
    )

@app.route('/users', methods=['POST'])
def create_user():
    user = request.json
    Users.append(user)
    return make_response(
        jsonify(
        message='Usuário cadastrada',
        data=user
        )
    )

app.run(host="0.0.0.0")