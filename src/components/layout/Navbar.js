import { Element } from '@/core/Element.js'

export class Navbar extends Element{
  navElements = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Posts',
      link: '/posts'
    }
  ]

  render() {
    this.element.classList.add('navbar')
    
    this.navElements.forEach(element => {
      this.element.innerHTML += `<a href="${element.link}">${element.title}</a> `
    })

    return this.element;
  }
}
