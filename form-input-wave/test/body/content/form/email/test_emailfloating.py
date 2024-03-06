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
driver.get('http://127.0.0.1:5500/form-input-wave/')  

element = driver.find_element(By.XPATH, '/html/body/div[1]/form/div[1]/input')

# Click on the email input field to trigger the floating label effect
element.click()

# Optionally, wait for the animation to complete (adjust the time accordingly)
WebDriverWait(driver, 5).until(
    EC.invisibility_of_element_located((By.XPATH, '//div[@class="form-control"]//label[text()="Email"]/following-sibling::span'))
)

time.sleep(3)

# Close the browser window
driver.quit()
