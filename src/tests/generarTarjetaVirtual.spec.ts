import { test, expect } from '@playwright/test';
import { LoginSteps } from '../steps/loginSteps';
import { BaseSteps } from '../steps/baseSteps';
import { TarjetaVirtualSteps } from '../steps/tarjetaVirtualSteps';

test.beforeEach(
    async ({ page }) => {
        const baseSteps = new BaseSteps(page)
        const loginSteps = new LoginSteps(page)
        await baseSteps.navigateTo('https://homebanking-demo-tests.netlify.app/')
        await loginSteps.iniciarSesion('demo', 'demo123')

        await loginSteps.validarInicioExitoso();
    }

)

test('Generar tarjeta virutal', { tag: '@pruebaTarjeta' }, async ({ page }) => {
    const tarjetaVirtualSteps = new TarjetaVirtualSteps(page)
    await tarjetaVirtualSteps.irSeccionTarjetaVirtual()//click tarjeta virutal 

    //seleccionar segunda cuenta
    //click en generar 
    //validar que la tarjeta se genero

});


