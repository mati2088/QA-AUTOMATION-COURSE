import { test } from "@playwright/test";
import { LoginSteps } from "../steps/loginSteps";
import { DashboardValidationSteps } from "../steps/dashboardValidationSteps";
import "dotenv/config";

const url = process.env.URL ?? "";

test.describe("Dashboard Validation Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.goToPage(url);
    await loginSteps.iniciarSesion("demo", "demo123");
  });

  test("Validar nombre de usuario Juan Perez", async ({ page }) => {
    const dashboardSteps = new DashboardValidationSteps(page);
    await dashboardSteps.validarNombreUsuario();
  });

  test("Validar que Cuenta Corriente es visible", async ({ page }) => {
    const dashboardSteps = new DashboardValidationSteps(page);
    await dashboardSteps.validarCuentaCorriente();
  });

  test("Validar que Caja de Ahorro es visible", async ({ page }) => {
    const dashboardSteps = new DashboardValidationSteps(page);
    await dashboardSteps.validarCajaDeAhorro();
  });

  test("Validar que Tarjeta de Crédito es visible", async ({ page }) => {
    const dashboardSteps = new DashboardValidationSteps(page);
    await dashboardSteps.validarTarjetaCredito();
  });

  test("Validar Saldo disponible en Cuenta Corriente", async ({ page }) => {
    const dashboardSteps = new DashboardValidationSteps(page);
    await dashboardSteps.validarSaldoCuentaCorriente();
  });

  test("Validar Saldo disponible en Caja de Ahorro", async ({ page }) => {
    const dashboardSteps = new DashboardValidationSteps(page);
    await dashboardSteps.validarSaldoCajaDeAhorro();
  });

  test("Validar Disponible en Tarjeta de Crédito", async ({ page }) => {
    const dashboardSteps = new DashboardValidationSteps(page);
    await dashboardSteps.validarSaldoTarjetaCredito();
  });
});
