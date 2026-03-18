import { test, expect} from '@playwright/test';
import { LoginSteps } from '../steps/loginSteps';
import 'dotenv/config'
//con npx playwright test --grep "@pruebaLogin" se ejecuta los test mediante tags
//, { tag: '@pruebaLogin' }

const user=process.env.USUARIO ?? ''
const password=process.env.PASSWORD ?? ''
const url=process.env.URL ?? ''

test('Login Exitoso', async ({ page }) => {
    const loginSteps = new LoginSteps(page)
    await loginSteps.goToPage(url)
     await loginSteps.iniciarSesion(user,password);
});

test('Login Cuenta bloquead', async ({ page }) => {
    const loginSteps = new LoginSteps(page)
    await loginSteps.goToPage(url)
    await loginSteps.iniciarSesion("locked","locked");
    await loginSteps.validarMensajeCtaBloqueada()
   
});
