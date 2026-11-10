
import { User } from "./user.class.js";
import type { NoteBook } from "../notes/notebook.class.js";
import type { Note } from "../notes/note.class.js";

export class Admin extends User {

  manageNotes(
    notebook: NoteBook,
    action: "view" | "remove",
    noteId?: number
  ): Note[] | boolean {

    if (action === "view") {
      return notebook.getAllNotes();
    }

    if (noteId === undefined) {
      throw new Error("Note ID is required to remove a note.");
    }

    return notebook.removeNote(noteId);
  }
}
