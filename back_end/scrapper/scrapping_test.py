import requests
import bs4

url1 = 'https://oronospolytechnique.com'
url2 = 'https://www.nasa.gov/launchschedule/'
url3 = 'https://www.spacex.com/news'


def get_video_page_urls():
    response = requests.get(url1)
    soup = bs4.BeautifulSoup(response.text, features="html.parser")
    # return [a.attrs.get('href') for a in soup.select('div.title a[href^=/video]')]
    links = soup.select('div.section-heading h2')
    #print(response.text)
    return links


print(get_video_page_urls())


# https://blog.miguelgrinberg.com/post/easy-web-scraping-with-python

