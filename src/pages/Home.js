import { Element } from '@/core/Element.js'
import { Navbar } from '@/components/layout'
import { renderComponent } from '@/core/render.js'

export class Home extends Element{
  navbar = renderComponent(Navbar)

  counter = 0

  constructor() {
    super()
  }

  handleButtonClick() {
    this.counter++
    this.button.innerHTML = `Click me: ${this.counter}`
  }
  
  render() {
    this.element.appendChild(this.navbar)
    
    this.element.innerHTML += `
      <h1>Home Page</h1>
      <div class="posts">
         <button id="btn">Click me: ${this.counter}</button>
      </div>
    `
    
    return this.element
  }

  afterRender() {    
    this.button = this.element.querySelector('#btn')
    this.button.addEventListener('click', this.handleButtonClick.bind(this))
  }
}