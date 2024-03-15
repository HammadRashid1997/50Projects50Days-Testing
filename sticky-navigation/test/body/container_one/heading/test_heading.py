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

driver.get('http://127.0.0.1:5500/sticky-navigation/')  

# Make the page wait so that the element is visible
element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//div[@class="hero"]/div[@class="container"]/h1[text()="Welcome To My Website"]'))
)

# element = driver.find_element(By.XPATH, '//div[@class="hero"]/div[@class="container"]/h1[text()="Welcome to My Website"]')

h1text = element.text

color = element.value_of_css_property('color')

time.sleep(5)

print(h1text)

if element:
    print('h1 found')
else:
    print('h1 not found')
    
if h1text == 'Welcome To My Website':
    print('Correct h1 text found')
else:
    print('Invalid h1 text found')
    
print(f'The color of the text is: {color}')

# Close the browser window
driver.quit()
