import requests
import bs4

url1 = 'https://en.wikipedia.org/wiki/Falcon_9'
url2 = ''


def get_success_spacex():
    response = requests.get(url1)
    soup = bs4.BeautifulSoup(response.text, features="html.parser")
    # return [a.attrs.get('href') for a in soup.select('div.title a[href^=/video]')]
    links = soup.select('div.hlist li')
    # print(response.text)

    string = str(links)
    finding1 = string.find('"List of Falcon 9 and Falcon Heavy launches">')
    finding_end = string.find('</a>')
    finding_begin = len('"List of Falcon 9 and Falcon Heavy launches">') + finding1
    numbers = string[finding_begin:finding_end]
    print(numbers)


get_success_spacex()

# https://blog.miguelgrinberg.com/post/easy-web-scraping-with-python

