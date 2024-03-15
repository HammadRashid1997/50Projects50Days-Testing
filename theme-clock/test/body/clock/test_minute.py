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
# Open the Flask application
driver.get('http://127.0.0.1:5500/theme-clock/index.html')  

element = driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[2]')

color = element.value_of_css_property('background-color')

time.sleep(3)

if element:
    print('The minute needle is found.')
else:
    print('The minute needle is not found.')
    
print(f'The color of minute needle is: {color}')

# Close the browser window
driver.quit()