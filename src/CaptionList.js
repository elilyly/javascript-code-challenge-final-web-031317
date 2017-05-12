class CaptionList {
  constructor(phrases) {
    this.phrases = [];
  }
  render() {
    var allCaptions = this.phrases.map(function(phrase) {
      return phrase.render()
    }).join(" ")
    return `<ul> ${allCaptions} </ul>`
  }
  addCaption(string) {
    var newCaption = new Caption(string)
    this.phrases.push(newCaption)
  }
}
