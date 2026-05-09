import { test, expect } from '@playwright/test';
const { RecruitmentPage } = require('../../pages/RecruitmentPage');
const {LoginPage} = require('../../pages/LoginPage');




test(`Debe registrar un candidato exitosamente `, async ({ page }) => {
    const recruit = new RecruitmentPage(page);
    const login = new LoginPage(page);

        // ARRANGE
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    login.login('Admin', 'admin123');
    await recruit.goToRecruitment();

        // ACT
    await recruit.addButton.click();
    await recruit.fillCandidateData('Luciano', 'Rafael', 'Flores', 'admin@example.com', '1234567890', 'software,engineer', 'Notas de prueba');

        // ASSERT
    await expect(page.getByText('Status: Application Initiated')).toBeVisible();
    });
