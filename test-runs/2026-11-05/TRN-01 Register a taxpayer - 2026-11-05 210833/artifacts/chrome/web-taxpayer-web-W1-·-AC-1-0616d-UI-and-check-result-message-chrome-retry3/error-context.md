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
Expected substring: "Ana xiwe Dela Cruz created — mobile 09463614193."
Error: Unexpected token "=" while parsing css selector ".result-box, text=created". Did you mean to CSS.escape it?

Call log:
  - Expect "toContainText" .result-box, text=created with timeout 5000ms
  - waiting for .result-box, text=created

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - note [ref=e2]: TRAINING — made-up data only
  - navigation "Main" [ref=e3]:
    - link "UCTP" [ref=e4] [cursor=pointer]:
      - /url: /
    - generic [ref=e5]:
      - link "Home" [ref=e6] [cursor=pointer]:
        - /url: /
      - link "Training setup" [ref=e7] [cursor=pointer]:
        - /url: /training
      - link "Teller POS" [ref=e8] [cursor=pointer]:
        - /url: /pos
      - link "Citizen portal" [ref=e9] [cursor=pointer]:
        - /url: /portal
      - link "Simulator" [ref=e10] [cursor=pointer]:
        - /url: /simulator
      - link "My data" [ref=e11] [cursor=pointer]:
        - /url: /my-data
      - link "API docs" [ref=e12] [cursor=pointer]:
        - /url: /docs
    - generic [ref=e14]:
      - text: "You are:"
      - strong [ref=e15]: Manuel-8614
      - link "Change" [ref=e16] [cursor=pointer]:
        - /url: "#"
  - main [ref=e17]:
    - generic [ref=e18]:
      - heading "Training setup" [level=1] [ref=e19]
      - paragraph [ref=e20]: Create the data you will use in class — everything here is fictional and yours only.
      - generic [ref=e21]:
        - heading "1 — Create a taxpayer" [level=2] [ref=e22]
        - generic [ref=e23]:
          - generic [ref=e24]: Full name
          - textbox "Full name" [ref=e25]: "09672172344"
          - generic [ref=e26]: "2-100 characters: letters, spaces, . - ' and Ñ only"
        - generic [ref=e27]:
          - generic [ref=e28]: Mobile (09XXXXXXXXX)
          - textbox "Mobile (09XXXXXXXXX)" [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]: Email (optional)
          - textbox "Email (optional)" [ref=e32]
        - button "Create taxpayer" [active] [ref=e33] [cursor=pointer]
      - generic [ref=e34]:
        - heading "2 — Create a property tax bill" [level=2] [ref=e35]
        - generic [ref=e36]:
          - generic [ref=e37]: Taxpayer (only yours are listed)
          - combobox "Taxpayer (only yours are listed)" [ref=e38]:
            - option "— pick a taxpayer —" [selected]
            - option "Rosa Web (09841708922)"
            - option "Ana Dela Cruz (09841649471)"
            - option "Ana jufn Dela Cruz (09315080470)"
            - option "Ana Dela Cruz (09841289703)"
            - option "Ana Dela Cruz (09841265222)"
            - option "Ana Dela Cruz (09841247081)"
            - option "Ana nifm Dela Cruz (09478210660)"
            - option "Ana abcd Dela Cruz (09922231547)"
            - option "Ana amyb Dela Cruz (09613263497)"
            - option "Ana gkey Dela Cruz (09216951246)"
            - option "Ana Dela Cruz (09802246073)"
            - option "Rosa Web (09802217472)"
            - option "Ana Dela Cruz (09802186951)"
            - option "Ana Dela Cruz (09802144680)"
            - option "Ana Dela Cruz (09802092599)"
            - option "Ana Dela Cruz (09802056137)"
            - option "Ñoño O'Brien-Cruz Jr. (09802025976)"
            - option "Ana Dela Cruz (09802033974)"
            - option "Rosa Web (09802008563)"
            - option "Ana Dela Cruz (09802001589)"
            - option "Ana Dela Cruz (09801982242)"
            - option "Ana Dela Cruz (09801976217)"
            - option "Ñoño O'Brien-Cruz Jr. (09801953556)"
            - option "Ana Dela Cruz (09801957481)"
            - option "Rosa Web (09801887402)"
            - option "Rosa Web (09801852412)"
            - option "Ana Dela Cruz (09801854411)"
            - option "Ana Dela Cruz (09801819171)"
            - option "Ana Dela Cruz (09801771481)"
            - option "Ana Dela Cruz (09801713810)"
            - option "Ana Dela Cruz (09801711019)"
            - option "Ana Dela Cruz (09801708428)"
            - option "Ana Dela Cruz (09801701297)"
            - option "Ñoño O'Brien-Cruz Jr. (09801694166)"
            - option "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)"
            - option "Al (09801684534)"
            - option "Ana Dela Cruz (09801677533)"
            - option "Ana Dela Cruz (09801660222)"
            - option "Ana Dela Cruz (09801652181)"
            - option "ming gozun (09201234568)"
            - option "Manuel P. Minton Jr. (09217439423)"
            - option "Ana Dela Cruz (09052498706)"
            - option "Ana Dela Cruz (09051307259)"
            - option "Ana Dela Cruz (09051204493)"
            - option "Ana Dela Cruz (09051229316)"
            - option "Ana Dela Cruz (09039621745)"
            - option "Ana Dela Cruz (09038978447)"
        - generic [ref=e39]:
          - generic [ref=e40]: PIN (NNN-NN-NNN-NNN-NNN)
          - textbox "PIN (NNN-NN-NNN-NNN-NNN)" [ref=e41]
        - generic [ref=e42]:
          - generic [ref=e43]: Property class
          - combobox "Property class" [ref=e44]:
            - option "RESIDENTIAL" [selected]
            - option "COMMERCIAL"
            - option "AGRICULTURAL"
            - option "INDUSTRIAL"
        - generic [ref=e45]:
          - generic [ref=e46]: Assessed value (₱)
          - textbox "Assessed value (₱)" [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]: Tax year
          - textbox "Tax year" [ref=e50]: "2026"
        - button "Create property tax bill" [ref=e51] [cursor=pointer]
      - generic [ref=e52]:
        - heading "3 — Create a business tax or fee bill" [level=2] [ref=e53]
        - generic [ref=e54]:
          - generic [ref=e55]: Taxpayer (only yours are listed)
          - combobox "Taxpayer (only yours are listed)" [ref=e56]:
            - option "— pick a taxpayer —" [selected]
            - option "Rosa Web (09841708922)"
            - option "Ana Dela Cruz (09841649471)"
            - option "Ana jufn Dela Cruz (09315080470)"
            - option "Ana Dela Cruz (09841289703)"
            - option "Ana Dela Cruz (09841265222)"
            - option "Ana Dela Cruz (09841247081)"
            - option "Ana nifm Dela Cruz (09478210660)"
            - option "Ana abcd Dela Cruz (09922231547)"
            - option "Ana amyb Dela Cruz (09613263497)"
            - option "Ana gkey Dela Cruz (09216951246)"
            - option "Ana Dela Cruz (09802246073)"
            - option "Rosa Web (09802217472)"
            - option "Ana Dela Cruz (09802186951)"
            - option "Ana Dela Cruz (09802144680)"
            - option "Ana Dela Cruz (09802092599)"
            - option "Ana Dela Cruz (09802056137)"
            - option "Ñoño O'Brien-Cruz Jr. (09802025976)"
            - option "Ana Dela Cruz (09802033974)"
            - option "Rosa Web (09802008563)"
            - option "Ana Dela Cruz (09802001589)"
            - option "Ana Dela Cruz (09801982242)"
            - option "Ana Dela Cruz (09801976217)"
            - option "Ñoño O'Brien-Cruz Jr. (09801953556)"
            - option "Ana Dela Cruz (09801957481)"
            - option "Rosa Web (09801887402)"
            - option "Rosa Web (09801852412)"
            - option "Ana Dela Cruz (09801854411)"
            - option "Ana Dela Cruz (09801819171)"
            - option "Ana Dela Cruz (09801771481)"
            - option "Ana Dela Cruz (09801713810)"
            - option "Ana Dela Cruz (09801711019)"
            - option "Ana Dela Cruz (09801708428)"
            - option "Ana Dela Cruz (09801701297)"
            - option "Ñoño O'Brien-Cruz Jr. (09801694166)"
            - option "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)"
            - option "Al (09801684534)"
            - option "Ana Dela Cruz (09801677533)"
            - option "Ana Dela Cruz (09801660222)"
            - option "Ana Dela Cruz (09801652181)"
            - option "ming gozun (09201234568)"
            - option "Manuel P. Minton Jr. (09217439423)"
            - option "Ana Dela Cruz (09052498706)"
            - option "Ana Dela Cruz (09051307259)"
            - option "Ana Dela Cruz (09051204493)"
            - option "Ana Dela Cruz (09051229316)"
            - option "Ana Dela Cruz (09039621745)"
            - option "Ana Dela Cruz (09038978447)"
        - generic [ref=e57]:
          - generic [ref=e58]: Type
          - combobox "Type" [ref=e59]:
            - option "BUSINESS" [selected]
            - option "FEE"
        - generic [ref=e60]:
          - generic [ref=e61]: Reference
          - textbox "Reference" [ref=e62]
        - generic [ref=e63]:
          - generic [ref=e64]: Description
          - textbox "Description" [ref=e65]
        - generic [ref=e66]:
          - generic [ref=e67]: Amount (₱)
          - textbox "Amount (₱)" [ref=e68]
        - generic [ref=e69]:
          - generic [ref=e70]: Due date
          - textbox "Due date" [ref=e71]:
            - /placeholder: YYYY-MM-DD
        - button "Create bill" [ref=e72] [cursor=pointer]
      - generic [ref=e73]:
        - heading "4 — Create my teller" [level=2] [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]: Display name
          - textbox "Display name" [ref=e77]
        - button "Create my teller" [ref=e78] [cursor=pointer]
      - generic [ref=e79]:
        - heading "5 — Create my approver" [level=2] [ref=e80]
        - paragraph [ref=e81]: Your own City Treasurer for approving or rejecting void requests on receipts your tellers issued. One per student — clicking again shows the one you have.
        - generic [ref=e82]:
          - generic [ref=e83]: Display name (optional)
          - textbox "Display name (optional)" [ref=e84]
        - button "Create my approver" [ref=e85] [cursor=pointer]
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