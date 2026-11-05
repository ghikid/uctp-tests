# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\taxpayer-web.spec.ts >> W2 · AC-2 · verify taxpayer details appear under My data My taxpayers
- Location: tests\web\taxpayer-web.spec.ts:29:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 397

- Ana bing Dela Cruz
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
+   My data
+   Everything created under your name. Another name — even the same name typed again — sees nothing here.
+
+   
+     Training mode is off
+       This page only works when the server runs with UCTP_TRAINING_MODE=1.
+       Back to Home
+     
+   
+
+   
+     My taxpayers
+     None yet — create one in Training setup.
+     Could not load your taxpayers (the API returned an error). Nothing is hidden — reload to try again.
+     
+       NameMobileEmail
+       Rosa Web09841708922—Ana Dela Cruz09841649471rosa@example.comAna jufn Dela Cruz09315080470—Ana Dela Cruz09841289703—Ana Dela Cruz09841265222—Ana Dela Cruz09841247081—Ana nifm Dela Cruz09478210660—Ana abcd Dela Cruz09922231547—Ana amyb Dela Cruz09613263497—Ana gkey Dela Cruz09216951246—Ana Dela Cruz09802246073—Rosa Web09802217472—Ana Dela Cruz09802186951—Ana Dela Cruz09802144680—Ana Dela Cruz09802092599—Ana Dela Cruz09802056137—Ñoño O'Brien-Cruz Jr.09802025976—Ana Dela Cruz09802033974—Rosa Web09802008563—Ana Dela Cruz09802001589—Ana Dela Cruz09801982242—Ana Dela Cruz09801976217—Ñoño O'Brien-Cruz Jr.09801953556—Ana Dela Cruz09801957481—Rosa Web09801887402—Rosa Web09801852412—Ana Dela Cruz09801854411rosa@example.comAna Dela Cruz09801819171rosa@example.comAna Dela Cruz09801771481—Ana Dela Cruz09801713810—Ana Dela Cruz09801711019aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@example.comAna Dela Cruz09801708428rosa@example.comAna Dela Cruz09801701297—Ñoño O'Brien-Cruz Jr.09801694166—AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA09801691445—Al09801684534—Ana Dela Cruz09801677533—Ana Dela Cruz09801660222—Ana Dela Cruz09801652181—ming gozun09201234568—Manuel P. Minton Jr.09217439423ghikid@yahoo.comAna Dela Cruz09052498706—Ana Dela Cruz09051307259—Ana Dela Cruz09051204493—Ana Dela Cruz09051229316—Ana Dela Cruz09039621745—Ana Dela Cruz09038978447—
+     
+   
+
+   
+     My bills
+     None yet.
+     Could not load your bills (the API returned an error). Nothing is hidden — reload to try again.
+     
+         
+           
+             RPT 123-45-123-567-123
+             RESIDENTIAL 2026
+             100.00
+             OPEN
+             details
+           
+         
+         
+           Receivables: 5e474c44
+               RPT — 1.50
+               (OPEN)5adb1f8e
+               RPT_SEF — 1.00
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             Business C05-712498706-1-2
+             
+             1850.50
+             OPEN
+             details
+           
+         
+         
+           Receivables: 6489ffa1
+               BUSINESS — 1850.50
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             Business C05-712498706-1
+             
+             1850.00
+             OPEN
+             details
+           
+         
+         
+           Receivables: 0664b928
+               BUSINESS — 1850.00
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             Business C05-711307259-1-2
+             
+             1850.50
+             OPEN
+             details
+           
+         
+         
+           Receivables: eda6051c
+               BUSINESS — 1850.50
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             Business C05-711307259-1
+             
+             1850.00
+             OPEN
+             details
+           
+         
+         
+           Receivables: 4c03e147
+               BUSINESS — 1850.00
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             Business C05-711204493-1-2
+             
+             1850.50
+             OPEN
+             details
+           
+         
+         
+           Receivables: 6526481d
+               BUSINESS — 1850.50
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             Business C05-711229316-1-2
+             
+             1850.50
+             OPEN
+             details
+           
+         
+         
+           Receivables: 53ea7480
+               BUSINESS — 1850.50
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             Business C05-711204493-1
+             
+             1850.00
+             OPEN
+             details
+           
+         
+         
+           Receivables: 20cb1dd7
+               BUSINESS — 1850.00
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             Business C05-711229316-1
+             
+             1850.00
+             OPEN
+             details
+           
+         
+         
+           Receivables: aaf0d3fa
+               BUSINESS — 1850.00
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             RPT 703-26-709-621-745
+             INDUSTRIAL 2026
+             1000000.00
+             OPEN
+             details
+           
+         
+         
+           Receivables: f92424ce
+               RPT — 20000.00
+               (OPEN)80b5798c
+               RPT_SEF — 10000.00
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             RPT 903-26-708-978-447
+             INDUSTRIAL 2026
+             999999999.99
+             OPEN
+             details
+           
+         
+         
+           Receivables: d94ca735
+               RPT — 20000000.00
+               (OPEN)6e20629b
+               RPT_SEF — 10000000.00
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+         
+           
+             RPT 703-26-708-978-447
+             INDUSTRIAL 2026
+             1000000.00
+             OPEN
+             details
+           
+         
+         
+           Receivables: 45ca5184
+               RPT — 20000.00
+               (OPEN)946bc904
+               RPT_SEF — 10000.00
+               (OPEN)
+           
+             
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+                 Assessment
+                 Collect at POS
+                 Find in portal
+               
+           
+         
+       
+   
+
+   
+     My tellers
+     None yet.
+     Could not load your tellers (the API returned an error). Nothing is hidden — reload to try again.
+     
+       NameAF 51 bookletAF 56 booklet
+       
+     
+   
+
+   
+     My approver
+     None yet — create one in Training setup (step 5).
+     Could not load your approver (the API returned an error). Nothing is hidden — reload to try again.
+     
+       NameApprover ID
+       
+     
+   
+
+   
+     My receipts
+     None yet — collect a payment at the POS.
+     Could not load your receipts (the API returned an error). Nothing is hidden — reload to try again.
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
    2 × locator resolved to <body data-page="my-data" x-data="uctpShell()">…</body>
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
    
  
  

  
  

  My data
  Everything created under your name. Another name — even the same name typed again — sees nothing here.

  
    Training mode is off
      This page only works when the server runs with UCTP_TRAINING_MODE=1.
      Back to Home
    
  

  
    My taxpayers
    None yet — create one in Training setup.
    Could not load your taxpayers (the API returned an error). Nothing is hidden — reload to try again.
    
      NameMobileEmail
      
    
  

  
    My bills
    None yet.
    Could not load your bills (the API returned an error). Nothing is hidden — reload to try again.
    
  

  
    My tellers
    None yet.
    Could not load your tellers (the API returned an error). Nothing is hidden — reload to try again.
    
      NameAF 51 bookletAF 56 booklet
      
    
  

  
    My approver
    None yet — create one in Training setup (step 5).
    Could not load your approver (the API returned an error). Nothing is hidden — reload to try again.
    
      NameApprover ID
      
    
  

  
    My receipts
    None yet — collect a payment at the POS.
    Could not load your receipts (the API returned an error). Nothing is hidden — reload to try again.
    
  




  




