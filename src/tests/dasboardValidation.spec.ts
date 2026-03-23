import { test } from "@playwright/test";
import { LoginSteps } from "../steps/loginSteps";
import { DashboardValidationSteps } from "../steps/dashboardValidationSteps";
import loginData from "../data/loginData.json";
import "dotenv/config";

const url = process.env.URL ?? "";

  test.beforeEach(async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.goToPage(url);
    const {usuarioValido, passwordValida} = loginData.loginExitoso;
    await loginSteps.iniciarSesion(usuarioValido, passwordValida);
});

  test("Validar Datos Dashboard", async ({ page }) => {
    const dashboardSteps = new DashboardValidationSteps(page);
    await dashboardSteps.validarNombreUsuario();
    await dashboardSteps.validarCuentaCorriente();
    await dashboardSteps.validarCajaDeAhorro();
    await dashboardSteps.validarTarjetaCredito();
    await dashboardSteps.validarSaldoCuentaCorriente();
    await dashboardSteps.validarSaldoCajaDeAhorro();
    await dashboardSteps.validarSaldoTarjetaCredito();
  });