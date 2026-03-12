import { test, expect } from '@playwright/test';
import { LoginSteps } from '../steps/loginSteps';
import { BaseSteps } from '../steps/baseSteps';


//con npx playwright test --grep "@pruebaLogin" se ejecuta los test mediante tags
test('test con tag', { tag: '@pruebaLogin' }, async ({ page }) => {
    const baseSteps = new BaseSteps(page)
    const loginSteps = new LoginSteps(page)
    await baseSteps.navigateTo('https://homebanking-demo-tests.netlify.app/')
    await loginSteps.iniciarSesion('demo', 'demo123')

    await loginSteps.validarInicioExitoso();


});