"
    11 × locator resolved to <body data-page="my-data" x-data="uctpShell()">…</body>
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
    
  
  

  
  

  My data
  Everything created under your name. Another name — even the same name typed again — sees nothing here.

  
    Training mode is off
      This page only works when the server runs with UCTP_TRAINING_MODE=1.
      Back to Home
    
  

  
    My taxpayers
    None yet — create one in Training setup.
    Could not load your taxpayers (the API returned an error). Nothing is hidden — reload to try again.
    
      NameMobileEmail
      Rosa Web09841708922—Ana Dela Cruz09841649471rosa@example.comAna jufn Dela Cruz09315080470—Ana Dela Cruz09841289703—Ana Dela Cruz09841265222—Ana Dela Cruz09841247081—Ana nifm Dela Cruz09478210660—Ana abcd Dela Cruz09922231547—Ana amyb Dela Cruz09613263497—Ana gkey Dela Cruz09216951246—Ana Dela Cruz09802246073—Rosa Web09802217472—Ana Dela Cruz09802186951—Ana Dela Cruz09802144680—Ana Dela Cruz09802092599—Ana Dela Cruz09802056137—Ñoño O'Brien-Cruz Jr.09802025976—Ana Dela Cruz09802033974—Rosa Web09802008563—Ana Dela Cruz09802001589—Ana Dela Cruz09801982242—Ana Dela Cruz09801976217—Ñoño O'Brien-Cruz Jr.09801953556—Ana Dela Cruz09801957481—Rosa Web09801887402—Rosa Web09801852412—Ana Dela Cruz09801854411rosa@example.comAna Dela Cruz09801819171rosa@example.comAna Dela Cruz09801771481—Ana Dela Cruz09801713810—Ana Dela Cruz09801711019aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@example.comAna Dela Cruz09801708428rosa@example.comAna Dela Cruz09801701297—Ñoño O'Brien-Cruz Jr.09801694166—AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA09801691445—Al09801684534—Ana Dela Cruz09801677533—Ana Dela Cruz09801660222—Ana Dela Cruz09801652181—ming gozun09201234568—Manuel P. Minton Jr.09217439423ghikid@yahoo.comAna Dela Cruz09052498706—Ana Dela Cruz09051307259—Ana Dela Cruz09051204493—Ana Dela Cruz09051229316—Ana Dela Cruz09039621745—Ana Dela Cruz09038978447—
    
  

  
    My bills
    None yet.
    Could not load your bills (the API returned an error). Nothing is hidden — reload to try again.
    
        
          
            RPT 123-45-123-567-123
            RESIDENTIAL 2026
            100.00
            OPEN
            details
          
        
        
          Receivables: 5e474c44
              RPT — 1.50
              (OPEN)5adb1f8e
              RPT_SEF — 1.00
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            Business C05-712498706-1-2
            
            1850.50
            OPEN
            details
          
        
        
          Receivables: 6489ffa1
              BUSINESS — 1850.50
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            Business C05-712498706-1
            
            1850.00
            OPEN
            details
          
        
        
          Receivables: 0664b928
              BUSINESS — 1850.00
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            Business C05-711307259-1-2
            
            1850.50
            OPEN
            details
          
        
        
          Receivables: eda6051c
              BUSINESS — 1850.50
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            Business C05-711307259-1
            
            1850.00
            OPEN
            details
          
        
        
          Receivables: 4c03e147
              BUSINESS — 1850.00
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            Business C05-711204493-1-2
            
            1850.50
            OPEN
            details
          
        
        
          Receivables: 6526481d
              BUSINESS — 1850.50
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            Business C05-711229316-1-2
            
            1850.50
            OPEN
            details
          
        
        
          Receivables: 53ea7480
              BUSINESS — 1850.50
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            Business C05-711204493-1
            
            1850.00
            OPEN
            details
          
        
        
          Receivables: 20cb1dd7
              BUSINESS — 1850.00
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            Business C05-711229316-1
            
            1850.00
            OPEN
            details
          
        
        
          Receivables: aaf0d3fa
              BUSINESS — 1850.00
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            RPT 703-26-709-621-745
            INDUSTRIAL 2026
            1000000.00
            OPEN
            details
          
        
        
          Receivables: f92424ce
              RPT — 20000.00
              (OPEN)80b5798c
              RPT_SEF — 10000.00
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            RPT 903-26-708-978-447
            INDUSTRIAL 2026
            999999999.99
            OPEN
            details
          
        
        
          Receivables: d94ca735
              RPT — 20000000.00
              (OPEN)6e20629b
              RPT_SEF — 10000000.00
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
        
          
            RPT 703-26-708-978-447
            INDUSTRIAL 2026
            1000000.00
            OPEN
            details
          
        
        
          Receivables: 45ca5184
              RPT — 20000.00
              (OPEN)946bc904
              RPT_SEF — 10000.00
              (OPEN)
          
            
                Assessment
                Collect at POS
                Find in portal
              
                Assessment
                Collect at POS
                Find in portal
              
          
        
      
  

  
    My tellers
    None yet.
    Could not load your tellers (the API returned an error). Nothing is hidden — reload to try again.
    
      NameAF 51 bookletAF 56 booklet
      
    
  

  
    My approver
    None yet — create one in Training setup (step 5).
    Could not load your approver (the API returned an error). Nothing is hidden — reload to try again.
    
      NameApprover ID
      
    
  

  
    My receipts
    None yet — collect a payment at the POS.
    Could not load your receipts (the API returned an error). Nothing is hidden — reload to try again.
    
  




  




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
  - heading "My data" [level=1]
  - paragraph: Everything created under your name. Another name — even the same name typed again — sees nothing here.
  - heading "My taxpayers" [level=2]
  - table:
    - rowgroup:
      - row "Name Mobile Email":
        - columnheader "Name"
        - columnheader "Mobile"
        - columnheader "Email"
    - rowgroup:
      - row "Rosa Web 09841708922 —":
        - cell "Rosa Web"
        - cell "09841708922"
        - cell "—"
      - row "Ana Dela Cruz 09841649471 rosa@example.com":
        - cell "Ana Dela Cruz"
        - cell "09841649471"
        - cell "rosa@example.com"
      - row "Ana jufn Dela Cruz 09315080470 —":
        - cell "Ana jufn Dela Cruz"
        - cell "09315080470"
        - cell "—"
      - row "Ana Dela Cruz 09841289703 —":
        - cell "Ana Dela Cruz"
        - cell "09841289703"
        - cell "—"
      - row "Ana Dela Cruz 09841265222 —":
        - cell "Ana Dela Cruz"
        - cell "09841265222"
        - cell "—"
      - row "Ana Dela Cruz 09841247081 —":
        - cell "Ana Dela Cruz"
        - cell "09841247081"
        - cell "—"
      - row "Ana nifm Dela Cruz 09478210660 —":
        - cell "Ana nifm Dela Cruz"
        - cell "09478210660"
        - cell "—"
      - row "Ana abcd Dela Cruz 09922231547 —":
        - cell "Ana abcd Dela Cruz"
        - cell "09922231547"
        - cell "—"
      - row "Ana amyb Dela Cruz 09613263497 —":
        - cell "Ana amyb Dela Cruz"
        - cell "09613263497"
        - cell "—"
      - row "Ana gkey Dela Cruz 09216951246 —":
        - cell "Ana gkey Dela Cruz"
        - cell "09216951246"
        - cell "—"
      - row "Ana Dela Cruz 09802246073 —":
        - cell "Ana Dela Cruz"
        - cell "09802246073"
        - cell "—"
      - row "Rosa Web 09802217472 —":
        - cell "Rosa Web"
        - cell "09802217472"
        - cell "—"
      - row "Ana Dela Cruz 09802186951 —":
        - cell "Ana Dela Cruz"
        - cell "09802186951"
        - cell "—"
      - row "Ana Dela Cruz 09802144680 —":
        - cell "Ana Dela Cruz"
        - cell "09802144680"
        - cell "—"
      - row "Ana Dela Cruz 09802092599 —":
        - cell "Ana Dela Cruz"
        - cell "09802092599"
        - cell "—"
      - row "Ana Dela Cruz 09802056137 —":
        - cell "Ana Dela Cruz"
        - cell "09802056137"
        - cell "—"
      - row "Ñoño O'Brien-Cruz Jr. 09802025976 —":
        - cell "Ñoño O'Brien-Cruz Jr."
        - cell "09802025976"
        - cell "—"
      - row "Ana Dela Cruz 09802033974 —":
        - cell "Ana Dela Cruz"
        - cell "09802033974"
        - cell "—"
      - row "Rosa Web 09802008563 —":
        - cell "Rosa Web"
        - cell "09802008563"
        - cell "—"
      - row "Ana Dela Cruz 09802001589 —":
        - cell "Ana Dela Cruz"
        - cell "09802001589"
        - cell "—"
      - row "Ana Dela Cruz 09801982242 —":
        - cell "Ana Dela Cruz"
        - cell "09801982242"
        - cell "—"
      - row "Ana Dela Cruz 09801976217 —":
        - cell "Ana Dela Cruz"
        - cell "09801976217"
        - cell "—"
      - row "Ñoño O'Brien-Cruz Jr. 09801953556 —":
        - cell "Ñoño O'Brien-Cruz Jr."
        - cell "09801953556"
        - cell "—"
      - row "Ana Dela Cruz 09801957481 —":
        - cell "Ana Dela Cruz"
        - cell "09801957481"
        - cell "—"
      - row "Rosa Web 09801887402 —":
        - cell "Rosa Web"
        - cell "09801887402"
        - cell "—"
      - row "Rosa Web 09801852412 —":
        - cell "Rosa Web"
        - cell "09801852412"
        - cell "—"
      - row "Ana Dela Cruz 09801854411 rosa@example.com":
        - cell "Ana Dela Cruz"
        - cell "09801854411"
        - cell "rosa@example.com"
      - row "Ana Dela Cruz 09801819171 rosa@example.com":
        - cell "Ana Dela Cruz"
        - cell "09801819171"
        - cell "rosa@example.com"
      - row "Ana Dela Cruz 09801771481 —":
        - cell "Ana Dela Cruz"
        - cell "09801771481"
        - cell "—"
      - row "Ana Dela Cruz 09801713810 —":
        - cell "Ana Dela Cruz"
        - cell "09801713810"
        - cell "—"
      - row "Ana Dela Cruz 09801711019 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@example.com":
        - cell "Ana Dela Cruz"
        - cell "09801711019"
        - cell "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@example.com"
      - row "Ana Dela Cruz 09801708428 rosa@example.com":
        - cell "Ana Dela Cruz"
        - cell "09801708428"
        - cell "rosa@example.com"
      - row "Ana Dela Cruz 09801701297 —":
        - cell "Ana Dela Cruz"
        - cell "09801701297"
        - cell "—"
      - row "Ñoño O'Brien-Cruz Jr. 09801694166 —":
        - cell "Ñoño O'Brien-Cruz Jr."
        - cell "09801694166"
        - cell "—"
      - row "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA 09801691445 —":
        - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        - cell "09801691445"
        - cell "—"
      - row "Al 09801684534 —":
        - cell "Al"
        - cell "09801684534"
        - cell "—"
      - row "Ana Dela Cruz 09801677533 —":
        - cell "Ana Dela Cruz"
        - cell "09801677533"
        - cell "—"
      - row "Ana Dela Cruz 09801660222 —":
        - cell "Ana Dela Cruz"
        - cell "09801660222"
        - cell "—"
      - row "Ana Dela Cruz 09801652181 —":
        - cell "Ana Dela Cruz"
        - cell "09801652181"
        - cell "—"
      - row "ming gozun 09201234568 —":
        - cell "ming gozun"
        - cell "09201234568"
        - cell "—"
      - row "Manuel P. Minton Jr. 09217439423 ghikid@yahoo.com":
        - cell "Manuel P. Minton Jr."
        - cell "09217439423"
        - cell "ghikid@yahoo.com"
      - row "Ana Dela Cruz 09052498706 —":
        - cell "Ana Dela Cruz"
        - cell "09052498706"
        - cell "—"
      - row "Ana Dela Cruz 09051307259 —":
        - cell "Ana Dela Cruz"
        - cell "09051307259"
        - cell "—"
      - row "Ana Dela Cruz 09051204493 —":
        - cell "Ana Dela Cruz"
        - cell "09051204493"
        - cell "—"
      - row "Ana Dela Cruz 09051229316 —":
        - cell "Ana Dela Cruz"
        - cell "09051229316"
        - cell "—"
      - row "Ana Dela Cruz 09039621745 —":
        - cell "Ana Dela Cruz"
        - cell "09039621745"
        - cell "—"
      - row "Ana Dela Cruz 09038978447 —":
        - cell "Ana Dela Cruz"
        - cell "09038978447"
        - cell "—"
  - heading "My bills" [level=2]
  - table:
    - rowgroup:
      - row "RPT 123-45-123-567-123 RESIDENTIAL 2026 100.00 OPEN details":
        - cell "RPT 123-45-123-567-123":
          - text: RPT
          - code: 123-45-123-567-123
        - cell "RESIDENTIAL 2026"
        - cell "100.00"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "Business C05-712498706-1-2 1850.50 OPEN details":
        - cell "Business C05-712498706-1-2":
          - text: Business
          - code: C05-712498706-1-2
        - cell
        - cell "1850.50"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "Business C05-712498706-1 1850.00 OPEN details":
        - cell "Business C05-712498706-1":
          - text: Business
          - code: C05-712498706-1
        - cell
        - cell "1850.00"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "Business C05-711307259-1-2 1850.50 OPEN details":
        - cell "Business C05-711307259-1-2":
          - text: Business
          - code: C05-711307259-1-2
        - cell
        - cell "1850.50"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "Business C05-711307259-1 1850.00 OPEN details":
        - cell "Business C05-711307259-1":
          - text: Business
          - code: C05-711307259-1
        - cell
        - cell "1850.00"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "Business C05-711204493-1-2 1850.50 OPEN details":
        - cell "Business C05-711204493-1-2":
          - text: Business
          - code: C05-711204493-1-2
        - cell
        - cell "1850.50"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "Business C05-711229316-1-2 1850.50 OPEN details":
        - cell "Business C05-711229316-1-2":
          - text: Business
          - code: C05-711229316-1-2
        - cell
        - cell "1850.50"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "Business C05-711204493-1 1850.00 OPEN details":
        - cell "Business C05-711204493-1":
          - text: Business
          - code: C05-711204493-1
        - cell
        - cell "1850.00"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "Business C05-711229316-1 1850.00 OPEN details":
        - cell "Business C05-711229316-1":
          - text: Business
          - code: C05-711229316-1
        - cell
        - cell "1850.00"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "RPT 703-26-709-621-745 INDUSTRIAL 2026 1000000.00 OPEN details":
        - cell "RPT 703-26-709-621-745":
          - text: RPT
          - code: 703-26-709-621-745
        - cell "INDUSTRIAL 2026"
        - cell "1000000.00"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "RPT 903-26-708-978-447 INDUSTRIAL 2026 999999999.99 OPEN details":
        - cell "RPT 903-26-708-978-447":
          - text: RPT
          - code: 903-26-708-978-447
        - cell "INDUSTRIAL 2026"
        - cell "999999999.99"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - table:
    - rowgroup:
      - row "RPT 703-26-708-978-447 INDUSTRIAL 2026 1000000.00 OPEN details":
        - cell "RPT 703-26-708-978-447":
          - text: RPT
          - code: 703-26-708-978-447
        - cell "INDUSTRIAL 2026"
        - cell "1000000.00"
        - cell "OPEN"
        - cell "details":
          - link "details":
            - /url: "#"
  - heading "My tellers" [level=2]
  - paragraph: None yet.
  - heading "My approver" [level=2]
  - paragraph: None yet — create one in Training setup (step 5).
  - heading "My receipts" [level=2]
  - paragraph: None yet — collect a payment at the POS.
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
> 39  |   await expect(page.locator('body')).toContainText(name);
      |                                      ^ Error: expect(locator).toContainText(expected) failed
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