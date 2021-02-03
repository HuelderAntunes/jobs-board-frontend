from xml.dom import minidom
import requests
import os

base_url = 'https://gamesjobs.com.br'


def add_routes(routes):
    for route in routes:
        url = root.createElement('url')
        loc = root.createElement('loc')
        loc.appendChild(root.createTextNode(route))
        url.appendChild(loc)
        urlset.appendChild(url)


def get_slugs():
    session = requests.Session()
    result = session.get('https://gamesjobsbr.herokuapp.com/jobs').json()
    jobs = result['success']['jobs']

    slugs = []

    for job in jobs:
        slug = job['slug']
        slugs.append(f'{base_url}/job/{slug}')

    return slugs


save_path_file = 'public/sitemap.xml'

root = minidom.Document()

urlset = root.createElement('urlset ')
urlset.setAttribute('xmlns', "http://www.sitemaps.org/schemas/sitemap/0.9")

add_routes([base_url, base_url + '/job'] + get_slugs())


root.appendChild(urlset)

xml_str = root.toprettyxml(indent="\t", encoding='utf-8')

with open(save_path_file, "w+") as f:
    f.write(xml_str.decode('utf-8'))
