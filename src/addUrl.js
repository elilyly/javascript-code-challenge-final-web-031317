class addUrl {
  constructor(links) {
    this.links = [];
  }
  render() {
    var allLinks = this.links.map(function(link) {
      return link.render()
    }).join("")
    return `<ul> ${allLinks}</ul>`
  }

  addLink(url) {
    var newUrl = new Url(url)
    this.links.push(newUrl)
  }

}
