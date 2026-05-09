// Escenario Negativo - Campos Obligatorios
import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pages/LoginPage');
const { RecruitmentPage } = require('../../pages/RecruitmentPage');


test('Debe impedir guardar un candidato vacío y exigir los campos requeridos', async ({ page }) => {
    const recruit = new RecruitmentPage(page);
    const login = new LoginPage(page);
    // ARRANGE
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await login.login('Admin', 'admin123');
  await recruit.goToRecruitment();

    // ACT
  await recruit.addButton.click();
  await recruit.saveButton.click();

    // ASSERT
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
  await expect(page.getByText('Required').nth(2)).toBeVisible();
});