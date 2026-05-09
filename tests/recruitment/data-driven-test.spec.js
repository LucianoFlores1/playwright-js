import { test, expect } from '@playwright/test';
const { RecruitmentPage } = require('../../pages/RecruitmentPage');
const {LoginPage} = require('../../pages/LoginPage');

const emailsInvalidos = [
  { mail: 'testsinarroba.com', 
    desc: 'Email sin @',
    firstName: 'Luciano',
    middleName: 'Rafael',
    lastName: 'Flores',
    phone: '1234567890',
    job: 'software,engineer',
    notes: 'Notas de prueba'},
  { mail: 'usuario@dominio',    
    desc: 'Email sin punto',
    firstName: 'Luciano',
    middleName: 'Rafael',
    lastName: 'Flores',
    phone: '1234567890',
    job: 'software,engineer',
    notes: 'Notas de prueba' },
  { mail: '@dominio.com',       
    desc: 'Email sin usuario',
    firstName: 'Luciano',
    middleName: 'Rafael',
    lastName: 'Flores',
    phone: '1234567890',
    job: 'software,engineer',
    notes: 'Notas de prueba'},
  { mail: 'admin@example.com',      
    desc: 'Email que cumple con los requisitos (debería dar error)',
    firstName: 'Luciano',
    middleName: 'Rafael',
    lastName: 'Flores',
    phone: '1234567890',
    job: 'software,engineer',
    notes: 'Notas de prueba'},
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
    await recruit.fillCandidateData(item.firstName, item.middleName, item.lastName, item.mail, item.phone, item.job, item.notes);

        // ASSERT
    await expect(page.getByText('Expected format: admin@')).toBeVisible();
    });
}