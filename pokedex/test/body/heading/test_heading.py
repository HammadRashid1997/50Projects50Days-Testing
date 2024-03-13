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
driver.get('http://127.0.0.1:5500/pokedex/')  

# element = driver.find_element(By.XPATH, '//h1[text()="Pokedex"]')
element = driver.find_element(By.TAG_NAME, 'h1')

h1 = element.text

color = element.value_of_css_property('color')
  
time.sleep(3)

if element:
    print('h1 found')
else:
    print('h1 not found')
    
if h1 == "Pokedex":
    print('h1 text is correct')
else:
    print('h1 text is incorrect')
    
print(f'The color of h1 is {color}')  
    
driver.quit()
