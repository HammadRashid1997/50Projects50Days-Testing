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

element = driver.find_element(By.CLASS_NAME, 'container')

bgcolor = element.value_of_css_property('background-color')

time.sleep(5)

print(f'The background color is: {bgcolor}')

# Close the browser window
driver.quit()
