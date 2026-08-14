import { test, expect } from '@playwright/test';

test.describe('Users API - POST', () => {

  test('TC-API-004 - Create user successfully', async ({ request }) => {

    const uniqueId = Date.now();

    const payload = {
      name: `QA User ${uniqueId}`,
      username: `qa_user_${uniqueId}`,
      email: `qa_${uniqueId}@example.com`,
    };

    const response = await request.post('/users', {
  data: payload,
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.name).toBe(payload.name);
    expect(body.username).toBe(payload.username);
    expect(body.email).toBe(payload.email);
    expect(body).toHaveProperty('id');
  });

});