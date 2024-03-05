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

# Find all FAQ containers
faq_containers = driver.find_elements(By.CSS_SELECTOR, '.faq')

inactive_faqs = []

# Iterate through FAQ containers
for faq in faq_containers:
    if 'active' not in faq.get_attribute('class'):
        inactive_faqs.append(faq)
        
time.sleep(3)

# Check the inactive FAQ containers
if inactive_faqs:
    print(f"Found {len(inactive_faqs)} inactive FAQ containers.")
    for idx, faq in enumerate(inactive_faqs, start=1):
        faq_title = faq.find_element(By.CLASS_NAME, 'faq-title').text
        print(f"Inactive FAQ {idx}:")
        print(f"Inactive FAQ Title: {faq_title}\n")
else:
    print('No inactive FAQ containers found.')

# Close the browser window
driver.quit()
