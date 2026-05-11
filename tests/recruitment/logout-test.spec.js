import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pages/LoginPage');
const { RecruitmentPage } = require('../../pages/RecruitmentPage');




test(`Test de logout`, async ({ page }) => {
    const login = new LoginPage(page);
    const recruit = new RecruitmentPage(page);

    // ARRANGE
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await login.login('Admin', 'admin123');
    await recruit.goToRecruitment();

    // ACT
    await recruit.logout();

    // ASSERT
    // Validamos que la tabla haya eliminado el elemento
    await expect(page).toHaveURL(/.*\/login/);
  });
