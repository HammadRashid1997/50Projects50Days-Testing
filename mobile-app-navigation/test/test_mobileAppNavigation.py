from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open the application
driver.get('http://127.0.0.1:5500/mobile-tab-navigation/index.html')

# Assert the body is visible
body = driver.find_element(By.TAG_NAME, 'body')
assert body.is_displayed(), "Body is not visible"

# Assert the color of the body is correct
body_color = body.value_of_css_property('background-color')
assert body_color == 'rgba(155, 89, 182, 0.7)', "Incorrect body color"

# Assert the mobile screen is visible
mobile_screen = driver.find_element(By.XPATH, '//div[@class="phone"]')
assert mobile_screen.is_displayed(), "Mobile screen is not visible"

# Assert the mobile screen has white border
mobile_screen_border = mobile_screen.value_of_css_property('border')
assert mobile_screen_border == '3px solid rgb(238, 238, 238)', "Incorrect mobile screen border color"

# Assert the home button is visible
home_button = driver.find_element(By.XPATH, '/html/body/div[1]/nav/ul/li[1]')
assert home_button.is_displayed(), "Home button is not visible"

# Assert the work button is visible
work_button = driver.find_element(By.XPATH, '/html/body/div[1]/nav/ul/li[2]')
assert work_button.is_displayed(), "Work button is not visible"

# Assert the blog button is visible
blog_button = driver.find_element(By.XPATH, '/html/body/div[1]/nav/ul/li[3]')
assert blog_button.is_displayed(), "Blog button is not visible"

# Assert the about us button is visible
about_us_button = driver.find_element(By.XPATH, '/html/body/div[1]/nav/ul/li[4]')
assert about_us_button.is_displayed(), "About Us button is not visible"

time.sleep(3)
# Close the browser window
driver.quit()
