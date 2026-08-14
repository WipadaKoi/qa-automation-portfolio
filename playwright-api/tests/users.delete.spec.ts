import { test, expect } from '@playwright/test';

test.describe('Users API - DELETE', () => {

  test('TC-API-007 - Delete user successfully', async ({ request }) => {
    const response = await request.delete('/users/1');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body).toEqual({});
  });

});