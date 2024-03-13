from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)
# Open the Flask application
driver.get('http://127.0.0.1:5500/pokedex/')  

element = driver.find_element(By.TAG_NAME, 'body')

time.sleep(30)

if element:
    print('The body is found.')
else:
    print('The body is not found.')

driver.quit()
