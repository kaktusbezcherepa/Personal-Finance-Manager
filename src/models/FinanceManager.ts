import { Budget } from "./Budget";
import { Category } from "./Category";
import { Transaction } from "./Transaction";

class FinanceManager {
    private transactions: Transaction[];
    private budget: Budget[];
    private category: Category[];

    constructor(initialTransactions: Transaction[] = [],
        initialBudget: Budget[] = [],
        initialCategory: Category[] = []
    ){
        this.transactions = initialTransactions
        this.budget = initialBudget
        this.category = initialCategory
    }

    addTransactions(sum : number,
        type: "income" | "expense",
        category?: string,
        description?: string
        ){
        const transaction = new Transaction(sum, type)
        if(category){
            transaction.setCategory(category)
        }

        if(description){
            transaction.setDescription(description)
        }

        this.transactions.push(transaction)
        return transaction
    }   
}

export { FinanceManager }