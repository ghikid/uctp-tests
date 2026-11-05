# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: integration\trn-01.spec.ts >> TRN-01 Register a taxpayer (integration: API and screen) >> I3 · AC-5, AC-6, AC-8 · show the same message on the API and the screen for email "rosa@examplecom"
- Location: tests\integration\trn-01.spec.ts:52:9

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - note [ref=f3e2]: TRAINING — made-up data only
  - navigation "Main" [ref=f3e3]:
    - link "UCTP" [ref=f3e4] [cursor=pointer]:
      - /url: /
    - generic [ref=f3e5]:
      - link "Home" [ref=f3e6] [cursor=pointer]:
        - /url: /
      - link "Training setup" [ref=f3e7] [cursor=pointer]:
        - /url: /training
      - link "Teller POS" [ref=f3e8] [cursor=pointer]:
        - /url: /pos
      - link "Citizen portal" [ref=f3e9] [cursor=pointer]:
        - /url: /portal
      - link "Simulator" [ref=f3e10] [cursor=pointer]:
        - /url: /simulator
      - link "My data" [ref=f3e11] [cursor=pointer]:
        - /url: /my-data
      - link "API docs" [ref=f3e12] [cursor=pointer]:
        - /url: /docs
    - generic [ref=f3e14]:
      - text: "You are:"
      - strong [ref=f3e15]: Manuel-8614-other-3267
      - link "Change" [ref=f3e16] [cursor=pointer]:
        - /url: "#"
  - main [ref=f3e17]:
    - generic [ref=f3e18]:
      - heading "My data" [level=1] [ref=f3e19]
      - paragraph [ref=f3e20]: Everything created under your name. Another name — even the same name typed again — sees nothing here.
      - generic [ref=f3e21]:
        - heading "My taxpayers" [level=2] [ref=f3e22]
        - paragraph [ref=f3e23]: None yet — create one in Training setup.
      - generic [ref=f3e24]:
        - heading "My bills" [level=2] [ref=f3e25]
        - paragraph [ref=f3e26]: None yet.
      - generic [ref=f3e27]:
        - heading "My tellers" [level=2] [ref=f3e28]
        - paragraph [ref=f3e29]: None yet.
      - generic [ref=f3e30]:
        - heading "My approver" [level=2] [ref=f3e31]
        - paragraph [ref=f3e32]: None yet — create one in Training setup (step 5).
      - generic [ref=f3e33]:
        - heading "My receipts" [level=2] [ref=f3e34]
        - paragraph [ref=f3e35]: None yet — collect a payment at the POS.
```