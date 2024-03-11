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

twitter_icon = driver.find_element(By.CLASS_NAME, 'fab.fa-twitter')

# Find the Twitter container element with data-target attribute
twitter_container = driver.find_element(By.XPATH, '//div[contains(@class, "counter-container")]//*[contains(text(), "Twitter Followers")]/preceding-sibling::div')

twitter_followers = twitter_container.get_attribute('data-target')

# Check if the Twitter icon is displayed
if twitter_icon.is_displayed():
    print('Twitter icon is displayed')
else:
    print('Twitter icon is not displayed')

# Check if the Twitter container exists
if twitter_container:
    print('Twitter container is present')
else:
    print('Twitter container is not present')
    
# Check if the twitter followers are being displayed that is 12000
if twitter_followers:
    print(f'The value of data-target is: {twitter_followers}')
else:
    print('Value not found')
    
time.sleep(5)

driver.quit()
