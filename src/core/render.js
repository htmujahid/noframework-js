export async function render(Component, id = 'app') {  
  const root = document.getElementById(id)
  root.innerHTML = ''
  
  const component = new Component();

  let templateComponents = component.template && component.template()
  templateComponents && root.appendChild(templateComponents)

  let loadingComponent = component.loading && component.loading()
  loadingComponent && root.appendChild(loadingComponent)

  component.beforeRender && await component.beforeRender()

  let renderComponent = component.render()

  if (loadingComponent) {
    root.removeChild(loadingComponent)
  }
  
  component.afterRender && component.afterRender()
  
  root.appendChild(renderComponent)
}

export function renderComponent(Component, ...args) {
  const component = new Component(...args)
  component.beforeRender && component.beforeRender()
  const el = component.render()
  component.afterRender && component.afterRender()
  return el
}