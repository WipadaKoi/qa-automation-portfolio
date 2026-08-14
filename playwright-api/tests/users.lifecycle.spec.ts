import { test, expect } from '@playwright/test';

test('TC-API-008 - User lifecycle API flow', async ({ request }) => {
  const uniqueId = Date.now();

  const createPayload = {
    name: `QA User ${uniqueId}`,
    username: `qa_user_${uniqueId}`,
    email: `qa_${uniqueId}@example.com`,
  };

  const createResponse = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: createPayload,
    }
  );

  expect(createResponse.status()).toBe(201);

  const createdUser = await createResponse.json();

  expect(createdUser).toHaveProperty('id');

  const userId = createdUser.id;

  const updateResponse = await request.patch(
    `https://jsonplaceholder.typicode.com/users/1`,
    {
      data: {
        email: `updated_${uniqueId}@example.com`,
      },
    }
  );

  expect(updateResponse.status()).toBe(200);

  const updatedUser = await updateResponse.json();

  expect(updatedUser.email).toBe(
    `updated_${uniqueId}@example.com`
  );

  const deleteResponse = await request.delete(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(deleteResponse.status()).toBe(200);
});