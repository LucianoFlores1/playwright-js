import { test, expect } from '@playwright/test';
const { RecruitmentPage } = require('../../pages/RecruitmentPage');
const {LoginPage} = require('../../pages/LoginPage');

const emailsInvalidos = [
  { mail: 'testsinarroba.com', desc: 'Email sin @' },
  { mail: 'usuario@dominio',    desc: 'Email sin punto' },
  { mail: '@dominio.com',       desc: 'Email sin usuario' },
  { mail: 'admin@example.com',      desc: 'Email que cumple con los requisitos (deberia dar error)' },
];


for (const item of emailsInvalidos) {
    test(`Recruitmen negativo - ${item.desc}`, async ({ page }) => {
        const recruit = new RecruitmentPage(page);
        const login = new LoginPage(page);

        // ARRANGE
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    login.login('Admin', 'admin123');
    await recruit.goToRecruitment();

        // ACT
    await recruit.addButton.click();
    await recruit.fillCandidateData('Luciano', 'Rafael', 'Flores', item.mail);

        // ASSERT
    await expect(page.getByText('Expected format: admin@')).toBeVisible();
    });
}