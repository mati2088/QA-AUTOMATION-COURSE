import { BasePage } from "../pages/basePage";
import { Page } from "@playwright/test";

export class DashboardValidationPage extends BasePage {
  // Nombre de usuario en el header
  private readonly nombreUsuario = this.page.getByText("Juan Pérez");

  // Cuentas
  private readonly cuentaCorriente = this.page
    .getByText("Cuenta Corriente")
    .first();
  private readonly cajaDeAhorro = this.page.getByText("Caja de Ahorro").first();
  private readonly tarjetaCredito = this.page
    .getByText("Tarjeta de Crédito")
    .first();

  // Saldos - usamos nth() para diferenciar cada card
  private readonly saldoCuentaCorriente = this.page
    .getByText("Saldo disponible")
    .nth(0);
  private readonly saldoCajaDeAhorro = this.page
    .getByText("Saldo disponible")
    .nth(1);
  private readonly saldoTarjetaCredito = this.page
    .getByText("Disponible")
    .first();

  constructor(page: Page) {
    super(page);
  }

  async validarNombreUsuario(): Promise<void> {
    await this.validateElementVisible(this.nombreUsuario);
  }

  async validarCuentaCorriente(): Promise<void> {
    await this.validateElementVisible(this.cuentaCorriente);
  }

  async validarCajaDeAhorro(): Promise<void> {
    await this.validateElementVisible(this.cajaDeAhorro);
  }

  async validarTarjetaCredito(): Promise<void> {
    await this.validateElementVisible(this.tarjetaCredito);
  }

  async validarSaldoCuentaCorriente(): Promise<void> {
    await this.validateElementVisible(this.saldoCuentaCorriente);
  }

  async validarSaldoCajaDeAhorro(): Promise<void> {
    await this.validateElementVisible(this.saldoCajaDeAhorro);
  }

  async validarSaldoTarjetaCredito(): Promise<void> {
    await this.validateElementVisible(this.saldoTarjetaCredito);
  }
}
