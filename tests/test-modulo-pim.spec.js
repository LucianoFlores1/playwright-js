import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // --- ARRANGE: Login ---
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 1. Agregar toHaveURL() para validar el Dashboard
  // Esperamos a que la URL cambie tras el login exitoso
  await expect(page).toHaveURL(/dashboard/);
  

  // --- ACT: Navegar a PIM ---
  await page.getByRole('link', { name: 'PIM' }).click();

  // --- ASSERT: Validaciones de PIM ---

  // Definimos el localizador del encabezado para reusarlo
  const headingPIM = page.getByRole('heading', { name: 'PIM' });

  // 2. Agregar toBeVisible() para validar que el encabezado de PIM se muestra
  await expect(headingPIM).toBeVisible();

  // 3. Agregar toHaveText() para validar el texto del encabezado
  await expect(headingPIM).toHaveText('PIM');

  // 4. implementar un if para loguear el titulo actual
  // Obtenemos el texto del encabezado para la lógica del IF
  const textoTitulo = await headingPIM.textContent();

  if (textoTitulo === 'PIM') {
    console.log('✅ Verificación exitosa: El título coincide con "PIM"');
  } else {
      console.log('❌ Error: El título encontrado fue: ' + textoTitulo);
  }
});