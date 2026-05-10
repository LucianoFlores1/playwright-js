import { test, expect } from '@playwright/test';
const { RecruitmentPage } = require('../../pages/RecruitmentPage');
const {LoginPage} = require('../../pages/LoginPage');


test('Debe filtrar candidatos por nombre', async ({ page }) => {
    const recruit = new RecruitmentPage(page);
    const login = new LoginPage(page);
    // ARRANGE
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await login.login('Admin', 'admin123');
  await recruit.goToRecruitment();

  // ACT
  await recruit.vacancyFilterSelect();


  // ASSERT
  // Verificamos que al menos un resultado aparezca en la tabla
  await expect(recruit.firstResultRow).toBeVisible();
});