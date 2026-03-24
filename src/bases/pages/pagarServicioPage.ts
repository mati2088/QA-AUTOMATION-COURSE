import { Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class PagarSeriviciopage extends BasePage{
    constructor(page: Page) {
        super(page);
    }

    get irSeccionPagarServicio() {
        return this.page.locator('li.menu-item[data-view="services"]')
    }
}