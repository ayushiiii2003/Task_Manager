import pytest
from app import app
import api.register as reg_module

def test_register_user():
    with app.test_client() as client:
        response = client.post('/api/register', json={'email': 'test@example.com', 'password': 'password123'})
        assert response.status_code == 201

def test_bad_email():
    with app.test_client() as client:
        response = client.post('/api/register', json={'email': 'invalid', 'password': 'password123'})
        assert response.status_code == 400

def test_bad_password():
    with app.test_client() as client:
        response = client.post('/api/register', json={'email': 'test@example.com', 'password': 'short'})
        assert response.status_code == 400

def test_duplicate_email():
    with app.test_client() as client:
        client.post('/api/register', json={'email': 'test@example.com', 'password': 'password123'})
        response = client.post('/api/register', json={'email': 'test@example.com', 'password': 'password123'})
        assert response.status_code == 409

@pytest.fixture(autouse=True)
def clear_registered_emails():
    reg_module._registered_emails.clear()