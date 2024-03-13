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
driver.get('http://127.0.0.1:5500/random-choice-picker/index.html')  

body = driver.find_element(By.ID, 'textarea')

body.send_keys('100')  # \n represents pressing Enter
body.send_keys(',')
body.send_keys('qwerty')
body.send_keys(',')
body.send_keys('$dollar')
body.send_keys('\n')

# Optionally, retrieve the text from the text area to verify its content
textarea_content = body.get_attribute('value')
print('Text area content:', textarea_content)

time.sleep(5)
   
# Close the browser window
driver.quit()
