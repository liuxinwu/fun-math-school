export class ProxySingletonMode<T, C> {
  instance: C

  constructor(_: new (option: T) => C, option: T) {
    this.init<T>(_, option)
  }

  init<T>(_: new (option: T) => C, option: T) {
    if (this.instance) return this.instance
    return this.instance = new _(option)
  }
}