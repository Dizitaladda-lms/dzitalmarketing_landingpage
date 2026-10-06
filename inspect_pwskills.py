import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')
soup = BeautifulSoup(open('pwskills_page.html', encoding='utf-8').read(), 'html.parser')

def print_block(b_id):
    b = soup.find(id=b_id)
    if not b: return
    print(f"\n=================== {b_id} ===================")
    print("Classes:", b.get('class'))
    print(b.prettify()[:1500])

for bid in ['block-stats', 'block-partners', 'block-tools', 'block-mid-cta', 'block-highlights', 'block-projects', 'block-mentors', 'block-mobile-cta', 'block-faq', 'block-footer']:
    print_block(bid)
