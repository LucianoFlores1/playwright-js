import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
// ARRANGE
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // ACT
  await page.getByRole('link', { name: 'Recruitment' }).click();

  // ASSERT
  // 1. Validamos que el heading sea visible
  await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();

  // 2. Validamos la URL usando una expresión regular
  await expect(page).toHaveURL(/.*recruitment.*/);
});