import { Page } from "@playwright/test";
import { BasePage } from "./basePage";



export class LogoutPage extends BasePage{
    //atributos/locator
    //click en boton salir 
    //validar texto ¿Estás seguro que deseas cerrar sesión?
    //click en confirmar

    private botonSalir = this.page.getByRole("button",{name:"Salir"})
    private textoCerrarSesion= this.page.getByText("¿Estás seguro que deseas cerrar sesión?")
    private botonConfirmar = this.page.getByRole("button",{name:"Confirmar"})
    private textoSesionCerrada = this.page.getByText("Sesión cerrada correctamente")

    constructor(page:Page){
        super(page);
        
    }

    //metodos

    async clickBotonSalir():Promise<void>{
        await this.clickElement(this.botonSalir)
    }

    async clickBotonConfirmar():Promise<void>{
        await this.clickElement(this.botonConfirmar)
    }

    async validarTextoCerrarSesion():Promise<void>{
        await this.validateElementVisible(this.textoCerrarSesion)
    }

    async validarTextoSesionCerrada():Promise<void>{
        await this.validateElementVisible(this.textoSesionCerrada)
    }


}