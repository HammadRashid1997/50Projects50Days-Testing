from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

# Define Chrome WebDriver options
chrome_options = Options()
# chrome_options.add_argument("--headless")  # Run headless if needed
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open Google
driver.get('http://127.0.0.1:5500/incrementing-counter/')

facebook_icon = driver.find_element(By.CLASS_NAME, 'fab.fa-facebook')

# Find the Twitter container element with data-target attribute
facebook_container = driver.find_element(By.XPATH, '//div[contains(@class, "counter-container")]//*[contains(text(), "Facebook Fans")]/preceding-sibling::div')

facebook_followers = facebook_container.get_attribute('data-target')

if facebook_icon.is_displayed():
    print('Facebook icon is displayed')
else:
    print('Facebook icon is not displayed')

if facebook_container:
    print('Facebook container is present')
else:
    print('Facebook container is not present')
    
if facebook_followers:
    print(f'The value of data-target is: {facebook_followers}')
else:
    print('Value not found')
    
time.sleep(5)

driver.quit()
