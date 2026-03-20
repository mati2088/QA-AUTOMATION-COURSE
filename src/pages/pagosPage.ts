import { BasePage } from "./basePage";
import { Page } from "@playwright/test";

export class PagosPage extends BasePage {
    private readonly menuPagoServicios = this.page.locator('li[data-view="services"]');
    private readonly tituloPaginaPagos = this.page.getByRole('heading', { name: /pago de servicios/i });
    private readonly txtDescripcionPagoServicios = this.page.getByText('Paga tus servicios de forma rápida y segura');
    private readonly lblSeleccionaServicio = this.page.getByText('Selecciona el Servicio');
    private readonly cmbServicio = this.page.locator('#service-select');

    constructor(page: Page) {
        super(page);
    }

    async clickMenuPagoServicios() {
            await this.menuPagoServicios.waitFor({ state: 'visible' });

        await this.clickElement(this.menuPagoServicios);
    }

    async validarTituloVisible() {
        await this.validateElementVisible(this.tituloPaginaPagos);
    }

    async validarDescripcionVisible() {
    await this.validateElementVisible(this.txtDescripcionPagoServicios);
}

async validarLabelSeleccionaServicioVisible() {
    await this.validateElementVisible(this.lblSeleccionaServicio);
}

async validarComboServicioVisible() {
    await this.validateElementVisible(this.cmbServicio);
}

async validarComboServicioHabilitado() {
    await this.validateElementEnabled(this.cmbServicio);
}
}
