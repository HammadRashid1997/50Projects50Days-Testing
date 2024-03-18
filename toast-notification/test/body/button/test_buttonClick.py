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

# Initialise Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open the application
driver.get('http://127.0.0.1:5500/toast-notification/index.html')  

# Click the button to show notifications
driver.find_element(By.ID, 'button').click()

# Wait for toast messages to be displayed (adjust the timeout if needed)
wait = WebDriverWait(driver, 10)
toasts = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'toast')))

# Assert that toast messages are displayed
assert len(toasts) > 0, "No toast messages displayed."

# Assert that toast messages disappear after 10 seconds
toasts = driver.find_elements(By.CLASS_NAME, 'toast')
assert len(toasts) == 0, "Toast messages did not disappear after 10 seconds."

# Wait for the result (let's say for 3 seconds)
time.sleep(3)

# Close the browser window
driver.quit()
