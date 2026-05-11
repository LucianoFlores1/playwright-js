import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pages/LoginPage');
const { RecruitmentPage } = require('../../pages/RecruitmentPage');




test(`Intentar eliminar un candidato`, async ({ page }) => {
    const login = new LoginPage(page);
    const recruit = new RecruitmentPage(page);

    // ARRANGE
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await login.login('Admin', 'admin123');
    await recruit.goToRecruitment();

    
    //guardamos el primer nombre del primer del primer candidato antes de eliminarlo
    await page.waitForTimeout(1000);
    const firstNamePage1 = await recruit.firstResultRow.innerText();
    console.log(firstNamePage1);

    // ACT
    await recruit.deleteFirstCandidate();

    const firstNamePage2 = await recruit.firstResultRow.innerText();
    await page.waitForTimeout(1000);
    console.log(firstNamePage2);

    // ASSERT
    // Validamos que la tabla haya eliminado el elemento
    expect(firstNamePage1).not.toBe(firstNamePage2);
  });
