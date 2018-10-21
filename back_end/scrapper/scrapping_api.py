import json
import requests

BASE_URL = "https://launchlibrary.net/1.4/"


class Agency(object):
    name = ""
    launches = 0

    def __init__(self, name, launches):
        self.name = name
        self.launches = launches


def make_agency(name, launches):
    agency = Agency(name, launches)
    return agency


response_launches = requests.get(BASE_URL + "launch")
launches = json.loads(response_launches.text)
type(launches)

response_agency = requests.get(BASE_URL + "lsp")
agencies = json.loads(response_agency.text)
type(agencies)

table = []

for launch in launches:
    item = launch['lsp']
    id_str = str(launch["lsp"])
    id = int(id_str)
    for agency in agencies:
        if agency["id"] == id and table[id] is None:
            new_object = make_agency(agency["abbrev"], 1)
            table.insert(id, new_object)
        elif agency["id"] == id and table[id] is not None:
            current_object = table.pop(id)
            current_object.launches += 1
            table.insert(id, current_object)
        else:
            continue


print(table)




