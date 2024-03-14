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

driver.get('http://127.0.0.1:5500/random-image-generator/index.html')  

element = driver.find_elements(By.XPATH, '/html/body/div[1]/img')

time.sleep(10)

# Check if there are exactly 15 image cards
assert len(element) == 15, "Expected 15 image cards, but found {}".format(len(element))

# Check visibility of each image card
for index, image_element in enumerate(element, 1):
    assert image_element.is_displayed(), "Image card {} is not visible.".format(index)

# Close the browser window
driver.quit()
