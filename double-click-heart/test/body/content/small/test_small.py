from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

# Define Chrome WebDriver options
chrome_options = Options()
# chrome_options.add_argument("--headless")  # Run headless if needed
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get('http://127.0.0.1:5500/double-click-heart')

element = driver.find_element(By.TAG_NAME, 'small')

color = element.value_of_css_property('color')

time.sleep(3)

if element:
    print('The small heading is displayed ')
else:
    print('No heading small exists')

print(f'The color is: {color}')

driver.quit()
