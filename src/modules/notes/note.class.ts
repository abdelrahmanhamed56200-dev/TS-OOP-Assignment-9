
import type { User } from "../users/user.class.js";

export class Note {

  constructor(
    public readonly id: number,
    public title: string,
    public content: string,
    public readonly userId: User
  ) {}

  get author(): User {
    return this.userId;
  }

  preview(maxLength: number = 50): string {

    if (maxLength < 1) {
      throw new Error("Preview length must be greater than zero.");
    }

    if (this.content.length <= maxLength) {
      return this.content;
    }

    return this.content.slice(0, maxLength).trimEnd() + "...";
  }
}
