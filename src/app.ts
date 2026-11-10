
import { User } from "./modules/users/user.class.js";
import { Admin } from "./modules/users/admin.class.js";
import { NoteBook } from "./modules/notes/notebook.class.js";
import { Storage } from "./common/storage/storage.class.js";

// 1. Create a User
const user = new User(
  1,
  "Ahmed",
  "ahmed@test.com",
  "123456",
  "01000000000",
  25
);

// 2. Create a Notebook independently
const notebook = new NoteBook(1, "Work Notebook");

// 3. Aggregation: Add the Notebook to the User
user.addNotebook(notebook);

// 4. Composition: Create Notes inside the Notebook
const note1 = notebook.addNote(
  "TypeScript",
  "Learning TypeScript OOP concepts and classes.",
  user
);

const note2 = notebook.addNote(
  "JavaScript",
  "Reviewing JavaScript fundamentals and ES6.",
  user
);

// 5. Display user information
user.displayInfo();

// 6. Preview a Note
console.log("Note Preview:", note1.preview());

// 7. Display all Notes
console.log("All Notes:", notebook.getAllNotes());

// 8. Create an Admin
const admin = new Admin(
  2,
  "Admin",
  "admin@test.com",
  "admin123",
  "01111111111",
  30
);

// 9. Admin manages Notes
const notes = admin.manageNotes(notebook, "view");

console.log("Admin View:", notes);

// 10. Admin removes a Note
const removed = admin.manageNotes(notebook, "remove", 1);

console.log("Note Removed:", removed);

// 11. Generics: Store Users
const userStorage = new Storage<User>();

userStorage.addItem(user);
userStorage.addItem(admin);

console.log("Users Storage:", userStorage.getAllItems());

// 12. Generics: Store Numbers
const numberStorage = new Storage<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);

console.log("Numbers Storage:", numberStorage.getAllItems());
