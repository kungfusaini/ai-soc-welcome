from re import template
import smtplib
import yaml
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

file = open("template.html", "r")
print(file.read())
config = yaml.safe_load(open("config.yml"))

sender_email = "kclaisociety@gmail.com"
password = config['mail_pass']

message = MIMEMultipart("alternative")
message["Subject"] = "Your AI"
message["From"] = sender_email


def send_email(recipient_email):
    global message

    html = open("template.html")
    body = MIMEText(html.read(), 'html')

    # Add HTML/plain-text parts to MIMEMultipart message
    # The email client will try to render the last part first
    message.attach(body)

    message["To"] = recipient_email

    # Create secure connection with server and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(
            sender_email, recipient_email, message.as_string()
        )


if __name__ == '__main__':
    send_email('sumeetsaini621@gmail.com')
