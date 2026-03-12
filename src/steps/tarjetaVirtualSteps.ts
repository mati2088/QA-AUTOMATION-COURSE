

import { Page, expect } from "@playwright/test";
import { BaseSteps } from "./baseSteps";
import { TarjetaVirtualPage } from "../bases/pages/tarjetaVirtualPage";

export class TarjetaVirtualSteps extends BaseSteps {
    protected tarjetaVirtualPage: TarjetaVirtualPage;
    //        ↑ protected: accesible en esta clase y en subclases

    constructor(page: Page) {
        super(page);
        this.tarjetaVirtualPage = new TarjetaVirtualPage(page);
    }

    async irSeccionTarjetaVirtual() {
        await this.tarjetaVirtualPage.irSeccionTarjetaVirtual.click


    }
}