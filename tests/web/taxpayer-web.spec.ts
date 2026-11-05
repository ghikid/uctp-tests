// file: tests/web/taxpayer-web.spec.ts
import { test, expect, signIn } from '../../helpers/web';

function uniqueName() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `Ana ${rand} Dela Cruz`;
}

function uniqueMobile() {
  const digits = Math.floor(100000000 + Math.random() * 900000000);
  return `09${digits}`;
}

test('W1 · AC-1 · successfully create taxpayer via UI and check result message', async ({ page }) => {
  await signIn(page);
  await page.click('text=Training setup');
  const name = uniqueName();
  const mobile = uniqueMobile();
  await page.fill('input[name="full_name"], label:has-text("Full name") input, input:near(:text("Full name"))', name);
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('.result-box, text=created')).toContainText(`${name} created — mobile ${mobile}.`);
});

test('W2 · AC-2 · verify taxpayer details appear under My data My taxpayers', async ({ page }) => {
  await signIn(page);
  await page.click('text=Training setup');
  const name = uniqueName();
  const mobile = uniqueMobile();
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', name);
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  await page.click('button:has-text("Create taxpayer")');
  await page.click('text=My data');
  await page.click('text=My taxpayers');
  await expect(page.locator('body')).toContainText(name);
  await expect(page.locator('body')).toContainText(mobile);
});

test('W3 · AC-3 · spaces around name are trimmed in UI display', async ({ page }) => {
  await signIn(page);
  await page.click('text=Training setup');
  const mobile = uniqueMobile();
  const paddedName = '   Ana qwer Dela Cruz   ';
  const cleanName = 'Ana qwer Dela Cruz';
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', paddedName);
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('body')).toContainText(`${cleanName} created — mobile ${mobile}.`);
});

test('W4 · AC-4 · display error message when submitting duplicate mobile', async ({ page }) => {
  await signIn(page);
  await page.click('text=Training setup');
  const mobile = uniqueMobile();
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', uniqueName());
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('body')).toContainText('created');
  
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', uniqueName());
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('body')).toContainText('already registered for this tenant');
});

test('W5 · AC-5 · refuse name with 1 character with exact error message', async ({ page }) => {
  await signIn(page);
  await page.click('text=Training setup');
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', 'A');
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', uniqueMobile());
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('body')).toContain("2-100 characters: letters, spaces, . - ' and Ñ only");
});

test('W6 · AC-6 · create taxpayer successfully with optional valid email', async ({ page }) => {
  await signIn(page);
  await page.click('text=Training setup');
  const name = uniqueName();
  const mobile = uniqueMobile();
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', name);
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  await page.fill('input[name="email"], input:near(:text("Email"))', 'test@example.com');
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('body')).toContainText(`${name} created — mobile ${mobile}.`);
});

test('W7 · AC-6 · refuse invalid email format missing dot after at', async ({ page }) => {
  await signIn(page);
  await page.click('text=Training setup');
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', uniqueName());
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', uniqueMobile());
  await page.fill('input[name="email"], input:near(:text("Email"))', 'test@domain');
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('body')).toContainText('invalid email format');
});

test('W8 · AC-7 · check other name-tag shows empty list and fallback message', async ({ page }) => {
  await signIn(page, 'Manuel-8614-other');
  await page.click('text=My data');
  await page.click('text=My taxpayers');
  await expect(page.locator('body')).toContainText('None yet — create one in Training setup.');
});

test('W9 · AC-8 · refuse mobile number with spaces', async ({ page }) => {
  await signIn(page);
  await page.click('text=Training setup');
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', uniqueName());
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', '0912 345 678');
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('body')).toContainText('must be a PH mobile 09XXXXXXXXX or +639XXXXXXXXX');
});

