# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\trn-01.spec.ts >> TRN-01 Register a taxpayer (web) >> W3 · AC-2 · see the new taxpayer "Ana Dela Cruz" in My data
- Location: tests\web\trn-01.spec.ts:33:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - note [ref=f1e2]: TRAINING — made-up data only
  - navigation "Main" [ref=f1e3]:
    - link "UCTP" [ref=f1e4] [cursor=pointer]:
      - /url: /
    - generic [ref=f1e5]:
      - link "Home" [ref=f1e6] [cursor=pointer]:
        - /url: /
      - link "Training setup" [ref=f1e7] [cursor=pointer]:
        - /url: /training
      - link "Teller POS" [ref=f1e8] [cursor=pointer]:
        - /url: /pos
      - link "Citizen portal" [ref=f1e9] [cursor=pointer]:
        - /url: /portal
      - link "Simulator" [ref=f1e10] [cursor=pointer]:
        - /url: /simulator
      - link "My data" [ref=f1e11] [cursor=pointer]:
        - /url: /my-data
      - link "API docs" [ref=f1e12] [cursor=pointer]:
        - /url: /docs
    - generic [ref=f1e14]:
      - text: not identified —
      - link "set your name" [ref=f1e15] [cursor=pointer]:
        - /url: "#"
  - dialog "Your name" [ref=f1e17]:
    - heading "Your name" [level=2] [ref=f1e18]
    - paragraph [ref=f1e19]:
      - text: Used to label your training data. 2–60 characters. Type
      - code [ref=f1e20]: Name-1234
      - text: to continue your existing data from another browser.
    - textbox "e.g. Ana" [ref=f1e21]: Manuel-8614
    - button "Save" [active] [ref=f1e22] [cursor=pointer]
  - main [ref=f1e23]:
    - heading "Unified City Treasury Platform — Tagaytay pilot" [level=1] [ref=f1e24]
    - paragraph [ref=f1e25]: Every flow starts here. Pick a role; each screen hands off to the next step.
    - generic [ref=f1e26]:
      - generic [ref=f1e27]:
        - heading "Training setup" [level=2] [ref=f1e28]
        - paragraph [ref=f1e29]: Create the taxpayers, bills, and teller booklets you will use in class.
        - link [ref=f1e30] [cursor=pointer]:
          - /url: /training
          - button "Create my data" [ref=f1e31]
      - generic [ref=f1e32]:
        - 'heading "Teller: POS" [level=2] [ref=f1e33]'
        - paragraph [ref=f1e34]: Counter cashiering — load an Order of Payment, tender cash or cheque, print the OR.
        - link [ref=f1e35] [cursor=pointer]:
          - /url: /pos
          - button "Open POS" [ref=f1e36]
      - generic [ref=f1e37]:
        - 'heading "Citizen: portal" [level=2] [ref=f1e38]'
        - paragraph [ref=f1e39]: Taxpayer self-service — look up what you owe and pay online.
        - link [ref=f1e40] [cursor=pointer]:
          - /url: /portal
          - button "Open portal" [ref=f1e41]
      - generic [ref=f1e42]:
        - 'heading "Bank: settlement simulator" [level=2] [ref=f1e43]'
        - paragraph [ref=f1e44]: Training tool that drives the real settlement endpoints with a simulated bank reference.
        - link [ref=f1e45] [cursor=pointer]:
          - /url: /simulator
          - button "Open simulator" [ref=f1e46]
      - generic [ref=f1e47]:
        - heading "My data" [level=2] [ref=f1e48]
        - paragraph [ref=f1e49]: Everything you created — taxpayers, bills, tellers, receipts — and the next action for each.
        - link [ref=f1e50] [cursor=pointer]:
          - /url: /my-data
          - button "See my data" [ref=f1e51]
      - generic [ref=f1e52]:
        - heading "API docs" [level=2] [ref=f1e53]
        - paragraph [ref=f1e54]: OpenAPI / Swagger reference for every endpoint in the platform.
        - link [ref=f1e55] [cursor=pointer]:
          - /url: /docs
          - button "Open API docs" [ref=f1e56]
