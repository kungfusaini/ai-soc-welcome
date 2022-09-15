from flask import Flask, request
import time
from mail import create_email, send_email
from file_handler import write_data
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/sendEmail', methods=['POST'])
def sendEmail():
    recipient_email = request.form['recipient_email']
    message = create_email(recipient_email)
    send_email(message)
    response = app.response_class(
        response="Email sent to {}".format(recipient_email),
        status=200
        )
    return response


@app.route('/storeInfo', methods=['POST'])
def storeInfo():
    print("Received request to store data")
    d = request.json
    write_data([d['email'], d['first'], d['last']])
    response = app.response_class(
        response="Data stored for {} {}".format(d['first'], d['last']),
        status=200,
        )
    return response


if __name__ == '__main__':
    print('Intialising API!')
    print('Started at: {}\n\n'.format(time.time()))
    print('\nENDPOINTS:')
    print(app.url_map)
    app.run(debug=True, port=5000, host='0.0.0.0')
