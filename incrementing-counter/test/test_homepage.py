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

# Open Google
driver.get('http://127.0.0.1:5500/incrementing-counter/')

body = driver.find_element(By.TAG_NAME, 'body')

bg_color = body.value_of_css_property('background-color')

if body:
    print('The screen is visible')
else:
    print('The screen is not visible')
    
print('The background color is: ', bg_color)

time.sleep(5)

driver.quit()
