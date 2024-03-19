from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open the application
driver.get('http://127.0.0.1:5500/auto-text-effect/index.html')

# Wait for the screen to be visible
WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.CSS_SELECTOR, 'body'))
)

# Verify the background color
body = driver.find_element(By.CSS_SELECTOR, 'body')
background_color = body.value_of_css_property('background-color')
assert background_color == 'rgb(233, 150, 122)', "Background color is incorrect"

# Verify the text in the header
text_header = driver.find_element(By.CSS_SELECTOR, 'h1#text')
assert text_header.text == 'We Love Programming!', "Text in header is incorrect"

# Verify the speed icon and label
speed_label = driver.find_element(By.XPATH, '/html/body/div[1]/label')
assert speed_label.text == 'Speed:', "Speed label is incorrect"

# Close the browser window
driver.quit()
