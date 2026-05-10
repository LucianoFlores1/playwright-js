import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pages/LoginPage');
const { RecruitmentPage } = require('../../pages/RecruitmentPage');

const nombresABuscar = ['Admin', 'Test', 'QA User'];

for (const nombre of nombresABuscar) {
  test(`Intentar buscar a ${nombre} por palabra clave`, async ({ page }) => {
    const login = new LoginPage(page);
    const recruit = new RecruitmentPage(page);

    // ARRANGE
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await login.login('Admin', 'admin123');
    await recruit.goToRecruitment();

    // ACT
    await recruit.searchByKeyword(nombre);

    // ASSERT
    // Aquí solo validamos que la tabla responda")
    await expect(recruit.firstResultRow).toBeVisible();
  });
}