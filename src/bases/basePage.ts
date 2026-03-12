import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
    protected page: Page;
    //        ↑ protected: accesible en esta clase y en todas las subclases
    //        ↑ readonly: la referencia no puede reasignarse después del constructor

    constructor(page: Page) {
        this.page = page;
    }

    // Navega a una URL relativa o absoluta
    async goto(path: string): Promise<void> {
        await this.page.goto(path);
    }

    // Escribe en un campo identificado por su label
    async fillByLabel(label: string, value: string): Promise<void> {
        await this.page.getByLabel(label).fill(value);
    }

    // Hace click en un botón por su texto visible
    async clickButton(name: string): Promise<void> {
        await this.page.getByRole("button", { name }).click();
    }

    // Verifica que un texto sea visible en la pantalla
    async expectTextVisible(text: string): Promise<void> {
        await expect(this.page.getByText(text)).toBeVisible();
    }
}