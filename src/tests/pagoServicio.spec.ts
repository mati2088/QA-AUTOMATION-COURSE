import { test } from '@playwright/test'
import { LoginSteps } from '../steps/loginSteps';
import { BaseSteps } from '../steps/baseSteps';
import { PagarServicioSteps } from '../steps/pagarServicioSteps';
import { CerrarSesionPage } from '../bases/pages/cerrarSesionPage';

test.beforeEach(
    async ({ page }) => {
        const baseSteps = new BaseSteps(page)
        const loginSteps = new LoginSteps(page)
        await baseSteps.navigateTo('https://homebanking-demo-tests.netlify.app/')
        await loginSteps.iniciarSesion('demo', 'demo123')
        await loginSteps.validarInicioExitoso();
    }
)

test('Pagar servicio', { tag: '@pagoServicio' }, async ({ page }) => {
    
    const pagarServicioSteps = new PagarServicioSteps(page)
    await pagarServicioSteps.irSeccionPagarServicio()
    await page.waitForTimeout(3000);

    const cerrarSesionSteps = new PagarServicioSteps(page)
    await cerrarSesionSteps.irSeccionCerrarSesion()
    await page.waitForTimeout(3000);

    const validarCerrarSesionSteps = new PagarServicioSteps(page)
    await validarCerrarSesionSteps.validarCerrarSesion()
    await page.waitForTimeout(3000);
    
})