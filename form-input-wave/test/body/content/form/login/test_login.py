from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)
driver.get('http://127.0.0.1:5500/form-input-wave/')  

element = driver.find_element(By.XPATH, '/html/body/div[1]/form/button')

text = element.text

background_color = element.value_of_css_property('background-color')

color = element.value_of_css_property('color')

time.sleep(3)

if element:
    print('Login button is visible')
else:
    print('Login button not visible')
    
if text == 'Login':
    print('The correct text is visible')
else:
    print('The correct text is not visible')
    
print(f'Button color: {background_color}')
print(f'Text color: {color}')

# Close the browser window
driver.quit()
