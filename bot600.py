#!/usr/bin/env python3

from binance import Client, ThreadedWebsocketManager, ThreadedDepthCacheManager
import datetime
from time import time, sleep
import requests
import json
import numpy as np
import sys
import mysql.connector

c = 1

def myround(x, base=600): 
    return base * round(x / base)

now = round(time())
now = str(now)
test = myround(float(now))
wait = test - float(now)
if (wait < 1):
 wait = wait + 600 #15

sleep(wait)
response = requests.get("https://fapi.binance.com/fapi/v1/premiumIndex")
result = json.dumps(response.json()) 
modified = result[+1:-1]
array0 = {} #new
array1 = {}
counter = 0
done = False
x = 0

def setupCountNArrays():
	global counter, response, done, array0, array1, x, result, modified
	done = False
	while (done == False):
		try:
			result = json.dumps(response.json()) 
			modified = result[+1:-1]
			counter = len(modified.split(", {"))
			array0 = {} #new
			array1 = {} #old
			i = 0
			while i<(int(counter)):
				my_list = modified.split(", {")[i]
				my_listA = my_list.split(",")[0]
				my_listB = my_listA.split('"')[3]
				my_list1 = my_list.split(",")[1]
				my_list2 = float(str(my_list1)[+15:-1])
				array0[my_listB] = my_list2
				i=i+1
			done = True
		except:
			counter=counter-1
	now = round(time())
	now = str(now)
	test = myround(float(now))
	wait = test - float(now)
	if (wait < 1):
		wait = wait + 600 #15
	sleep(wait)
	response = requests.get("https://fapi.binance.com/fapi/v1/premiumIndex")
	result = json.dumps(response.json()) 
	modified = result[+1:-1]
	x = 0

setupCountNArrays()
while True:
	try:
		if(counter != len(modified.split(", {"))):
			setupCountNArrays()
		my_list = modified.split(", {")[x]
		my_listA = my_list.split(",")[0]
		my_listB = my_listA.split('"')[3]
		my_list1 = my_list.split(",")[1]
		my_list2 = float(str(my_list1)[+15:-1])
		array1[my_listB] = array0[my_listB]
		array0[my_listB] = my_list2
		coefic = round(float(((array0[my_listB] / array1[my_listB]) - 1)*100), 3)
		if (coefic < 0):
			coefic = coefic - coefic - coefic
		coefic = str(coefic)
		if (coefic[2] == "."):
			coefic = "x" + coefic
		yeetus = [(str(coefic) + " " + my_listB)]
		try:
			pythonList = pythonList + yeetus
		except:
			pythonList = yeetus

		x=x+1
		if x == counter:
			x = 0
			pythonList.sort(reverse=True)

			while(c < counter):
				var = str(pythonList[c-1:c])
				if (var[0:7] == ("['x-0.0")):
					pythonList.pop(c-1)
				elif (var[0:6] == ("['0.0 ")):
					pythonList.pop(c-1)
				elif (var[0:3] == ("['x")):
					changing = pythonList[c-1][1:]
					pythonList.pop(c-1)
					pythonList.insert(c-1, changing)
				else:
					c=(c+1)

			c = 1
			var = str(pythonList[:1])
			if (var[2] == "x"):
				var = "['" + var[3:]
			if (str(var[3]) == "."):
				var = float(var[2])
			elif (str(var[4]) == "."):
				var = float((str(var[2]) + str(var[3])))
			elif (str(var[5]) == "."):
				var = float((str(var[2]) + str(var[3]) + str(var[4])))

			db = mysql.connector.connect(
			  host="maindb.c3gm1jukzwk8.eu-north-1.rds.amazonaws.com",
			  user="admin",
			  password="masterPassword&125",
			  port="3306",
			  database="market_data"
			)
			cursor = db.cursor()
			cursor.execute("INSERT INTO 10min (num1,coin1,num2,coin2,num3,coin3,num4,coin4,num5,coin5,num6,coin6,num7,coin7,num8,coin8,num9,coin9,num10,coin10, date) VALUES (" 
				+ pythonList[0].split()[0] + ","
				+ "'" + pythonList[0].split()[1] + "'" + ","
				+ pythonList[1].split()[0] + ","
				+ "'" + pythonList[1].split()[1] + "'" + ","
				+ pythonList[2].split()[0] + ","
				+ "'" + pythonList[2].split()[1] + "'" + ","
				+ pythonList[3].split()[0] + ","
				+ "'" + pythonList[3].split()[1] + "'" + ","
				+ pythonList[4].split()[0] + ","
				+ "'" + pythonList[4].split()[1] + "'" + ","
				+ pythonList[5].split()[0] + ","
				+ "'" + pythonList[5].split()[1] + "'" + ","
				+ pythonList[6].split()[0] + ","
				+ "'" + pythonList[6].split()[1] + "'" + ","
				+ pythonList[7].split()[0] + ","
				+ "'" + pythonList[7].split()[1] + "'" + ","
				+ pythonList[8].split()[0] + ","
				+ "'" + pythonList[8].split()[1] + "'" + ","
				+ pythonList[9].split()[0] + ","
				+ "'" + pythonList[9].split()[1] + "'" + ","
				+ "CURRENT_TIMESTAMP)")
			db.commit()

			pythonList = None
			now = round(time())
			now = str(now)
			test = myround(float(now))
			wait = test - float(now)
			if (wait < 1):
				wait = wait + 600 #15
			sleep(wait)
			response = requests.get("https://fapi.binance.com/fapi/v1/premiumIndex")
			result = json.dumps(response.json()) 
			modified = result[+1:-1]
	except Exception as error:
		pythonList = []
		try:
			setupCountNArrays()
		except:
			print("Binance lagging I guess")
			sleep(30)
