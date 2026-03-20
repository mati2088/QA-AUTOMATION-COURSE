import { test, expect } from '@playwright/test';
import { LoginSteps } from '../steps/loginSteps';
import 'dotenv/config'
import loginData from "../data/loginData.json"
//con npx playwright test --grep "@pruebaLogin" se ejecuta los test mediante tags
//, { tag: '@pruebaLogin' }

const url = process.env.URL ?? ''

test('Login Exitoso', {
    annotation: [{ type: "feature", description: "Autenticación" },]
}, async ({ page }) => {
    const loginSteps = new LoginSteps(page)
    await loginSteps.goToPage(url)
    const { usuarioValido, passwordValida } = loginData.loginExitoso
    await loginSteps.iniciarSesion(usuarioValido, passwordValida);

});

test('Login Cuenta bloquead', async ({ page }) => {
    const loginSteps = new LoginSteps(page)
    await loginSteps.goToPage(url)
    const { usuarioBloqueado, passwordBloqueada } = loginData.loginConCtaBloqueada
    await loginSteps.iniciarSesion(usuarioBloqueado, passwordBloqueada);
    await loginSteps.validarMensajeCtaBloqueada()
    //await loginSteps.waitFor(3000)
});
