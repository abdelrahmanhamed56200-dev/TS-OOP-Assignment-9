export class User {
    id;
    name;
    email;
    password;
    phone;
    notebooks = [];
    _age;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this._age = 18;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (!Number.isInteger(value) || value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60.");
        }
        this._age = value;
    }
    displayInfo() {
        console.log({
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            age: this.age
        });
    }
    addNotebook(notebook) {
        if (this.notebooks.includes(notebook)) {
            throw new Error("This notebook is already added.");
        }
        this.notebooks.push(notebook);
    }
    removeNotebook(notebookId) {
        const index = this.notebooks.findIndex((notebook) => notebook.id === notebookId);
        if (index === -1)
            return false;
        this.notebooks.splice(index, 1);
        return true;
    }
    getNotebooks() {
        return [...this.notebooks];
    }
}