```

# Test source

```ts
  1   | // Card 01 · TRN-01 · Register a taxpayer · web tests (the same story, on the screen)
  2   | // From charters/card-01-charter.json, nodes with status "UI journey": W1 to W9.
  3   | import { test, expect, signIn, newMobile, messageUnder } from '../../helpers/web';
  4   | 
  5   | const NAME_MSG = "2-100 characters: letters, spaces, . - ' and Ñ only";
  6   | const MOBILE_MSG = 'must be a PH mobile 09XXXXXXXXX or +639XXXXXXXXX';
  7   | const EMAIL_MSG = 'invalid email format';
  8   | const DUP_MSG = 'already registered for this tenant';
  9   | 
  10  | test.describe('TRN-01 Register a taxpayer (web)', () => {
> 11  |   test.beforeEach(async ({ page }) => {
      |        ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  12  |     await signIn(page);
  13  |     await page.getByRole('button', { name: 'Create my data' }).click();   // Home › Create my data
  14  |     await expect(page.getByRole('heading', { name: '1 — Create a taxpayer' })).toBeVisible();
  15  |   });
  16  | 
  17  |   test('W1 · AC-1 · open the Create a taxpayer form: all boxes empty, no result box', async ({ page }) => {
  18  |     await expect(page.getByLabel('Full name', { exact: true })).toHaveValue('');
  19  |     await expect(page.getByLabel('Mobile (09XXXXXXXXX)')).toHaveValue('');
  20  |     await expect(page.getByLabel('Email (optional)')).toHaveValue('');
  21  |     await expect(page.getByRole('button', { name: 'Create taxpayer' })).toBeVisible();
  22  |     await expect(page.getByText('created — mobile')).toBeHidden();      // no result box
  23  |   });
  24  | 
  25  |   test('W2 · AC-1 · create a taxpayer on the screen using "Ana Dela Cruz" and a new mobile', async ({ page }) => {
  26  |     const mobile = newMobile();
  27  |     await page.getByLabel('Full name', { exact: true }).fill('Ana Dela Cruz');
  28  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(mobile);
  29  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  30  |     await expect(page.getByText('created — mobile')).toContainText(`Ana Dela Cruz created — mobile ${mobile}.`);
  31  |   });
  32  | 
  33  |   test('W3 · AC-2 · see the new taxpayer "Ana Dela Cruz" in My data', async ({ page }) => {
  34  |     const mobile = newMobile();
  35  |     await page.getByLabel('Full name', { exact: true }).fill('Ana Dela Cruz');
  36  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(mobile);
  37  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  38  |     await expect(page.getByText('created — mobile')).toBeVisible();
  39  | 
  40  |     await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'My data' }).click();
  41  |     const row = page.getByRole('row', { name: new RegExp(mobile) });
  42  |     await expect(row.getByRole('cell')).toHaveText(['Ana Dela Cruz', mobile, '—']);
  43  |   });
  44  | 
  45  |   test('W4 · AC-3 · create a taxpayer using "  Rosa Web  ": shown as "Rosa Web"', async ({ page }) => {
  46  |     const mobile = newMobile();
  47  |     await page.getByLabel('Full name', { exact: true }).fill('  Rosa Web  ');
  48  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(mobile);
  49  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  50  |     await expect(page.getByText('created — mobile')).toContainText(`Rosa Web created — mobile ${mobile}.`);
  51  | 
  52  |     await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'My data' }).click();
  53  |     await expect(page.getByRole('row', { name: new RegExp(mobile) }).getByRole('cell').first()).toHaveText('Rosa Web');
  54  |   });
  55  | 
  56  |   test('W5 · AC-4 · refuse the same mobile twice on the screen ("Ben Dela Cruz" after "Ana Dela Cruz")', async ({ page }) => {
  57  |     const mobile = newMobile();
  58  |     await page.getByLabel('Full name', { exact: true }).fill('Ana Dela Cruz');
  59  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(mobile);
  60  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  61  |     await expect(page.getByText('created — mobile')).toBeVisible();
  62  | 
  63  |     await page.reload();                                                 // a clean form
  64  |     await page.getByLabel('Full name', { exact: true }).fill('Ben Dela Cruz');
  65  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(mobile);
  66  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  67  |     await expect(messageUnder(page, 'Mobile (09XXXXXXXXX)')).toHaveText(DUP_MSG);
  68  |   });
  69  | 
  70  |   test('W6 · AC-5 · refuse the full name "A" (1 letter) on the screen', async ({ page }) => {
  71  |     await page.getByLabel('Full name', { exact: true }).fill('A');
  72  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(newMobile());
  73  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  74  |     await expect(messageUnder(page, 'Full name')).toHaveText(NAME_MSG);
  75  |     await expect(page.getByText('created — mobile')).toBeHidden();
  76  |   });
  77  | 
  78  |   test('W7 · AC-6 · refuse the email "rosa@examplecom" (no dot after @) on the screen', async ({ page }) => {
  79  |     await page.getByLabel('Full name', { exact: true }).fill('Ana Dela Cruz');
  80  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(newMobile());
  81  |     await page.getByLabel('Email (optional)').fill('rosa@examplecom');
  82  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  83  |     await expect(messageUnder(page, 'Email (optional)')).toHaveText(EMAIL_MSG);
  84  |     await expect(page.getByText('created — mobile')).toBeHidden();
  85  |   });
  86  | 
  87  |   test('W8 · AC-8 · refuse the mobile 0917-123-4567 (dashes) on the screen', async ({ page }) => {
  88  |     await page.getByLabel('Full name', { exact: true }).fill('Ana Dela Cruz');
  89  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill('0917-123-4567');
  90  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  91  |     await expect(messageUnder(page, 'Mobile (09XXXXXXXXX)')).toHaveText(MOBILE_MSG);
  92  |     await expect(page.getByText('created — mobile')).toBeHidden();
  93  |   });
  94  | 
  95  |   test('W9 · AC-7 · show nothing to another name-tag ("Probe") in My data', async ({ page }) => {
  96  |     const nav = page.getByRole('navigation', { name: 'Main' });
  97  |     await nav.getByRole('link', { name: 'Change' }).click();
  98  |     const dialog = page.getByRole('dialog', { name: 'Your name' });
  99  |     await dialog.getByRole('textbox').fill('Probe');                    // a new name gets new digits
  100 |     await Promise.all([page.waitForEvent('load'), dialog.getByRole('button', { name: 'Save' }).click()]);
  101 |     await expect(nav).toContainText('You are: Probe-');
  102 | 
  103 |     await nav.getByRole('link', { name: 'My data' }).click();
  104 |     await expect(page.getByText('None yet — create one in Training setup.').first()).toBeVisible();
  105 |   });
  106 | });
  107 | 
```