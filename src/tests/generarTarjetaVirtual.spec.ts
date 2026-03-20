import { test, expect, Page } from "@playwright/test";
import { LoginSteps } from "../steps/loginSteps";
import 'dotenv/config'
import loginData from "../data/loginData.json"
import { TarjetaVirtualSteps } from "../steps/tarjetaVirtualSteps";
import { LogoutSteps } from "../steps/logoutSteps";

const url = process.env.URL ?? ''

let page: Page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    page = await context.newPage()
    const loginSteps = new LoginSteps(page)
    await loginSteps.goToPage(url)
    const { usuarioValido, passwordValida } = loginData.loginExitoso
    await loginSteps.iniciarSesion(usuarioValido, passwordValida);
});

test.afterAll(async () => {
    const logoutSteps = new LogoutSteps(page);
    await logoutSteps.cerrarSesion();
    //await logoutSteps.waitFor(3000)
});



test("Generar tarjeta virtual exitosamente", async () => {
   const tarjetasVirtualesSteps = new TarjetaVirtualSteps(page)
   await tarjetasVirtualesSteps.irSeccionTarjetaVirtual();
   
});

