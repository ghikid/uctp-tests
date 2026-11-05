# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\taxpayer-web.spec.ts >> W3 · AC-3 · spaces around name are trimmed in UI display
- Location: tests\web\taxpayer-web.spec.ts:43:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 164

- Ana qwer Dela Cruz created — mobile 09194584201.
+
+   
+   TRAINING — made-up data only
+   
+
+   
+     ☰
+     UCTP
+     
+       Home
+       
+       Training setup
+       
+       Teller POS
+       Citizen portal
+       Simulator
+       
+       My data
+       
+       API docs
+     
+     
+     
+       You are: Manuel-8614
+           Change
+       
+     
+     
+   
+
+   
+   
+     
+       Your name
+       Used to label your training data. 2–60 characters. Type
+         Name-1234 to continue your existing data from another browser.
+       
+       
+       Save
+     
+   
+   
+
+   
+   
+
+   Training setup
+   Create the data you will use in class — everything here is fictional and yours only.
+
+   
+     Training mode is off
+       These screens only work when the server runs with UCTP_TRAINING_MODE=1.
+       Back to Home
+     
+   
+
+   
+   
+     1 — Create a taxpayer
+     Full name
+       
+       2-100 characters: letters, spaces, . - ' and Ñ only
+     Mobile (09XXXXXXXXX)
+       
+       
+     Email (optional)
+       
+       
+     Create taxpayer
+
+     
+   
+
+   
+   
+     2 — Create a property tax bill
+     Taxpayer (only yours are listed)
+       
+         — pick a taxpayer —
+         Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
+       
+       
+     PIN (NNN-NN-NNN-NNN-NNN)
+       
+       
+     Property class
+       
+         RESIDENTIALCOMMERCIAL
+         AGRICULTURALINDUSTRIAL
+       
+       
+     Assessed value (₱)
+       
+       
+     Tax year
+       
+       
+     Create property tax bill
+
+     
+   
+
+   
+   
+     3 — Create a business tax or fee bill
+     Taxpayer (only yours are listed)
+       
+         — pick a taxpayer —
+         Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
+       
+       
+     Type
+       
+         BUSINESSFEE
+       
+     Reference
+       
+       
+     Description
+       
+     Amount (₱)
+       
+       
+     Due date
+       
+       
+     Create bill
+
+     
+   
+
+   
+   
+     4 — Create my teller
+     Display name
+       
+       
+     Create my teller
+
+     
+   
+
+   
+   
+     5 — Create my approver
+     Your own City Treasurer for approving or rejecting void requests on receipts your tellers issued. One per student — clicking again shows the one you have.
+     Display name (optional)
+       
+       
+     Create my approver
+     
+
+     
+   
+
+
+
+
+   
+
+
+
+
+

Call log:
  - Expect "toContainText" locator('body') with timeout 5000ms
  - waiting for locator('body')
    2 × locator resolved to <body x-data="uctpShell()" data-page="training">…</body>
      - unexpected value "
  
  TRAINING — made-up data only
  

  
    ☰
    UCTP
    
      Home
      
      Training setup
      
      Teller POS
      Citizen portal
      Simulator
      
      My data
      
      API docs
    
    
    
      You are: Manuel-8614
          Change
      
    
    
  

  
  
    
      Your name
      Used to label your training data. 2–60 characters. Type
        Name-1234 to continue your existing data from another browser.
      
      
      Save
    
  
  

  
  

  Training setup
  Create the data you will use in class — everything here is fictional and yours only.

  
    Training mode is off
      These screens only work when the server runs with UCTP_TRAINING_MODE=1.
      Back to Home
    
  

  
  
    1 — Create a taxpayer
    Full name
      
      
    Mobile (09XXXXXXXXX)
      
      
    Email (optional)
      
      
    Create taxpayer

    
  

  
  
    2 — Create a property tax bill
    Taxpayer (only yours are listed)
      
        — pick a taxpayer —
        Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
      
      
    PIN (NNN-NN-NNN-NNN-NNN)
      
      
    Property class
      
        RESIDENTIALCOMMERCIAL
        AGRICULTURALINDUSTRIAL
      
      
    Assessed value (₱)
      
      
    Tax year
      
      
    Create property tax bill

    
  

  
  
    3 — Create a business tax or fee bill
    Taxpayer (only yours are listed)
      
        — pick a taxpayer —
        Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
      
      
    Type
      
        BUSINESSFEE
      
    Reference
      
      
    Description
      
    Amount (₱)
      
      
    Due date
      
      
    Create bill

    
  

  
  
    4 — Create my teller
    Display name
      
      
    Create my teller

    
  

  
  
    5 — Create my approver
    Your own City Treasurer for approving or rejecting void requests on receipts your tellers issued. One per student — clicking again shows the one you have.
    Display name (optional)
      
      
    Create my approver
    

    
  




  




