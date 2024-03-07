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

driver.get('http://127.0.0.1:5500/good-cheap-fast/')  

fast_toggle = driver.find_element(By.ID, 'fast')

# Click the toggle button using JavaScript
driver.execute_script("arguments[0].click();", fast_toggle)

time.sleep(2)

# Click the toggle button using JavaScript
driver.execute_script("arguments[0].click();", fast_toggle)

time.sleep(3)

print('The button is clickable')

driver.quit()
