class Caption {
  constructor(string) {
    this.string = string;
  }
  render() {
    return `<li> ${this.string} </li>`
  }
}
