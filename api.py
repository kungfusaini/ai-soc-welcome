from flask import Flask, request
import time
from mail import create_email, send_email

app = Flask(__name__)


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


if __name__ == '__main__':
    print('Intialising API!')
    print('Started at: {}\n\n'.format(time.time()))
    print('\nENDPOINTS:')
    print(app.url_map)

    # create database connection
    print("\n\nConnecting to Mongo database...")
    app.run(debug=True, port=5000, host='0.0.0.0')
