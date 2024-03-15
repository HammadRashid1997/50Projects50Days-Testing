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

element = driver.find_element(By.XPATH, '//section[@class="container content"]/h3[text()="Content Two"]/following-sibling::p')

h3ptext = element.text
color = element.value_of_css_property('color')

time.sleep(5)

if element:
    print('h3 sibling found')
else:
    print('h3 sibling not found')
    
if h3ptext == 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?':
    print('h3 sibling text found')
else:
    print('h3 sibling text not found')
   
print(f'The color of the text is: {color}')

# Close the browser window
driver.quit()
