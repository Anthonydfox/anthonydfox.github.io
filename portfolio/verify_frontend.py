from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_portfolio(page: Page):
    # 1. Go to local server (preview port)
    page.goto("http://localhost:4173")

    # 2. Wait for content to load - use specific heading
    expect(page.get_by_role("heading", name="Anthony Fox")).to_be_visible()

    # 3. Check sections visibility
    expect(page.get_by_text("Software Engineer | AI, Cybersecurity & Robotics")).to_be_visible()

    # Scroll to Experience to trigger animation
    experience_heading = page.get_by_role("heading", name="Experience")
    experience_heading.scroll_into_view_if_needed()
    time.sleep(1) # Wait for animation
    expect(experience_heading).to_be_visible()

    # Scroll to Leadership
    leadership_heading = page.get_by_role("heading", name="Leadership")
    leadership_heading.scroll_into_view_if_needed()
    time.sleep(1)
    expect(leadership_heading).to_be_visible()

    # Scroll to Skills
    skills_heading = page.get_by_role("heading", name="Skills")
    skills_heading.scroll_into_view_if_needed()
    time.sleep(1)
    expect(skills_heading).to_be_visible()

    # 4. Take desktop screenshot
    page.goto("http://localhost:4173") # Reset to top
    page.set_viewport_size({"width": 1280, "height": 800})
    time.sleep(2) # wait for any animations
    page.screenshot(path="/home/jules/verification/desktop_apple_design.png", full_page=True)

    # 5. Take mobile screenshot
    page.set_viewport_size({"width": 375, "height": 667})
    time.sleep(1)

    # Check hamburger menu exists (Lucide icon might just be an SVG inside button)
    hamburger = page.locator("button[aria-controls='mobile-menu']")
    expect(hamburger).to_be_visible()

    page.screenshot(path="/home/jules/verification/mobile_apple_design.png")

    # 6. Open mobile menu
    hamburger.click()
    time.sleep(1) # Wait for animation
    expect(page.locator("#mobile-menu")).to_be_visible()
    page.screenshot(path="/home/jules/verification/mobile_menu_apple_design.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_portfolio(page)
        finally:
            browser.close()
