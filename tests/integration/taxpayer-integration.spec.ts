// file: tests/integration/taxpayer-integration.spec.ts
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

test('I1 · AC-1 & AC-2 · create via UI and confirm synchronization with GET API list', async ({ page, request }) => {
  await signIn(page);
  await page.click('text=Training setup');
  const name = uniqueName();
  const mobile = uniqueMobile();
  await page.fill('input[name="full_name"], input:near(:text("Full name"))', name);
  await page.fill('input[name="mobile"], input:near(:text("Mobile"))', mobile);
  await page.click('button:has-text("Create taxpayer")');
  await expect(page.locator('body')).toContainText(`${name} created — mobile ${mobile}.`);

  const response = await request.get('https://city-treasurer-staging.aiqe.pro/api/v1/training/taxpayers', {
    headers: {
      'X-Tenant-ID': 'TAGAYTAY',
      'X-User-ID': 'Manuel-8614',
      'Content-Type': 'application/json'
    }
  });
  expect(response.status()).toBe(200);
  const list = await response.json();
  const matched = list.find((t: any) => t.mobile === mobile);
  expect(matched).toBeTruthy();
  expect(matched.full_name).toBe(name);
});

test('I2 · AC-7 · create via API under Manuel-8614 and verify absence under Manuel-8614-other UI', async ({ page, request }) => {
  const mobile = uniqueMobile();
  const name = uniqueName();
  const createRes = await request.post('https://city-treasurer-staging.aiqe.pro/api/v1/training/taxpayers', {
    headers: {
      'X-Tenant-ID': 'TAGAYTAY',
      'X-User-ID': 'Manuel-8614',
      'Content-Type': 'application/json'
    },
    data: { full_name: name, mobile: mobile }
  });
  expect(createRes.status()).toBe(201);

  await signIn(page, 'Manuel-8614-other');
  await page.click('text=My data');
  await page.click('text=My taxpayers');
  await expect(page.locator('body')).toContainText('None yet — create one in Training setup.');
  await expect(page.locator('body')).not.toContainText(name);
});

