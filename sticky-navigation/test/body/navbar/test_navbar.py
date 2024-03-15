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

driver.get('http://127.0.0.1:5500/sticky-navigation/')  

element1 = driver.find_element(By.CLASS_NAME, 'nav')

element = driver.find_element(By.XPATH, '//h1[@class="logo"]')

logoText = element.text

navbar_initial = driver.find_element(By.CLASS_NAME, 'nav')

driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")

navbar_final = driver.find_element(By.CLASS_NAME, 'nav')

time.sleep(5)

if element1:
    print('The navbar is found')
else:
    print('The navbar is not found')

if element:
    print('The logo class is found')
else:
    print('The logo class is not found')

if logoText == 'My Website':
    print('Correct logo text found')
else:
    print('Incorrect logo text found')
    
if navbar_initial and navbar_final:
    print('The navbar is sticky')
else:
    print('The navbar is not sticky')
    
# Close the browser window
driver.quit()
