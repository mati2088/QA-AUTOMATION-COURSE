import { Page } from "@playwright/test";
import { BaseSteps } from "./baseSteps";
import { LogoutPage } from "../pages/logoutPage";



export class LogoutSteps extends BaseSteps{

    protected logoutPage : LogoutPage


    constructor(page:Page){
        super(page);
        this.logoutPage=new LogoutPage(page);
    }

    //cerrar sesion + validar texto del final

    async cerrarSesion():Promise<void>{
        await this.logoutPage.clickBotonSalir()
        await this.logoutPage.validarTextoCerrarSesion();
        await this.logoutPage.clickBotonConfirmar()
        await this.logoutPage.validarTextoSesionCerrada();
    }



}