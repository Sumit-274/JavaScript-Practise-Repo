import json

dict = {
"__name__":"Sumit",
"__profession":"Computer",
"__Fell__Good":"While Coding & Hacking",
"Dream":"Become Richest Person in the world"
}

convert = json.dumps(dict)

print(convert)