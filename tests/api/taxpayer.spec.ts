// file: tests/api/taxpayer.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://city-treasurer-staging.aiqe.pro';
const HEADERS = {
  'X-Tenant-ID': 'TAGAYTAY',
  'X-User-ID': 'Manuel-8614',
  'Content-Type': 'application/json'
};

function randomName() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `Ana ${rand} Dela Cruz`;
}

function randomMobile() {
  const digits = Math.floor(100000000 + Math.random() * 900000000);
  return `09${digits}`;
}

test('A1 · AC-1 · create a taxpayer using valid name and mobile', async ({ request }) => {
  const name = randomName();
  const mobile = randomMobile();
  const response = await request.post(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS,
    data: { full_name: name, mobile: mobile, email: '' }
  });
  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body).toHaveProperty('taxpayer_id');
});

test('A2 · AC-2 · list my taxpayers and verify storage', async ({ request }) => {
  const name = randomName();
  const mobile = randomMobile();
  await request.post(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS,
    data: { full_name: name, mobile: mobile }
  });
  const response = await request.get(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS
  });
  expect(response.status()).toBe(200);
  const list = await response.json();
  const found = list.find((t: any) => t.mobile === mobile);
  expect(found).toBeTruthy();
  expect(found.full_name).toBe(name);
});

test('A3 · AC-3 · spaces around the name are removed', async ({ request }) => {
  const mobile = randomMobile();
  const response = await request.post(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS,
    data: { full_name: '   Ana abcd Dela Cruz   ', mobile: mobile }
  });
  expect(response.status()).toBe(201);
  const getRes = await request.get(`${BASE_URL}/api/v1/training/taxpayers`, { headers: HEADERS });
  const list = await getRes.json();
  const found = list.find((t: any) => t.mobile === mobile);
  expect(found.full_name).toBe('Ana abcd Dela Cruz');
});

test('A4 · AC-4 · refuse already registered mobile with specific message', async ({ request }) => {
  const mobile = randomMobile();
  await request.post(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS,
    data: { full_name: randomName(), mobile: mobile }
  });
  const response = await request.post(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS,
    data: { full_name: randomName(), mobile: mobile }
  });
  expect(response.status()).toBe(409);
  const body = await response.json();
  expect(body.detail.mobile).toBe('already registered for this tenant');
});

test('A5 · AC-5 · refuse full name with 1 character', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS,
    data: { full_name: 'A', mobile: randomMobile() }
  });
  expect(response.status()).toBe(422);
  const body = await response.json();
  expect(body.detail.full_name).toBe('2-100 characters: letters, spaces, . - \' and Ñ only');
});

test('A6 · AC-6 · refuse invalid email format', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS,
    data: { full_name: randomName(), mobile: randomMobile(), email: 'invalid-email' }
  });
  expect(response.status()).toBe(422);
  const body = await response.json();
  expect(body.detail.email).toBe('invalid email format');
});

test('A7 · AC-7 · taxpayer created under name-tag shows empty for another name-tag', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: {
      'X-Tenant-ID': 'TAGAYTAY',
      'X-User-ID': 'Manuel-8614-other',
      'Content-Type': 'application/json'
    }
  });
  expect(response.status()).toBe(200);
  const list = await response.json();
  expect(list).toEqual([]);
});

test('A8 · AC-8 · refuse invalid mobile format lacking digits', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/api/v1/training/taxpayers`, {
    headers: HEADERS,
    data: { full_name: randomName(), mobile: '0912345678' }
  });
  expect(response.status()).toBe(422);
  const body = await response.json();
  expect(body.detail.mobile).toBe('must be a PH mobile 09XXXXXXXXX or +639XXXXXXXXX');
});

