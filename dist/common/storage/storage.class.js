export class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index === -1) {
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }
    getAllItems() {
        return [...this.items];
    }
}
