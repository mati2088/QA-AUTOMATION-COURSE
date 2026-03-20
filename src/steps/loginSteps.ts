
import {BaseSteps} from "../steps/baseSteps"
import {LoginPage} from "../pages/loginPage"
import { Page } from "@playwright/test"

export class LoginSteps extends BaseSteps{
    protected loginPage:LoginPage;

    constructor(page:Page){
        super(page);
        this.loginPage=new LoginPage(page);
    }

    async iniciarSesion(usuario:string,password:string):Promise<void>{
        await this.loginPage.fillUser(usuario);
        await this.loginPage.fillPassword(password);
        await this.loginPage.clickButtonIngresar();
        //await this.waitFor(3000);
    }

    /*async validarTextoExactamente(texto:string):Promise<void>{
        await this.loginPage.validarMensajeCtaBloqueada(texto);
    }*/

    async validarMensajeCtaBloqueada(){
        await this.loginPage.validarMensajeCtaBloqueada()
    }
    
}