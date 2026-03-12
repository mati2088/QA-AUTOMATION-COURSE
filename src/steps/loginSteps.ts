

import { Page, expect } from "@playwright/test";
import { BaseSteps } from "./baseSteps";
import { LoginPage } from "../bases/pages/loginPage";

export class LoginSteps extends BaseSteps {
    protected loginPage: LoginPage;
    //        ↑ protected: accesible en esta clase y en subclases

    constructor(page: Page) {
        super(page);
        this.loginPage = new LoginPage(page);
    }

    async iniciarSesion(username: string, password: string) {
        await this.loginPage.name.fill(username);
        await this.loginPage.passwordInput.fill(password);
        await this.loginPage.loginButton.click();
    }

    async validarInicioExitoso() {
        await expect(this.loginPage.title).toBeVisible()
    }
}

