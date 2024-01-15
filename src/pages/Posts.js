import { Element } from '@/core/Element.js'
import { Navbar } from '@/components/layout'
import { renderComponent } from '@/core/render.js'

export class Posts extends Element {
  navbar = renderComponent(Navbar)

  constructor() {
    super()
  }

  async beforeRender() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    this.posts = await res.json()
  }

  template() {
    this.element.appendChild(this.navbar);
    this.element.innerHTML += '<h1>Posts Page</h1>';

    return this.element;
  }

  loading() {
    this.loadingElement.innerHTML = '<h6>Loading...</h6>';

    return this.loadingElement;
  }

  render() {    
    this.posts?.forEach(post => {
      this.element.innerHTML += `
        <div class="posts">
          <span>${post.id}</span>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `
    })
    
    return this.element
  }
}
