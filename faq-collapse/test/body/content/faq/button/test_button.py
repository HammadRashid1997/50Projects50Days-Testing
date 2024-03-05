from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get('http://127.0.0.1:5500/faq-collapse/')  

# Find the first FAQ container
faq = driver.find_element(By.CSS_SELECTOR, '.faq')

# Find the toggle button within the FAQ container
toggle_button = faq.find_element(By.CLASS_NAME, 'faq-toggle')

# Click the toggle button to activate the FAQ container
toggle_button.click()

# Check if the container becomes active
if 'active' in faq.get_attribute('class'):
    print('FAQ container is active after clicking the toggle button.')
else:
    print('FAQ container is not active.')

# Click the toggle button again to deactivate the FAQ container
toggle_button.click()

# Check if the container becomes inactive
if 'active' not in faq.get_attribute('class'):
    print('FAQ container is inactive after clicking the toggle button again.')
else:
    print('FAQ container is still active.')

# Close the browser window
driver.quit()
