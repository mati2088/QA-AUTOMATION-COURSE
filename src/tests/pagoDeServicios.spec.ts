import { test, expect } from '@playwright/test';
import { LoginSteps } from '../steps/loginSteps';
import { PagosSteps } from '../steps/pagosSteps';
import 'dotenv/config'

const user = process.env.USUARIO ?? ''
const password = process.env.PASSWORD ?? ''
const url = process.env.URL ?? ''

test.describe('Pago de Servicios', () => {
    let loginSteps: LoginSteps;
    let pagosSteps: PagosSteps;

    test.beforeEach(async ({ page }) => {
        loginSteps = new LoginSteps(page);
        pagosSteps = new PagosSteps(page);
        await loginSteps.goToPage(url);
        await loginSteps.iniciarSesion(user, password);
    });

    test('Ingresar a pago de servicios exitosamente', async () => {
        await pagosSteps.irAPagoDeServicios();
        await pagosSteps.validarPaginaPagosCargada();
    });
});
