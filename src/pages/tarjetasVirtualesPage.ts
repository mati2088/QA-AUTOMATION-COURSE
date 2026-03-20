import { BasePage } from "./basePage";
import {Page} from "@playwright/test"


export class TarjetasVirtualesPage extends BasePage{
    //locator 
    private seccionTarjetasVirtuales = this.page.getByRole('listitem')
                                            .filter({ hasText: 'Tarjeta Virtual' })

    //boton generar tarjeta
    //validar texto visa
    

    constructor(page:Page){
        super(page)
    }

    async clickSeccionTarjetasVirtuales():Promise<void>{
        await this.clickElement(this.seccionTarjetasVirtuales);
    }
}