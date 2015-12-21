export default class {
  constructor() {
    this.events = new Map();
  }

  add(event, callback) {
    this.events.set(event, callback);
  }

  remove(event) {
    this.events.delete(event);
  }

  emit(event, ...params) {
    if (!this.events.has(event)) return;
    
    this.events.get(event).apply(event, params);
  }
}
