# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\taxpayer-web.spec.ts >> W1 · AC-1 · successfully create taxpayer via UI and check result message
- Location: tests\web\taxpayer-web.spec.ts:18:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: .result-box, text=created
Expected substring: "Ana opsy Dela Cruz created — mobile 09628181388."
Error: Unexpected token "=" while parsing css selector ".result-box, text=created". Did you mean to CSS.escape it?

Call log:
  - Expect "toContainText" .result-box, text=created with timeout 5000ms
  - waiting for .result-box, text=created

```

# Test source

```ts
  1   | // file: tests/web/taxpayer-web.spec.ts
  2   | import { test, expect, signIn } from '../../helpers/web';
  3   | 
  4   | function uniqueName() {
  5   |   const chars = 'abcdefghijklmnopqrstuvwxyz';
  6   |   let rand = '';
  7   |   for (let i = 0; i < 4; i++) {
  8   |     rand += chars.charAt(Math.floor(Math.random() * chars.length));
  9   |   }
  10  |   return `Ana ${rand} Dela Cruz`;
  11  | }
  12  | 
  13  | function uniqueMobile() {
  14  |   const digits = Math.floor(100000000 + Math.random() * 900000000);
  15  |   return `09${digits}`;
  16  | }
  17  | 
  18  | test('W1 · AC-1 · successfully create taxpayer via UI and check result message', async ({ page }) => {
  19  |   await signIn(page);
  20  |   await page.click('text=Training setup');
  21  |   const name = uniqueName();
  22  |   const mobile = uniqueMobile();
  23  |   await page.fill('input[name="full_name"], label:has-text("Full name") input, input:near(:text("Full name"))', name);
  24  |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  25  |   await page.click('button:has-text("Create taxpayer")');
> 26  |   await expect(page.locator('.result-box, text=created')).toContainText(`${name} created — mobile ${mobile}.`);
      |                                                           ^ Error: expect(locator).toContainText(expected) failed
  27  | });
  28  | 
  29  | test('W2 · AC-2 · verify taxpayer details appear under My data My taxpayers', async ({ page }) => {
  30  |   await signIn(page);
  31  |   await page.click('text=Training setup');
  32  |   const name = uniqueName();
  33  |   const mobile = uniqueMobile();
  34  |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', name);
  35  |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  36  |   await page.click('button:has-text("Create taxpayer")');
  37  |   await page.click('text=My data');
  38  |   await page.click('text=My taxpayers');
  39  |   await expect(page.locator('body')).toContainText(name);
  40  |   await expect(page.locator('body')).toContainText(mobile);
  41  | });
  42  | 
  43  | test('W3 · AC-3 · spaces around name are trimmed in UI display', async ({ page }) => {
  44  |   await signIn(page);
  45  |   await page.click('text=Training setup');
  46  |   const mobile = uniqueMobile();
  47  |   const paddedName = '   Ana qwer Dela Cruz   ';
  48  |   const cleanName = 'Ana qwer Dela Cruz';
  49  |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', paddedName);
  50  |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  51  |   await page.click('button:has-text("Create taxpayer")');
  52  |   await expect(page.locator('body')).toContainText(`${cleanName} created — mobile ${mobile}.`);
  53  | });
  54  | 
  55  | test('W4 · AC-4 · display error message when submitting duplicate mobile', async ({ page }) => {
  56  |   await signIn(page);
  57  |   await page.click('text=Training setup');
  58  |   const mobile = uniqueMobile();
  59  |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', uniqueName());
  60  |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  61  |   await page.click('button:has-text("Create taxpayer")');
  62  |   await expect(page.locator('body')).toContainText('created');
  63  |   
  64  |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', uniqueName());
  65  |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  66  |   await page.click('button:has-text("Create taxpayer")');
  67  |   await expect(page.locator('body')).toContainText('already registered for this tenant');
  68  | });
  69  | 
  70  | test('W5 · AC-5 · refuse name with 1 character with exact error message', async ({ page }) => {
  71  |   await signIn(page);
  72  |   await page.click('text=Training setup');
  73  |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', 'A');
  74  |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', uniqueMobile());
  75  |   await page.click('button:has-text("Create taxpayer")');
  76  |   await expect(page.locator('body')).toContain("2-100 characters: letters, spaces, . - ' and Ñ only");
  77  | });
  78  | 
  79  | test('W6 · AC-6 · create taxpayer successfully with optional valid email', async ({ page }) => {
  80  |   await signIn(page);
  81  |   await page.click('text=Training setup');
  82  |   const name = uniqueName();
  83  |   const mobile = uniqueMobile();
  84  |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', name);
  85  |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  86  |   await page.fill('input[name="email"], input:near(:text("Email"))', 'test@example.com');
  87  |   await page.click('button:has-text("Create taxpayer")');
  88  |   await expect(page.locator('body')).toContainText(`${name} created — mobile ${mobile}.`);
  89  | });
  90  | 
  91  | test('W7 · AC-6 · refuse invalid email format missing dot after at', async ({ page }) => {
  92  |   await signIn(page);
  93  |   await page.click('text=Training setup');
  94  |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', uniqueName());
  95  |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', uniqueMobile());
  96  |   await page.fill('input[name="email"], input:near(:text("Email"))', 'test@domain');
  97  |   await page.click('button:has-text("Create taxpayer")');
  98  |   await expect(page.locator('body')).toContainText('invalid email format');
  99  | });
  100 | 
  101 | test('W8 · AC-7 · check other name-tag shows empty list and fallback message', async ({ page }) => {
  102 |   await signIn(page, 'Manuel-8614-other');
  103 |   await page.click('text=My data');
  104 |   await page.click('text=My taxpayers');
  105 |   await expect(page.locator('body')).toContainText('None yet — create one in Training setup.');
  106 | });
  107 | 
  108 | test('W9 · AC-8 · refuse mobile number with spaces', async ({ page }) => {
  109 |   await signIn(page);
  110 |   await page.click('text=Training setup');
  111 |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', uniqueName());
  112 |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', '0912 345 678');
  113 |   await page.click('button:has-text("Create taxpayer")');
  114 |   await expect(page.locator('body')).toContainText('must be a PH mobile 09XXXXXXXXX or +639XXXXXXXXX');
  115 | });
  116 | 
  117 | 
```