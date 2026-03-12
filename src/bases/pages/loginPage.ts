// src/pages/LoginPage.ts
import { Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class LoginPage extends BasePage {


    constructor(page: Page) {
        super(page);
    }

    get name() {
        return this.page.getByRole("textbox", { name: "Usuario" })
    }
    get passwordInput() {
        return this.page.getByRole("textbox", { name: "Contraseña" })
    }

    get loginButton() {
        return this.page.getByRole("button", { name: "Ingresar" })
    }

    get title() {
        return this.page.getByRole("heading", { name: "Panel Principal" })
    }
}