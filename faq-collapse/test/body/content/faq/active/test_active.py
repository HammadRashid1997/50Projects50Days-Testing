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

# Find the active FAQ container
active_faq = driver.find_element(By.CSS_SELECTOR, '.faq.active')

faq_title = active_faq.find_element(By.CLASS_NAME, 'faq-title').text

# Get the text from the active FAQ container
faq_text = active_faq.find_element(By.CLASS_NAME, 'faq-text').text

# Check if the container is active
is_active = 'active' in active_faq.get_attribute('class')

time.sleep(3)

# Perform assertions
if is_active:
    print('FAQ container is active.')
    print('FAQ title: ', faq_title)
    print('FAQ text: ', faq_text)
else:
    print('FAQ container is not active.')

# Close the browser window
driver.quit()
