from flask import Flask, request, jsonify, Response

app = Flask(__name__)

@app.route('/savelist')
def savelist():

	textfile = open('shop_data.txt', 'w')
	textfile.write(Request.dumps(request.json))

	res = Response('')
	
	return res 


@app.route('/getlist')
def getlist():

	textfile = open('shop_data.txt', 'r+')
	shopitems = textfile.read()

	return jsonify(shopitems)



app.run(debug=True, port=5001)