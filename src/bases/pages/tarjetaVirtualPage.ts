import { Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class TarjetaVirtualPage extends BasePage {


    constructor(page: Page) {
        super(page);
    }

    get irSeccionTarjetaVirtual() {
        return this.page.getByRole("textbox", { name: "Tarjeta Virtual " })
    }

}
