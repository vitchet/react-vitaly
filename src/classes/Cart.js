class Cart {
  _items = new Map();

  getAmount(id) {
    return this._items.get(id) || 0;
  }

  getItemIds() {
    return Array.from(this._items.keys());
  }

  addItem(id) {
    this._items.set(id, this.getAmount(id) + 1);
  }

  removeItem(id) {
    if (!this._items.get(id)) {
      return;
    }

    const amount = this._items.get(id);
    if (amount > 1) {
      this._items.set(id, amount - 1);
    } else {
      this._items.delete(id);
    }
  }

  clear() {
    this._items.clear();
  }
}

export default Cart;
