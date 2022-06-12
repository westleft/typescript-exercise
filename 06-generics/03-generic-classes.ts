class DataStorage<T extends number | string> {
  private data: T[] = [];

  constructor(item: T) {
    this.data.push(item);
  }
}

const numStorage = new DataStorage(9);
const strStorage = new DataStorage("123");

// 噴錯，未指定 boolen
// const boolStorage = new DataStorage(true);