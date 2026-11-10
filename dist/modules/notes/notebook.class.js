import { Note } from "./note.class.js";
export class NoteBook {
    id;
    name;
    notes = [];
    nextNoteId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addNote(title, content, author) {
        const note = new Note(this.nextNoteId++, title, content, author);
        this.notes.push(note);
        return note;
    }
    removeNote(noteId) {
        const index = this.notes.findIndex((note) => note.id === noteId);
        if (index === -1) {
            return false;
        }
        this.notes.splice(index, 1);
        return true;
    }
    getAllNotes() {
        return [...this.notes];
    }
}
