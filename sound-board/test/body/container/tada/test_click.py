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
driver.get('http://127.0.0.1:5500/sound-board/index.html')

element = driver.find_element(By.XPATH, '/html/body/div[1]/button[4]')  

# Click the element
element.click()

# Wait for the audio to start playing (adjust the timeout if needed)
wait = WebDriverWait(driver, 10)
audio_playing = wait.until(EC.presence_of_element_located((By.XPATH, '//audio[@id="tada"]')))

time.sleep(3)

# Check if the audio is playing
if audio_playing:
    print('Audio is playing')
else:
    print('Audio is not playing')

# Close the browser window
driver.quit()
