from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains

# Define Chrome WebDriver options
chrome_options = Options()
# chrome_options.add_argument("--headless")  # Run headless if needed
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get('http://127.0.0.1:5500/double-click-heart')

element = driver.find_element(By.CLASS_NAME, 'loveMe')
span_element = driver.find_element(By.TAG_NAME, 'span')

initial_value = 0

for i in range(0, 10, 1):
    
    initial_value = span_element.text

    action = ActionChains(driver)
    action.double_click(element).perform()

if span_element != initial_value:
    print(f'Like has been incremented. The value of likes is {span_element.text}')
else:
    print('Not incremented.')

time.sleep(3)

driver.quit()
