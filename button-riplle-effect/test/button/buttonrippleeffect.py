from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get('http://127.0.0.1:5500/button-ripple-effect/') 

element = driver.find_element(By.CLASS_NAME, 'ripple').click()

# Wait for the circle element to appear (up to 10 seconds)
try:
    circle_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'circle'))
    )
    print("Ripple effect observed")
except:
    print("Ripple effect not observed within the timeout")
    
# Close the browser window
driver.quit()