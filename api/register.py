from flask import Blueprint, request, jsonify
import re

register_blueprint = Blueprint('register', __name__)
_registered_emails = set()

def _validate_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return bool(re.match(pattern, email))

def _validate_password(password):
    return len(password) >= 8

@register_blueprint.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    if not _validate_email(email):
        return jsonify({'error': 'Invalid email'}), 400
    if not _validate_password(password):
        return jsonify({'error': 'Invalid password'}), 400
    if email in _registered_emails:
        return jsonify({'error': 'Email already registered'}), 409
    _registered_emails.add(email)
    return jsonify({'message': 'User registered successfully'}), 201