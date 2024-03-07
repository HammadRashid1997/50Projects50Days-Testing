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

driver.get('http://127.0.0.1:5500/good-cheap-fast/')  

element = driver.find_element(By.TAG_NAME, 'h2')

org_text = element.text

color = element.value_of_css_property('color')

time.sleep(3)

if element:
    print('h2 found')
else:
    print('h2 not found')

if org_text == 'How do you want your project to be?':
    print('h2 heading text is correct')
else:
    print('h2 heading text is not correct')
    
print('The color is: ',color)
    
driver.quit()
