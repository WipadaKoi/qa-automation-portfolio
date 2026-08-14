import { test, expect } from '@playwright/test';

test.describe('Users API', () => {

  test('TC-API-001 - Get users successfully', async ({ request }) => {
    const response = await request.get('/users');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);

    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('email');
  });

  test('TC-API-002 - Get user by ID successfully', async ({ request }) => {
    const response = await request.get('/users/1');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('email');
    expect(body).toHaveProperty('username');
  });

  test('TC-API-003 - Get user with invalid ID returns 404', async ({ request }) => {
    const response = await request.get('/users/9999');

    expect(response.status()).toBe(404);

    const body = await response.json();

    expect(body).toEqual({});
  });

});