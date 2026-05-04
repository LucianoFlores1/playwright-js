import { test, expect } from '@playwright/test';

// 3. Crear un array con combinaciones: válida, contraseña incorrecta, usuario inexistente
const escenariosDePrueba = [
  { user: 'Admin',    pass: 'admin123',     descripcion: 'Login Exitoso',    esperado: 'valido'   },
  { user: 'Admin',    pass: 'password_fail', descripcion: 'Clave Incorrecta',  esperado: 'invalido' },
  { user: 'NoExiste', pass: 'admin123',     descripcion: 'Usuario Inexistente', esperado: 'invalido' },
];

// 4. Recorrer el array con un for
for (const escenario of escenariosDePrueba) {

  test(`Prueba de Login: ${escenario.descripcion}`, async ({ page }) => {
    // --- ARRANGE ---
    // 2. Usamos variables extraídas del objeto en lugar de texto fijo
    const { user, pass, esperado } = escenario; 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // --- ACT ---
    await page.getByPlaceholder('Username').fill(user);
    await page.getByPlaceholder('Password').fill(pass);
    await page.getByRole('button', { name: 'Login' }).click();

    // --- ASSERT (5. Assert correcto según el caso) ---
    if (esperado === 'valido') {
      // Caso positivo: debe entrar al dashboard
      await expect(page).toHaveURL(/.*dashboard.*/);
      console.log(`✅ ${escenario.descripcion}: Navegó correctamente.`);
    } else {
      // 1. Caso negativo: validar mensaje de error "Invalid credentials"
      const alertaError = page.locator('.oxd-alert-content-text');
      await expect(alertaError).toBeVisible();
      await expect(alertaError).toContainText('Invalid credentials');
      console.log(`🛡️ ${escenario.descripcion}: Bloqueó el acceso y mostró error.`);
    }
  });
}