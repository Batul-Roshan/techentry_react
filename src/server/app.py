import random
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Your employee data generation code here


# Function to generate a random username
def generate_username():
    names = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Hannah",
        "Isaac",
        "Julia",
    ]
    return random.choice(names) + " " + random.choice(names)


# Generate 1000 employee records
employees = []
following = [True, False]
for i in range(1, 1001):

    username = generate_username()
    handle = f"{username}_intutian_{i}"
    isFollowing = random.choice(following)

    employee = {"handle": handle, "username": username, "isFollowing": isFollowing}

    employees.append(employee)

# # Print the first few records
for employee in employees[:5]:
    print(employee)


@app.route("/get_non_following_employees", methods=["GET"])
def get_non_following_employees():
    non_following_employees = [
        employee for employee in employees if not employee["isFollowing"]
    ]

    return jsonify(non_following_employees)


if __name__ == "__main__":
    app.run()
