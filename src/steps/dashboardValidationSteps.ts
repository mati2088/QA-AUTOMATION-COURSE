import { BaseSteps } from "../steps/baseSteps";
import { DashboardValidationPage } from "../pages/dashboardValidationPage";
import { Page } from "@playwright/test";

export class DashboardValidationSteps extends BaseSteps {
  protected dashboardValidationPage: DashboardValidationPage;

  constructor(page: Page) {
    super(page);
    this.dashboardValidationPage = new DashboardValidationPage(page);
  }

  async validarNombreUsuario(): Promise<void> {
    await this.dashboardValidationPage.validarNombreUsuario();
  }

  async validarCuentaCorriente(): Promise<void> {
    await this.dashboardValidationPage.validarCuentaCorriente();
  }

  async validarCajaDeAhorro(): Promise<void> {
    await this.dashboardValidationPage.validarCajaDeAhorro();
  }

  async validarTarjetaCredito(): Promise<void> {
    await this.dashboardValidationPage.validarTarjetaCredito();
  }

  async validarSaldoCuentaCorriente(): Promise<void> {
    await this.dashboardValidationPage.validarSaldoCuentaCorriente();
  }

  async validarSaldoCajaDeAhorro(): Promise<void> {
    await this.dashboardValidationPage.validarSaldoCajaDeAhorro();
  }

  async validarSaldoTarjetaCredito(): Promise<void> {
    await this.dashboardValidationPage.validarSaldoTarjetaCredito();
  }
}