"
    11 × locator resolved to <body x-data="uctpShell()" data-page="training">…</body>
       - unexpected value "
  
  TRAINING — made-up data only
  

  
    ☰
    UCTP
    
      Home
      
      Training setup
      
      Teller POS
      Citizen portal
      Simulator
      
      My data
      
      API docs
    
    
    
      You are: Manuel-8614
          Change
      
    
    
  

  
  
    
      Your name
      Used to label your training data. 2–60 characters. Type
        Name-1234 to continue your existing data from another browser.
      
      
      Save
    
  
  

  
  

  Training setup
  Create the data you will use in class — everything here is fictional and yours only.

  
    Training mode is off
      These screens only work when the server runs with UCTP_TRAINING_MODE=1.
      Back to Home
    
  

  
  
    1 — Create a taxpayer
    Full name
      
      2-100 characters: letters, spaces, . - ' and Ñ only
    Mobile (09XXXXXXXXX)
      
      
    Email (optional)
      
      
    Create taxpayer

    
  

  
  
    2 — Create a property tax bill
    Taxpayer (only yours are listed)
      
        — pick a taxpayer —
        Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
      
      
    PIN (NNN-NN-NNN-NNN-NNN)
      
      
    Property class
      
        RESIDENTIALCOMMERCIAL
        AGRICULTURALINDUSTRIAL
      
      
    Assessed value (₱)
      
      
    Tax year
      
      
    Create property tax bill

    
  

  
  
    3 — Create a business tax or fee bill
    Taxpayer (only yours are listed)
      
        — pick a taxpayer —
        Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
      
      
    Type
      
        BUSINESSFEE
      
    Reference
      
      
    Description
      
    Amount (₱)
      
      
    Due date
      
      
    Create bill

    
  

  
  
    4 — Create my teller
    Display name
      
      
    Create my teller

    
  

  
  
    5 — Create my approver
    Your own City Treasurer for approving or rejecting void requests on receipts your tellers issued. One per student — clicking again shows the one you have.
    Display name (optional)
      
      
    Create my approver
    

    
  




  




"

```

```yaml
- note: TRAINING — made-up data only
- navigation "Main":
  - link "UCTP":
    - /url: /
  - link "Home":
    - /url: /
  - link "Training setup":
    - /url: /training
  - link "Teller POS":
    - /url: /pos
  - link "Citizen portal":
    - /url: /portal
  - link "Simulator":
    - /url: /simulator
  - link "My data":
    - /url: /my-data
  - link "API docs":
    - /url: /docs
  - text: "You are:"
  - strong: Manuel-8614
  - link "Change":
    - /url: "#"
- main:
  - heading "Training setup" [level=1]
  - paragraph: Create the data you will use in class — everything here is fictional and yours only.
  - heading "1 — Create a taxpayer" [level=2]
  - text: Full name
  - textbox "Full name": "09194584201"
  - text: "2-100 characters: letters, spaces, . - ' and Ñ only Mobile (09XXXXXXXXX)"
  - textbox "Mobile (09XXXXXXXXX)"
  - text: Email (optional)
  - textbox "Email (optional)"
  - button "Create taxpayer"
  - heading "2 — Create a property tax bill" [level=2]
  - text: Taxpayer (only yours are listed)
  - combobox "Taxpayer (only yours are listed)":
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
  - text: PIN (NNN-NN-NNN-NNN-NNN)
  - textbox "PIN (NNN-NN-NNN-NNN-NNN)"
  - text: Property class
  - combobox "Property class":
    - option "RESIDENTIAL" [selected]
    - option "COMMERCIAL"
    - option "AGRICULTURAL"
    - option "INDUSTRIAL"
  - text: Assessed value (₱)
  - textbox "Assessed value (₱)"
  - text: Tax year
  - textbox "Tax year": "2026"
  - button "Create property tax bill"
  - heading "3 — Create a business tax or fee bill" [level=2]
  - text: Taxpayer (only yours are listed)
  - combobox "Taxpayer (only yours are listed)":
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
  - text: Type
  - combobox "Type":
    - option "BUSINESS" [selected]
    - option "FEE"
  - text: Reference
  - textbox "Reference"
  - text: Description
  - textbox "Description"
  - text: Amount (₱)
  - textbox "Amount (₱)"
  - text: Due date
  - textbox "Due date":
    - /placeholder: YYYY-MM-DD
  - button "Create bill"
  - heading "4 — Create my teller" [level=2]
  - text: Display name
  - textbox "Display name"
  - button "Create my teller"
  - heading "5 — Create my approver" [level=2]
  - paragraph: Your own City Treasurer for approving or rejecting void requests on receipts your tellers issued. One per student — clicking again shows the one you have.
  - text: Display name (optional)
  - textbox "Display name (optional)"
  - button "Create my approver"
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
  26  |   await expect(page.locator('.result-box, text=created')).toContainText(`${name} created — mobile ${mobile}.`);
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
> 52  |   await expect(page.locator('body')).toContainText(`${cleanName} created — mobile ${mobile}.`);
      |                                      ^ Error: expect(locator).toContainText(expected) failed
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