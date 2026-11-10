
import type { NoteBook } from "../notes/notebook.class.js";

export class User {
  private notebooks: NoteBook[] = [];

  private _age: number;

  constructor(
    public readonly id: number,
    public name: string,
    public email: string,
    private password: string,
    protected phone: string,
    age: number
  ) {
    this._age = 18;
    this.age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (!Number.isInteger(value) || value < 18 || value > 60) {
      throw new Error("Age must be between 18 and 60.");
    }

    this._age = value;
  }

  displayInfo(): void {
    console.log({
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      age: this.age
    });
  }

  addNotebook(notebook: NoteBook): void {
    if (this.notebooks.includes(notebook)) {
      throw new Error("This notebook is already added.");
    }

    this.notebooks.push(notebook);
  }

  removeNotebook(notebookId: number): boolean {
    const index = this.notebooks.findIndex(
      (notebook) => notebook.id === notebookId
    );

    if (index === -1) return false;

    this.notebooks.splice(index, 1);
    return true;
  }

  getNotebooks(): NoteBook[] {
    return [...this.notebooks];
  }
}
