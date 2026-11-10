export class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    get author() {
        return this.userId;
    }
    preview(maxLength = 50) {
        if (maxLength < 1) {
            throw new Error("Preview length must be greater than zero.");
        }
        if (this.content.length <= maxLength) {
            return this.content;
        }
        return this.content.slice(0, maxLength).trimEnd() + "...";
    }
}
