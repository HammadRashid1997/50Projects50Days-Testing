from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import random

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)
# Open the Flask application
driver.get('http://127.0.0.1:5500/random-choice-picker/index.html')  

body = driver.find_element(By.ID, 'textarea')

body.send_keys('100')  
body.send_keys(',')
body.send_keys('qwerty')
body.send_keys(',')
body.send_keys('$dollar')
body.send_keys('\n')

chosen_button = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//div[@id="tags"]//span[contains(@class, "tag") and contains(@class, "highlight")]'))
)

unchosen_button = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//div[@id="tags"]//span[contains(@class, "tag") and not(contains(@class, "highlight"))]'))
)

if chosen_button:
    print('Button chosen found')
else:
    print('Button not found')
    
if unchosen_button:
    print('The unchosen buttons found')
else:
    print('Unchosen buttons not found')
    
time.sleep(5)
   
# Close the browser window
driver.quit()
