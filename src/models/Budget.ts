class Budget {
    readonly id : string;
    private category: string;
    private amount: number;
    private period: "daily" | "weekly" | "monthly";
    private spent: number;

    constructor (category: string, amount: number, period:"daily" | "weekly" | "monthly"){
        if(amount <= 0) throw new Error('Введите сумму больше нуля')
        this.id = crypto.randomUUID()
        this.category = category
        this.amount = amount
        this.period = period
        this.spent = 0
    }

    getCatgory(){
        return this.category
    }

    getAmount(){
        return this.amount
    }

    getSpent(){
        return this.spent
    }

    getPeriod(){
        return this.period
    }

    setAmount(updAmount: number){
        if(updAmount <= 0) throw new Error('Введите сумму больше нуля')
        this.amount = updAmount
    }

    updateSpent(amount: number){
        if(amount <= 0) throw new Error('Введите сумму больше 0')
        this.spent = this.spent + amount
    }
    
    getRemainingAmount(){
        return this.amount - this.spent
    }

    isOverBudget(){
        return this.spent > this.amount
    }

    getProgress(){
        return (this.spent / this.amount) * 100;
    }

    reset(){
        this.spent = 0
    }

}

export { Budget }