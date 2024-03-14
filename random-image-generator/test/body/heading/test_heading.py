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

driver.get('http://127.0.0.1:5500/random-image-generator/index.html')  

element = driver.find_element(By.XPATH, '/html/body/h1')

text = element.text

color = element.value_of_css_property('color')

time.sleep(10)

if element:
    print('The heading text is visible')
else:
    print('The heading text is not visible')

print(f'Text: {text}')

print(f'Color of text: {color}')

# Close the browser window
driver.quit()
