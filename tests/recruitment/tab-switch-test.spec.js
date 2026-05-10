import { test, expect } from '@playwright/test';
const { RecruitmentPage } = require('../../pages/RecruitmentPage');
const {LoginPage} = require('../../pages/LoginPage');


test('Debe filtrar candidatos por el filtro de la vacante', async ({ page }) => {
    const recruit = new RecruitmentPage(page);
    const login = new LoginPage(page);
    
    // ARRANGE
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await login.login('Admin', 'admin123');
  await recruit.goToRecruitment();
  //guardamos el primer nombre del primer resultado antes de aplicar el cambio de paginacion
  await page.waitForTimeout(1000);
  const firstNamePage1 = await recruit.firstResultRow.innerText();
  console.log(firstNamePage1);


  // ACT
  await recruit.tabVacancies.click();
  const firstNamePage2 = await recruit.firstResultRow.innerText();
  await page.waitForTimeout(1000);
  console.log(firstNamePage2);

  // ASSERT
  // Verificamos que el primer nombre de las tablas sean distintos
  expect(firstNamePage1).not.toBe(firstNamePage2);
});