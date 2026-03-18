import {Page,Locator,expect} from "@playwright/test"


export class BasePage {
     protected page:Page; //this hace referencia a este atributo 

     constructor(page:Page){
        this.page=page; //=page hace referencia al valor que le pasemos por parametro
     }

     //estos metodos se van a usar en alguna page

     async clickElement(locator:Locator):Promise <void>{
        await locator.click();
     }

     async fillData(locator:Locator,texto:string):Promise<void>{
        await locator.fill(texto)
     }

     async validateElementVisible(locator:Locator):Promise<void>{
        await expect(locator).toBeVisible();
     }

     /*async validateTextExact(locator:Locator,texto:string):Promise<void>{
      await expect(locator).toHaveText(texto); 
      //validar texto exactamente
     }*/

}
