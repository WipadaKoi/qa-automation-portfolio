import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test.describe('TodoMVC - Todo Management', () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test('TC01 - Add a new todo', async ({ page }) => {
    await todoPage.addTodo('Learn Playwright');

    await todoPage.expectTodoCount(1);

    await expect(
      page.getByText('Learn Playwright')
    ).toBeVisible();
  });

  test('TC02 - Add multiple todos', async ({ page }) => {
  await todoPage.addTodo('Learn Playwright');
  await todoPage.addTodo('Learn API Testing');
  await todoPage.addTodo('Learn k6');

  await todoPage.expectTodoCount(3);

  await expect(page.getByText('Learn Playwright')).toBeVisible();
  await expect(page.getByText('Learn API Testing')).toBeVisible();
  await expect(page.getByText('Learn k6')).toBeVisible();
});

  test('TC03 - Mark todo as completed', async ({ page }) => {
  await todoPage.addTodo('Learn Playwright');

  const todoItem = page.locator('.todo-list li').filter({
    hasText: 'Learn Playwright',
  });

  await todoItem.getByRole('checkbox').check();

  await expect(todoItem).toHaveClass(/completed/);
});

  test('TC04 - Edit todo', async ({ page }) => {
  await todoPage.addTodo('Learn Playwright');

  const todoItem = page.locator('.todo-list li').filter({
    hasText: 'Learn Playwright',
  });

  await todoItem.getByText('Learn Playwright').dblclick();

  const editInput = todoItem.locator('input.edit');

  await editInput.fill('Learn Playwright Advanced');
  await editInput.press('Enter');

  await expect(
    page.getByText('Learn Playwright Advanced')
  ).toBeVisible();
});

  test('TC05 - Delete todo', async ({ page }) => {
  await todoPage.addTodo('Learn Playwright');

  const todoItem = page.locator('.todo-list li').filter({
    hasText: 'Learn Playwright',
  });

  await todoItem.hover();
  await todoItem.locator('button.destroy').click();

  await todoPage.expectTodoCount(0);
});

  test('TC06 - Filter Active todos', async ({ page }) => {
  await todoPage.addTodo('Active Todo');
  await todoPage.addTodo('Completed Todo');

  const completedTodo = page.locator('.todo-list li').filter({
    hasText: 'Completed Todo',
  });

  await completedTodo.getByRole('checkbox').check();

  await page.getByRole('link', { name: 'Active' }).click();

  await expect(page.getByText('Active Todo')).toBeVisible();
  await expect(page.getByText('Completed Todo')).not.toBeVisible();
});

  test('TC07 - Filter Completed todos', async ({ page }) => {
  await todoPage.addTodo('Active Todo');
  await todoPage.addTodo('Completed Todo');

  const completedTodo = page.locator('.todo-list li').filter({
    hasText: 'Completed Todo',
  });

  await completedTodo.getByRole('checkbox').check();

  await page.getByRole('link', { name: 'Completed' }).click();

  await expect(page.getByText('Completed Todo')).toBeVisible();
  await expect(page.getByText('Active Todo')).not.toBeVisible();
});

  test('TC08 - Clear completed todos', async ({ page }) => {
  await todoPage.addTodo('Active Todo');
  await todoPage.addTodo('Completed Todo');

  const completedTodo = page.locator('.todo-list li').filter({
    hasText: 'Completed Todo',
  });

  await completedTodo.getByRole('checkbox').check();

  await page
    .getByRole('button', { name: 'Clear completed' })
    .click();

  await expect(page.getByText('Completed Todo')).not.toBeVisible();
  await expect(page.getByText('Active Todo')).toBeVisible();

  await todoPage.expectTodoCount(1);
  });
});