from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return "<h2>🌿 Flask Backend Running Successfully!</h2><p>Use /api/services to view data.</p>"

# -----------------------------
# 🟢 Database Connection
# -----------------------------
def get_db_connection():
    return pymysql.connect(
        host="localhost",
        user="root",           # your MySQL username
        password="",           # your MySQL password (keep empty if none)
        database="rural_services",  # your database name
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor
    )

# -----------------------------
# 🌿 Get All Services
# -----------------------------
@app.route('/api/services', methods=['GET'])
def get_services():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM services")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(rows)

# -----------------------------
# 🌸 Add New Service
# -----------------------------
@app.route('/api/add-service', methods=['POST'])
def add_service():
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')

    if not name or not description:
        return jsonify({'message': 'Please fill all fields!'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO services (name, description) VALUES (%s, %s)",
        (name, description)
    )
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'message': 'Service added successfully!'})

# -----------------------------
# ✏️ Update Existing Service
# -----------------------------
@app.route('/api/update-service/<int:id>', methods=['PUT'])
def update_service(id):
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE services SET name=%s, description=%s WHERE id=%s",
        (name, description, id)
    )
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'message': 'Service updated successfully!'})

# -----------------------------
# ❌ Delete Service
# -----------------------------
@app.route('/api/delete-service/<int:id>', methods=['DELETE'])
def delete_service(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM services WHERE id=%s", (id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Service deleted successfully!'})

# -----------------------------
# 🌻 Run the Flask App
# -----------------------------
if __name__ == '__main__':
    app.run(debug=True)
