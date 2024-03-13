from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open the URL in the browser
driver.get('http://127.0.0.1:5500/pokedex/')  

# Wait for the elements to be present
elements = WebDriverWait(driver, 30).until(
    EC.presence_of_all_elements_located((By.CSS_SELECTOR, '.poke-container .pokemon'))
)

# Scroll to the bottom of the page to load more content
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

# Wait for a short period to allow additional content to load if needed
time.sleep(30)

# Retrieve the updated elements after scrolling
elements = driver.find_elements(By.CSS_SELECTOR, '.poke-container .pokemon')

assert len(elements) == 150, f"The pokemon container does not have 150 pokemons, found {len(elements)} instead."

print('The count of cards found is:', len(elements))
driver.quit()
