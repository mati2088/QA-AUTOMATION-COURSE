// src/steps/BaseSteps.ts
import { Page, expect } from "@playwright/test";

export class BaseSteps {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Verifica que la URL actual contiene el path esperado
    async expectURL(expectedURL: string): Promise<void> {
        await expect(this.page).toHaveURL(expectedURL);
    }

    // Verifica que el título de la pestaña es el esperado
    async expectTitle(title: string): Promise<void> {
        await expect(this.page).toHaveTitle(title);
    }

    // Espera N milisegundos (usar con moderación, preferir auto-waiting)
    async wait(ms: number): Promise<void> {
        await this.page.waitForTimeout(ms);
    }

    // Recarga la página
    async reload(): Promise<void> {
        await this.page.reload();
    }


    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }
}

