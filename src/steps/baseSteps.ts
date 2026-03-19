import {Page} from "@playwright/test"

export class BaseSteps{
    protected page:Page;

    constructor(page:Page){
        this.page=page
    }

    async goToPage(path:string){
        await this.page.goto(path);
    }

    async waitFor(time:number):Promise<void>{
        await this.page.waitForTimeout(time);
    }
}