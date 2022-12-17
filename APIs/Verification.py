# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['ACc0e1967dbed6da755fd3848b65fc6b96']
auth_token = os.environ['2f49c9b0838cbc75cf9f208c5e1a24dd']
client = Client(account_sid, auth_token)

verification = client.verify \
                     .v2 \
                     .services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .verifications \
                     .create(to='+15017122661', channel='sms')

print(verification.sid)