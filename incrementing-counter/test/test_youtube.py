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

youtube_icon = driver.find_element(By.CLASS_NAME, 'fab.fa-youtube')

# Find the Twitter container element with data-target attribute
youtube_container = driver.find_element(By.XPATH, '//div[contains(@class, "counter-container")]//*[contains(text(), "YouTube Subscribers")]/preceding-sibling::div')

youtube_followers = youtube_container.get_attribute('data-target')

if youtube_icon.is_displayed():
    print('Youtube icon is displayed')
else:
    print('Youtube icon is not displayed')

if youtube_container:
    print('Youtube container is present')
else:
    print('Youtube container is not present')
    
# Check if the twitter followers are being displayed that is 12000
if youtube_followers:
    print(f'The value of data-target is: {youtube_followers}')
else:
    print('Value not found')
    
time.sleep(5)

driver.quit()
