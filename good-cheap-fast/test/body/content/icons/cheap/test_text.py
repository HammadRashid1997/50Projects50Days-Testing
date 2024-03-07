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

# Search by Xpath
element = driver.find_element(By.XPATH, '//span[text()="Cheap"]')

org_text = element.text

time.sleep(3)

if org_text == 'Cheap':
    print('The text cheap is displayed')
else:
    print('The text cheap is not displayed')
    
driver.quit()
