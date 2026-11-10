import { User } from "./user.class.js";
export class Admin extends User {
    manageNotes(notebook, action, noteId) {
        if (action === "view") {
            return notebook.getAllNotes();
        }
        if (noteId === undefined) {
            throw new Error("Note ID is required to remove a note.");
        }
        return notebook.removeNote(noteId);
    }
}
