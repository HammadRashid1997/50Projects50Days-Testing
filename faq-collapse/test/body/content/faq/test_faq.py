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

element = driver.find_elements(By.CLASS_NAME, 'faq')

time.sleep(3)

if element:
    print(f'Found {len(element)} faq containers.')
    if len(element) == 5:
        print('Correct FAQ containers found.')
else:
    print('No faq containers found.')

# Close the browser window
driver.quit()
