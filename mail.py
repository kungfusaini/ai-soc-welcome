from re import template
import smtplib
import yaml
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def create_email(recipient_email):
    message = MIMEMultipart("alternative")
    sender_email = "kclaisociety@gmail.com"
    html = open("template.html")
    body = MIMEText(html.read(), 'html')
    message.attach(body)

    message["Subject"] = "Your AI"
    message["From"] = sender_email
    message["To"] = recipient_email

    return message


def send_email(message):
    config = yaml.safe_load(open("config.yml"))

    password = config['mail_pass']
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(message['From'], password)
        server.sendmail(
            message['From'], message['To'], message.as_string()
        )


if __name__ == '__main__':
    message = create_email('sumeetsaini621@gmail.com')
    send_email(message)
