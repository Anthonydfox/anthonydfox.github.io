from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_portfolio(page: Page):
    # 1. Go to local server (preview port)
    page.goto("http://localhost:4173")

    # 2. Wait for content to load - use specific heading
    expect(page.get_by_role("heading", name="Anthony Fox")).to_be_visible()

    # 3. Check sections
    expect(page.get_by_text("Software Engineer | AI, Cybersecurity & Robotics")).to_be_visible()
    expect(page.get_by_role("heading", name="Experience")).to_be_visible()
    expect(page.get_by_role("heading", name="Leadership")).to_be_visible()
    expect(page.get_by_role("heading", name="Skills")).to_be_visible()

    # 4. Take desktop screenshot
    page.set_viewport_size({"width": 1280, "height": 800})
    time.sleep(1) # wait for any animations
    page.screenshot(path="/home/jules/verification/desktop_view.png", full_page=True)

    # 5. Take mobile screenshot (to check hamburger menu)
    page.set_viewport_size({"width": 375, "height": 667})
    time.sleep(1)

    # Check hamburger menu exists
    # The button has aria-label="Open main menu" or just verify the svg/button presence
    hamburger = page.locator("button[aria-controls='mobile-menu']")
    expect(hamburger).to_be_visible()

    page.screenshot(path="/home/jules/verification/mobile_view.png")

    # 6. Open mobile menu
    hamburger.click()
    time.sleep(0.5)
    expect(page.locator("#mobile-menu")).to_be_visible()
    page.screenshot(path="/home/jules/verification/mobile_menu_open.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_portfolio(page)
        finally:
            browser.close()
