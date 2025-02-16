const regex : RegExp = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

class Category {
    readonly id: string;
    private name: string;
    private type: "income" | "expense"
    private color: string;

    constructor(name: string, type: "income" | "expense", color: string){
        if(name.length === 0 || name.length > 30 ) throw new Error('Минимальное число символов: 1, максимальное число символов: 30')
        if(!regex.test(color)) throw new Error ("Неккоректный код цвета")
        
        this.id = crypto.randomUUID()
        this.name = name.trim()
        this.type = type
        this.color = ("#" + color).toUpperCase();
    }

    getName(){
        return this.name
    }

    getType(){
        return this.type
    }

    getColor(){
        return this.color
    }

    setName(title: string){
        if(title.length === 0 || title.length > 30) throw new Error('Минимальное число символов: 1, максимальное число символов: 30')
        this.name = title.trim()
    }

    setColor(colorHex: string){
        if(!regex.test(colorHex)) throw new Error("Неккоректный код цвета")
        this.color = colorHex
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            color: this.color
        }
    }
}

export { Category }