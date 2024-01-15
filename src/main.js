import './style.css'

import page from '@/core/Router';
import {render} from '@/core/render';

import {Home} from '@/pages/Home'
import {About} from '@/pages/About'
import {Posts} from '@/pages/Posts'

page("/", function () {
  render(Home)
})

page("/about", function () {
  render(About)
})

page("/posts", async function() {
  render(Posts)
})

page()

