import { test, expect } from '@playwright/test';
// 1. Traemos nuestro "molde" del archivo que creamos
const { RecruitmentPage } = require('../../pages/RecruitmentPage');


test('test', async ({ page }) => {
// Creacion de la instancia de la clase recruitmentPage
  const recruitmentPage = new RecruitmentPage(page);

// ARRANGE
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // ACT
  //En lugar de buscar el link aquí, le pedimos al objeto que lo haga
  await recruitmentPage.goToRecruitment();

  // ASSERT
  // 1. Validamos que el heading sea visible
  await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
  
  // 2. Validamos la URL usando una expresión regular
  // los expect no se ponen denttro del archivo de la pagina
  // RecruitmentPage.js sino que se queda en el archivo del Test
  // Esta es una pequeña prueba para el POO
  await expect(page).toHaveURL(/.*\/recruitment/);  
});