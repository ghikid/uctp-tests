# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: integration\taxpayer-integration.spec.ts >> I1 · AC-1 & AC-2 · create via UI and confirm synchronization with GET API list
- Location: tests\integration\taxpayer-integration.spec.ts:18:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 164

- Ana dzns Dela Cruz created — mobile 09659697164.
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
+         Ana Dela Cruz (09842526832)Ana Dela Cruz (09842511491)Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
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
+         Ana Dela Cruz (09842526832)Ana Dela Cruz (09842511491)Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
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
    3 × locator resolved to <body x-data="uctpShell()" data-page="training">…</body>
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
    - locator resolved to <body x-data="uctpShell()" data-page="training">…</body>
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
        Ana Dela Cruz (09842526832)Ana Dela Cruz (09842511491)Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
      
      
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
        Ana Dela Cruz (09842526832)Ana Dela Cruz (09842511491)Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
      
      
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
    9 × locator resolved to <body x-data="uctpShell()" data-page="training">…</body>
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
        Ana Dela Cruz (09842526832)Ana Dela Cruz (09842511491)Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
      
      
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
        Ana Dela Cruz (09842526832)Ana Dela Cruz (09842511491)Rosa Web (09841708922)Ana Dela Cruz (09841649471)Ana jufn Dela Cruz (09315080470)Ana Dela Cruz (09841289703)Ana Dela Cruz (09841265222)Ana Dela Cruz (09841247081)Ana nifm Dela Cruz (09478210660)Ana abcd Dela Cruz (09922231547)Ana amyb Dela Cruz (09613263497)Ana gkey Dela Cruz (09216951246)Ana Dela Cruz (09802246073)Rosa Web (09802217472)Ana Dela Cruz (09802186951)Ana Dela Cruz (09802144680)Ana Dela Cruz (09802092599)Ana Dela Cruz (09802056137)Ñoño O'Brien-Cruz Jr. (09802025976)Ana Dela Cruz (09802033974)Rosa Web (09802008563)Ana Dela Cruz (09802001589)Ana Dela Cruz (09801982242)Ana Dela Cruz (09801976217)Ñoño O'Brien-Cruz Jr. (09801953556)Ana Dela Cruz (09801957481)Rosa Web (09801887402)Rosa Web (09801852412)Ana Dela Cruz (09801854411)Ana Dela Cruz (09801819171)Ana Dela Cruz (09801771481)Ana Dela Cruz (09801713810)Ana Dela Cruz (09801711019)Ana Dela Cruz (09801708428)Ana Dela Cruz (09801701297)Ñoño O'Brien-Cruz Jr. (09801694166)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA (09801691445)Al (09801684534)Ana Dela Cruz (09801677533)Ana Dela Cruz (09801660222)Ana Dela Cruz (09801652181)ming gozun (09201234568)Manuel P. Minton Jr. (09217439423)Ana Dela Cruz (09052498706)Ana Dela Cruz (09051307259)Ana Dela Cruz (09051204493)Ana Dela Cruz (09051229316)Ana Dela Cruz (09039621745)Ana Dela Cruz (09038978447)
      
      
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
  - textbox "Full name": "09659697164"
  - text: "2-100 characters: letters, spaces, . - ' and Ñ only Mobile (09XXXXXXXXX)"
  - textbox "Mobile (09XXXXXXXXX)"
  - text: Email (optional)
  - textbox "Email (optional)"
  - button "Create taxpayer"
  - heading "2 — Create a property tax bill" [level=2]
  - text: Taxpayer (only yours are listed)
  - combobox "Taxpayer (only yours are listed)":
    - option "— pick a taxpayer —" [selected]
    - option "Ana Dela Cruz (09842526832)"
    - option "Ana Dela Cruz (09842511491)"
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
    - option "Ana Dela Cruz (09842526832)"
    - option "Ana Dela Cruz (09842511491)"
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
  1  | // file: tests/integration/taxpayer-integration.spec.ts
  2  | import { test, expect, signIn } from '../../helpers/web';
  3  | 
  4  | function uniqueName() {
  5  |   const chars = 'abcdefghijklmnopqrstuvwxyz';
  6  |   let rand = '';
  7  |   for (let i = 0; i < 4; i++) {
  8  |     rand += chars.charAt(Math.floor(Math.random() * chars.length));
  9  |   }
  10 |   return `Ana ${rand} Dela Cruz`;
  11 | }
  12 | 
  13 | function uniqueMobile() {
  14 |   const digits = Math.floor(100000000 + Math.random() * 900000000);
  15 |   return `09${digits}`;
  16 | }
  17 | 
  18 | test('I1 · AC-1 & AC-2 · create via UI and confirm synchronization with GET API list', async ({ page, request }) => {
  19 |   await signIn(page);
  20 |   await page.click('text=Training setup');
  21 |   const name = uniqueName();
  22 |   const mobile = uniqueMobile();
  23 |   await page.fill('input[name="full_name"], input:near(:text("Full name"))', name);
  24 |   await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  25 |   await page.click('button:has-text("Create taxpayer")');
> 26 |   await expect(page.locator('body')).toContainText(`${name} created — mobile ${mobile}.`);
     |                                      ^ Error: expect(locator).toContainText(expected) failed
  27 | 
  28 |   const response = await request.get('https://city-treasurer-staging.aiqe.pro/api/v1/training/taxpayers', {
  29 |     headers: {
  30 |       'X-Tenant-ID': 'TAGAYTAY',
  31 |       'X-User-ID': 'Manuel-8614',
  32 |       'Content-Type': 'application/json'
  33 |     }
  34 |   });
  35 |   expect(response.status()).toBe(200);
  36 |   const list = await response.json();
  37 |   const matched = list.find((t: any) => t.mobile === mobile);
  38 |   expect(matched).toBeTruthy();
  39 |   expect(matched.full_name).toBe(name);
  40 | });
  41 | 
  42 | test('I2 · AC-7 · create via API under Manuel-8614 and verify absence under Manuel-8614-other UI', async ({ page, request }) => {
  43 |   const mobile = uniqueMobile();
  44 |   const name = uniqueName();
  45 |   const createRes = await request.post('https://city-treasurer-staging.aiqe.pro/api/v1/training/taxpayers', {
  46 |     headers: {
  47 |       'X-Tenant-ID': 'TAGAYTAY',
  48 |       'X-User-ID': 'Manuel-8614',
  49 |       'Content-Type': 'application/json'
  50 |     },
  51 |     data: { full_name: name, mobile: mobile }
  52 |   });
  53 |   expect(createRes.status()).toBe(201);
  54 | 
  55 |   await signIn(page, 'Manuel-8614-other');
  56 |   await page.click('text=My data');
  57 |   await page.click('text=My taxpayers');
  58 |   await expect(page.locator('body')).toContainText('None yet — create one in Training setup.');
  59 |   await expect(page.locator('body')).not.toContainText(name);
  60 | });
  61 | 
  62 | 
```