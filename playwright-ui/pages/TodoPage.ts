import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly todoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.todoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(text: string) {
    await this.todoInput.fill(text);
    await this.todoInput.press('Enter');
  }

  getTodoItem(text: string) {
    return this.todoItems.filter({
      hasText: text,
    });
  }

  async completeTodo(text: string) {
    const item = this.getTodoItem(text);
    await item.getByRole('checkbox').check();
  }

  async editTodo(oldText: string, newText: string) {
    const item = this.getTodoItem(oldText);

    await item.getByText(oldText).dblclick();

    const editInput = item.locator('input.edit');

    await editInput.fill(newText);
    await editInput.press('Enter');
  }

  async deleteTodo(text: string) {
    const item = this.getTodoItem(text);

    await item.hover();
    await item.locator('button.destroy').click();
  }

  async filterBy(filter: 'All' | 'Active' | 'Completed') {
    await this.page
      .getByRole('link', { name: filter, exact: true })
      .click();
  }

  async clearCompleted() {
    await this.page
      .getByRole('button', { name: 'Clear completed' })
      .click();
  }

  async expectTodoCount(count: number) {
    await expect(this.todoItems).toHaveCount(count);
  }

  async expectTodoVisible(text: string) {
    await expect(this.getTodoItem(text)).toBeVisible();
  }

  async expectTodoHidden(text: string) {
    await expect(this.getTodoItem(text)).not.toBeVisible();
  }
}