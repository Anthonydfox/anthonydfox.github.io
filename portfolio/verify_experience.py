from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_experience(page: Page):
    page.goto("http://localhost:4173")

    # Scroll to Experience to trigger animation
    experience_heading = page.get_by_role("heading", name="Experience")
    experience_heading.scroll_into_view_if_needed()
    time.sleep(2) # Wait for animation
    expect(experience_heading).to_be_visible()

    # Take screenshot of just the viewport at this position
    page.screenshot(path="/home/jules/verification/experience_section.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})
        try:
            verify_experience(page)
        finally:
            browser.close()
