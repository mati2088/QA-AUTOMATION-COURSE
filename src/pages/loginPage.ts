import { BasePage } from "../pages/basePage";
import {Page} from "@playwright/test"


export class LoginPage extends BasePage //extender los metodos de basePage por ej el clickElement
{   
    //saca los selectores/locators del front/page
    private readonly inputUser     = this.page.getByRole("textbox", {name:"Usuario"});
    private readonly inputPassword = this.page.getByRole("textbox",{name:"Contraseña"})
    private readonly botonIngresar = this.page.getByRole("button",{name:"Ingresar"})
    private readonly mensajeCuentaBloqueada = this.page.getByText("Tu cuenta ha sido bloqueada temporalmente. Contacta con soporte.")



    //cuando se pueda no usar por id o por xpath 
   
    constructor(page:Page){
        super(page) //hace referencia al constructor de BasePage
    }

    async fillUser(usuario:string):Promise<void>{
        await this.fillData(this.inputUser,usuario);
    }

    async fillPassword(password:string):Promise<void>{
        await this.fillData(this.inputPassword,password)
    }

   async clickButtonIngresar():Promise<void>{
    await this.clickElement(this.botonIngresar)
   }

   async validarMensajeCtaBloqueada():Promise<void>{
    await this.validateElementVisible(this.mensajeCuentaBloqueada)

   }



}