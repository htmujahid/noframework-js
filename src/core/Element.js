export class Element {
  element = document.createElement('div')

  loadingElement = document.createElement('div')

  render() {
    return this.element
  }
}