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
driver.get('http://127.0.0.1:5500/form-input-wave/')  

element = driver.find_element(By.XPATH, '//div[@class="container"]')

background_color = element.value_of_css_property('background-color')

time.sleep(3)

if element:
    print('The container is visible.')
else:
    print('The container is not visible')
    
print(f'Background color is {background_color}')
    
driver.quit()
