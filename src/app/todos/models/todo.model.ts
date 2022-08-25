export class Todo{
    public id: number;
    public text: string | undefined;
    public isComplete: boolean | undefined;
    
    constructor( text: string ){
        this.text = text;
        this.id = Math.random();
        this.isComplete = false;
    }
}