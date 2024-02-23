from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get('http://127.0.0.1:5500/_project_starter_/index.html')  

element = driver.find_element(By.TAG_NAME, 'body')

background_color = element.value_of_css_property('background-color')

heading_text = element.text

text_color = element.value_of_css_property('color')

time.sleep(3)

if element:
    print('Body element has been found')
else:
    print('Body element not found')

print(f'The background color is {background_color}')

print(f'The text on the page is {heading_text}')

print(f'The heading text color is {text_color}')

driver.quit()
