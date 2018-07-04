from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from google.oauth2 import id_token
from google.auth.transport import requests

#from __future__ import print_function
from apiclient.discovery import build
from httplib2 import Http
from oauth2client import file, client, tools

app = Flask(__name__)
CORS(app)

# global
CLIENT_ID = '665957642249-20clvptq5svpv41uk3a2vjs9vfltjv2l.apps.googleusercontent.com'
GSUITE_DOMAIN_NAME_DEV = 'dev.tangerine.co.th'
GSUITE_DOMAIN_NAME = 'tangerine.co.th'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/postidtoken', methods=['POST'])
def validate():
    # (Receive token by HTTPS POST)
    token = idtoken = request.form['idtoken']

    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)

        # Or, if multiple clients access the backend server:
        # idinfo = id_token.verify_oauth2_token(token, requests.Request())
        # if idinfo['aud'] not in [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]:
        #     raise ValueError('Could not verify audience.')

        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            return 'Wrong issuer.'

        # If auth request is from a G Suite domain:
        try:
            if idinfo['hd'] == GSUITE_DOMAIN_NAME or GSUITE_DOMAIN_NAME_DEV :
                # ID token is valid. Get the user's Google Account ID from the decoded token.
                userid = idinfo['sub']

        except KeyError:
            return 'Wrong hosted domain.'

    except ValueError:
        # Invalid token
        return 'Invalid token'

    return 'Valid'

@app.route('/api', methods = ['GET'])
def directory():
    # Setup the Admin SDK Directory API
    scope = 'https://www.googleapis.com/auth/admin.directory.user'
    store = file.Storage('credentials.json')
    creds = store.get()
    if not creds or creds.invalid:
        flow = client.flow_from_clientsecrets('client_secret.json', scope)
        creds = tools.run_flow(flow, store)
    service = build('admin', 'directory_v1', http=creds.authorize(Http()))

    # Call the Admin SDK Directory API
    #print('Getting the first 10 users in the domain')
    results = service.users().list(customer='my_customer', maxResults=10,
                                   orderBy='email').execute()
    users = results.get('users', [])
    if not users:
        return 'No users in the domain.'
    else:
        return jsonify(users)
        #print('Users:')
        #for user in users:
        #    results = ('{0} ({1})'.format(user['primaryEmail'], user['name']['fullName']))
    return

if __name__ == '__main__':
    app.run('localhost', 8080, debug = True)
