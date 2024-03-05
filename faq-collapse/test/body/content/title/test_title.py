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

driver.get('http://127.0.0.1:5500/faq-collapse/')  

# Find the h1 heading and then verify if the text is correct along with its color

element = driver.find_element(By.XPATH, '//h1[text()="Frequently Asked Questions"]')

h1_text = element.text

color = element.value_of_css_property('color')

time.sleep(3)

if h1_text == 'Frequently Asked Questions':
    print('Correct text found.')
else:
    print('Correct text not found.')
    
print(f'The text color is: {color}')

# Close the browser window
driver.quit()
