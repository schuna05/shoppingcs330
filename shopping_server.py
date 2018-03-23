from flask import Flask, request, jsonify, Response
import json

app = Flask(__name__)

@app.route('/savelist', methods=['POST'])
def savelist():
	
	with open('shop_data.txt', 'w') as textfile:
		#for item in request.json:
		textfile.write(json.dumps(request.json))

	res = Response('')
	
	return res 


@app.route('/getlist')
def getlist():

	with open('shop_data.txt', 'r+') as textfile:
		#lst = []
		#for lin in textfile:
		ln = textfile.read()
			#lst.append(ln)
	
	return jsonify(ln)


if __name__ == "__main__":
	app.run(debug=True, port=5001)