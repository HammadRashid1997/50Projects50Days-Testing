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
driver.get('http://127.0.0.1:5500/live-user-filter/index.html')  

element = driver.find_element(By.XPATH, '//header[@class="header"]')

h4_element = driver.find_element(By.XPATH, '//h4[@class="title"]')

h4_element_text = h4_element.text

h4_element_text_color = h4_element.value_of_css_property('color')

small_element = driver.find_element(By.XPATH, '//small[@class="subtitle"]')

small_element_text = small_element.text

small_element_text_color = small_element.value_of_css_property('color')

search_bar = driver.find_element(By.XPATH, '//input[@id="filter"]')

search_bar_placeholder_text = search_bar.get_attribute('placeholder')

# Wait for the result (let's say for 3 seconds)
time.sleep(3)

if element:
    print('The container is visible')
else:
    print('The container is not visible')
    
print(f'The text is {h4_element_text}')
print(f'The text color is {h4_element_text_color}')
print(f'The text is {small_element_text}')
print(f'The text color is {small_element_text_color}')
print(f'The text is {search_bar_placeholder_text}')

# Close the browser window
driver.quit()
