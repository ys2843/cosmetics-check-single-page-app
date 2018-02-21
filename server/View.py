from flask import Flask, render_template
from pymongo import MongoClient
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
client = MongoClient('localhost', 27017)
db = client.sephora
skincare = db.sephora


@app.route('/')
def index():
    return ""


@app.route('/api/search/<query_content>', methods=['GET'])
def return_info(query_content):
    search_items = skincare.find({"$or": [{'name': {"$regex": query_content, '$options': 'i'}},
                                          {'brand': {"$regex": query_content, '$options': 'i'}}]})
    results = []
    for product in search_items:
        results.append(create_item(product))
    return json.dumps(results)


@app.route('/api/unsafe/', methods=['GET'])
def return_unsafe_products():
    search_unsafe_items = skincare.find({'is_safe': False})
    results = []
    for product in search_unsafe_items:
        results.append(create_item(product))
    return json.dumps(results)


def create_item(product):
    return {'name': product['name'],
            'category': product['category'],
            'url': product['url'],
            'image': product['image'],
            'brand': product['brand'],
            'unsafe_ingredients': product['unsafe_ingredients'],
            'sub_category': product['sub_category'],
            'is_safe': product['is_safe'],
            'price' : product['price'],
            'ingredients': product['ingredients']}


if __name__ == '__main__':
    app.run(debug=True)
