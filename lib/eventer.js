export default class {
  constructor() {
    this.events = new Map();
  }

  on(event, fn) {
    this.events.set(event, fn);
  }

  off(event) {
    this.events.delete(event);
  }

  emit(event, ...params) {
    if (this.events.has(event)) {
      this.events.get(event).apply(event, params);
    } else {
      throw new Error('An event with name \'' + event + '\' is not registered.');
    }
  }
}
