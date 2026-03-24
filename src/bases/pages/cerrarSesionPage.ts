import test from "@playwright/test"
import { BasePage } from "../basePage";

export class CerrarSesionPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get cerrarSesion() {
        return this.page.locator("#logout-btn")
    }
    get validarCierreSesion() {
        return this.page.locator("#modal-confirm")
    }

}