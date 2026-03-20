import { Page } from "@playwright/test";
import { BaseSteps } from "./baseSteps";
import { PagosPage } from "../pages/pagosPage";

export class PagosSteps extends BaseSteps {
    private pagosPage: PagosPage;

    constructor(page: Page) {
        super(page);
        this.pagosPage = new PagosPage(page);
    }

    async irAPagoDeServicios() {
        await this.pagosPage.clickMenuPagoServicios();
    }

    async validarPaginaPagosCargada() {
        await this.pagosPage.validarTituloVisible();
        await this.pagosPage.validarDescripcionVisible();
        await this.pagosPage.validarLabelSeleccionaServicioVisible();
        await this.pagosPage.validarComboServicioVisible();
        await this.pagosPage.validarComboServicioHabilitado();
    }
}
