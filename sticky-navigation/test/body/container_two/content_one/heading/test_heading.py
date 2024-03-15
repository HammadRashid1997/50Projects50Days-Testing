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


element = driver.find_element(By.XPATH, '//section[@class="container content"]/h2[text()="Content One"]')

h2text = element.text
color = element.value_of_css_property('color')

time.sleep(5)

if element:
    print('h2 found')
else:
    print('h2 not found')
   
if h2text == 'Content One':
    print('h2 correct text found')
else:
    print('h2 correct text not found')
     
print(f'The color of the text is: {color}')

# Close the browser window
driver.quit()
