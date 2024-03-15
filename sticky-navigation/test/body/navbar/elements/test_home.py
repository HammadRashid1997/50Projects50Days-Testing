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

driver.get('http://127.0.0.1:5500/sticky-navigation/')  

element = driver.find_element(By.XPATH, '//nav[@class="nav"]/div[@class="container"]/ul/li/a[text()="Home"]')

homeText = element.text

time.sleep(5)

if element:
    print('The home is found')
else:
    print('The home is not found')

if homeText == 'Home':
    print('Correct text found')
else:
    print('Incorrect text found')
    
# Close the browser window
driver.quit()
