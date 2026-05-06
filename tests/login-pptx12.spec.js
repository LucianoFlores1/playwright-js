const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage'); // Importamos nuestra clase

test('Login exitoso usando Page Object Model', async ({ page }) => {
  // 1. Arrange: Creamos la instancia y navegamos
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // 2. Act: Usamos el método login del Page Object
  await loginPage.login('Admin', 'admin123');

  // 3. Assert: La validación sigue viviendo en el test[cite: 3]
  await expect(page).toHaveURL(/.*dashboard.*/);
});