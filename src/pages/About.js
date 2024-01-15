import { Element } from '@/core/Element.js'
import { Navbar } from '@/components/layout'
import { renderComponent } from '@/core/render.js'

export class About extends Element{
  navbar = renderComponent(Navbar)

  constructor() {
    super()
  }

  beforeRender() {
    console.log('about page rendering')
  }

  render() {
    this.element.appendChild(this.navbar)
    
    this.element.innerHTML += '<h1>About Page</h1>'
    
    return this.element
  }
}