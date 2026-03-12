test('login exitoso', async ({ page }) => {
    await page.goto('/login');


    // Llenar los campos
    await page.getByLabel('Email').fill('usuario@test.com');
    await page.getByLabel('Contraseña').fill('MiPass123!');


    // Hacer click en el boton de submit
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();


    // Verificar que redirige al dashboard
    await expect(page).toHaveURL('/dashboard');
});
