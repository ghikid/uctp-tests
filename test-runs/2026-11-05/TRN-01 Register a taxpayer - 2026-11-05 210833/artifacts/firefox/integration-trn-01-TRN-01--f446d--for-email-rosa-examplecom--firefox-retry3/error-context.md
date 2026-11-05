# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: integration\trn-01.spec.ts >> TRN-01 Register a taxpayer (integration: API and screen) >> I3 · AC-5, AC-6, AC-8 · show the same message on the API and the screen for email "rosa@examplecom"
- Location: tests\integration\trn-01.spec.ts:52:9

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
  1   | // Card 01 · TRN-01 · Register a taxpayer · integration tests: the API and the screen agree
  2   | // From charters/card-01-charter.json, nodes with status "Integration": I1 to I6.
  3   | // Each test uses BOTH sides: it calls the API (api) and drives the screen (page), then compares them.
  4   | import { test, expect, signIn, newMobile, messageUnder, api, AS_PROBE, ME } from '../../helpers/web';
  5   | 
  6   | const URL = '/api/v1/training/taxpayers';
  7   | const DUP_MSG = 'already registered for this tenant';
  8   | 
  9   | test.describe('TRN-01 Register a taxpayer (integration: API and screen)', () => {
> 10  |   test.beforeEach(async ({ page }) => {
      |        ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  11  |     await signIn(page);
  12  |   });
  13  | 
  14  |   async function openForm(page) {
  15  |     await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Home' }).click();
  16  |     await page.getByRole('button', { name: 'Create my data' }).click();
  17  |     await expect(page.getByRole('heading', { name: '1 — Create a taxpayer' })).toBeVisible();
  18  |   }
  19  | 
  20  |   test('I1 · AC-1, AC-2 · create "Ana Dela Cruz" with the API, see it on the screen', async ({ page, request }) => {
  21  |     const mobile = newMobile();
  22  |     const made = await api(request, 'POST', URL, { full_name: 'Ana Dela Cruz', mobile, email: 'rosa@example.com' });
  23  |     expect(made.status, JSON.stringify(made.body)).toBe(201);
  24  | 
  25  |     await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'My data' }).click();
  26  |     const row = page.getByRole('row', { name: new RegExp(mobile) });
  27  |     await expect(row.getByRole('cell')).toHaveText(['Ana Dela Cruz', mobile, 'rosa@example.com']);
  28  |   });
  29  | 
  30  |   test('I2 · AC-1, AC-3 · create "  Rosa Web  " on the screen, read "Rosa Web" from the API', async ({ page, request }) => {
  31  |     const mobile = newMobile();
  32  |     await openForm(page);
  33  |     await page.getByLabel('Full name', { exact: true }).fill('  Rosa Web  ');
  34  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(mobile);
  35  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  36  |     await expect(page.getByText('created — mobile')).toBeVisible();
  37  | 
  38  |     const list = await api(request, 'GET', URL);
  39  |     const row = (list.body || []).find((r: any) => r.mobile === mobile);
  40  |     expect(row, 'the API list has a row with this mobile').toBeTruthy();
  41  |     expect({ full_name: row.full_name, email: row.email, created_by: row.created_by })
  42  |       .toEqual({ full_name: 'Rosa Web', email: null, created_by: ME });
  43  |   });
  44  | 
  45  |   // I3 · the same broken input, sent to the API and typed on the screen: the messages must be the same words.
  46  |   const cases = [
  47  |     { what: 'name "A"', field: 'full_name', label: 'Full name', input: { full_name: 'A' } },
  48  |     { what: 'mobile "0917-123-4567"', field: 'mobile', label: 'Mobile (09XXXXXXXXX)', input: { mobile: '0917-123-4567' } },
  49  |     { what: 'email "rosa@examplecom"', field: 'email', label: 'Email (optional)', input: { email: 'rosa@examplecom' } },
  50  |   ];
  51  |   for (const c of cases) {
  52  |     test(`I3 · AC-5, AC-6, AC-8 · show the same message on the API and the screen for ${c.what}`, async ({ page, request }) => {
  53  |       const body = { full_name: 'Ana Dela Cruz', mobile: newMobile(), ...c.input };
  54  |       const fromApi = await api(request, 'POST', URL, body);
  55  |       expect(fromApi.status).toBe(422);
  56  |       const apiMessage = fromApi.body?.detail?.[c.field];
  57  |       expect(apiMessage, 'the API names the field').toBeTruthy();
  58  | 
  59  |       await openForm(page);
  60  |       await page.getByLabel('Full name', { exact: true }).fill(body.full_name);
  61  |       await page.getByLabel('Mobile (09XXXXXXXXX)').fill(body.mobile);
  62  |       if (body.email) await page.getByLabel('Email (optional)').fill(body.email);
  63  |       await page.getByRole('button', { name: 'Create taxpayer' }).click();
  64  |       await expect(messageUnder(page, c.label)).toHaveText(apiMessage);
  65  |     });
  66  |   }
  67  | 
  68  |   test('I4 · AC-5, AC-8 · accept on the screen what the API accepts ("Ñoño O\'Brien-Cruz Jr.", +639 mobile)', async ({ page }) => {
  69  |     const nine = newMobile().slice(2);
  70  |     await openForm(page);
  71  |     await page.getByLabel('Full name', { exact: true }).fill("Ñoño O'Brien-Cruz Jr.");
  72  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(`+639${nine}`);
  73  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  74  |     await expect(page.getByText('created — mobile')).toContainText(`Ñoño O'Brien-Cruz Jr. created — mobile 09${nine}.`);
  75  |   });
  76  | 
  77  |   test('I5 · AC-4 · refuse on the screen a mobile the API registered', async ({ page, request }) => {
  78  |     const mobile = newMobile();
  79  |     const made = await api(request, 'POST', URL, { full_name: 'Ana Dela Cruz', mobile });
  80  |     expect(made.status, JSON.stringify(made.body)).toBe(201);
  81  | 
  82  |     await openForm(page);
  83  |     await page.getByLabel('Full name', { exact: true }).fill('Ben Dela Cruz');
  84  |     await page.getByLabel('Mobile (09XXXXXXXXX)').fill(mobile);
  85  |     await page.getByRole('button', { name: 'Create taxpayer' }).click();
  86  |     await expect(messageUnder(page, 'Mobile (09XXXXXXXXX)')).toHaveText(DUP_MSG);
  87  |   });
  88  | 
  89  |   test('I6 · AC-7 · use the same name-tag on the screen and the API (a probe user\'s taxpayer stays hidden)', async ({ page, request }) => {
  90  |     const theirs = newMobile();
  91  |     const mine = newMobile();
  92  |     const made = await api(request, 'POST', URL, { full_name: 'Ana Dela Cruz', mobile: theirs }, AS_PROBE);
  93  |     expect(made.status, JSON.stringify(made.body)).toBe(201);
  94  |     const own = await api(request, 'POST', URL, { full_name: 'Ana Dela Cruz', mobile: mine });
  95  |     expect(own.status, JSON.stringify(own.body)).toBe(201);
  96  | 
  97  |     const nav = page.getByRole('navigation', { name: 'Main' });
  98  |     await nav.getByRole('link', { name: 'My data' }).click();
  99  |     await expect(page.getByRole('row', { name: new RegExp(mine) })).toBeVisible();      // the list has loaded
  100 |     await expect(page.getByRole('row', { name: new RegExp(theirs) })).toHaveCount(0);   // the other user's is not in it
  101 |   });
  102 | });
  103 | 
```