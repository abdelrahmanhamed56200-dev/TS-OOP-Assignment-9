
import { Note } from "./note.class.js";
import type { User } from "../users/user.class.js";

export class NoteBook {

  private notes: Note[] = [];
  private nextNoteId: number = 1;

  constructor(
    public readonly id: number,
    public name: string
  ) {}

  addNote(
    title: string,
    content: string,
    author: User
  ): Note {

    const note = new Note(
      this.nextNoteId++,
      title,
      content,
      author
    );

    this.notes.push(note);

    return note;
  }

  removeNote(noteId: number): boolean {

    const index = this.notes.findIndex(
      (note) => note.id === noteId
    );

    if (index === -1) {
      return false;
    }

    this.notes.splice(index, 1);

    return true;
  }

  getAllNotes(): Note[] {
    return [...this.notes];
  }
}
