from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialise Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open the application
driver.get('http://127.0.0.1:5500/toast-notification/index.html')  

element = driver.find_element(By.XPATH, '//*[@id="button"]')

background_color = element.value_of_css_property('background-color')

text = element.text

color = element.value_of_css_property('color')

# Wait for the result (let's say for 3 seconds)
time.sleep(3)

if element:
    print('The body is visible')
else:
    print('The body is not visible')
    
print(f'The text is {text}')

print(f'The background color is {background_color}')
print(f'The text color is {color}')

# Close the browser window
driver.quit()
