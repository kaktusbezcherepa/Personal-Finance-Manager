class Transaction {
    readonly id : string;
    private amount : number;
    private type : "income" | "expense";
    private category: string;
    private description: string;
    readonly date: Date;

    constructor(sum : number , transactionType : "income" | "expense"){
        if(sum <= 0) throw new Error("Введите сумму больше нуля")
        this.id = crypto.randomUUID();
        this.amount = sum
        this.type = transactionType
        this.category = ''
        this.description = ''
        this.date = new Date()
    }

    setCategory(title: string){
        if(!title.trim()) throw new Error("Введите категорию")
        this.category = title.trim()
    }

    setDescription(desc : string){
        if(!desc.trim()) throw new Error("Введите описание")
        this.description = desc.trim()
    }

    setAmount(sum : number){
        if(sum <= 0) throw new Error("Введите сумму больше нуля")
        if(sum === this.amount) return;
        this.amount = sum
    }


    getAmount(){
        return this.amount
    }

    getType(){
        return this.type
    }

    getCategory(){
        return this.category
    }

    getDescription(){
        return this.description
    }
}

export { Transaction }