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
driver.get('http://127.0.0.1:5500/sound-board/index.html')

element = driver.find_element(By.XPATH, '/html/body/div[1]/button[5]')  

background_color = element.value_of_css_property('background-color')

button_text = element.text

color = element.value_of_css_property('color')

time.sleep(3)

if element:
    print('The container is visible')
else:
    print('The container is not visible')
    
print(f'Text is: {button_text}')

print(f'The background color is {background_color}')

print(f'The text color is {color}')

# Close the browser window
driver.quit()
