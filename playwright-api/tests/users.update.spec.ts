import { test, expect } from '@playwright/test';

test.describe('Users API - UPDATE', () => {

  test('TC-API-005 - Update user with PUT successfully', async ({ request }) => {
    const payload = {
      id: 1,
      name: 'QA Automation User',
      username: 'qa_automation',
      email: 'qa_automation@example.com',
    };

    const response = await request.put('/users/1', {
      data: payload,
    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.name).toBe(payload.name);
    expect(body.username).toBe(payload.username);
    expect(body.email).toBe(payload.email);
  });

  test('TC-API-006 - Update user email with PATCH successfully', async ({ request }) => {
    const payload = {
      email: 'updated.qa@example.com',
    };

    const response = await request.patch('/users/1', {
      data: payload,
    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.email).toBe(payload.email);
  });

});