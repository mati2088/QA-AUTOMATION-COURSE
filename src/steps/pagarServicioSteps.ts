import { Page } from "@playwright/test";
import { BaseSteps } from "./baseSteps";
import { PagarSeriviciopage } from "../bases/pages/pagarServicioPage";
import { CerrarSesionPage } from "../bases/pages/cerrarSesionPage";

export class PagarServicioSteps extends BaseSteps {
    protected pagarServicioPage: PagarSeriviciopage; 
    protected cerrarSesionPage: CerrarSesionPage;
    protected validarSesionPage: CerrarSesionPage;
    
    constructor(page: Page) {
        super(page);
        this.pagarServicioPage = new PagarSeriviciopage(page);
        this.cerrarSesionPage = new CerrarSesionPage(page);
        this.validarSesionPage = new CerrarSesionPage(page);
    }

    async irSeccionPagarServicio() {
        await this.pagarServicioPage.irSeccionPagarServicio.click();

    }
    //Ir a la sesión de cerrar sesión
    async irSeccionCerrarSesion() {
        await this.cerrarSesionPage.cerrarSesion.click();
    }

    //confirma cerrar sesión
    async validarCerrarSesion() {
        await this.validarSesionPage.validarCierreSesion.click();
    }
}