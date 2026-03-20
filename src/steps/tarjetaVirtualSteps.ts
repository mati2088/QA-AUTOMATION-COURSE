

import { Page, expect } from "@playwright/test";
import { BaseSteps } from "./baseSteps";
import { TarjetasVirtualesPage } from "../pages/tarjetasVirtualesPage";

export class TarjetaVirtualSteps extends BaseSteps {
    protected tarjetaVirtualPage: TarjetasVirtualesPage;
    //        ↑ protected: accesible en esta clase y en subclases

    constructor(page: Page) {
        super(page);
        this.tarjetaVirtualPage = new TarjetasVirtualesPage(page);
    }

    async irSeccionTarjetaVirtual() {
        await this.tarjetaVirtualPage.clickSeccionTarjetasVirtuales();


    }
}