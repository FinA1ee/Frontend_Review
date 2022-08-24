function convertDom(vnode) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(vnode);
  }

  let ele = document.createElement(vnode.tag);
  for (let key in vnode.attrs) {
    ele.setAttribute(key, vnode.attrs[key]);
  }

  vnode.children.forEach(obj => {
    let node = convertDom(obj);
    ele.appendChild(node);
  })

  return ele;
}


const a = convertDom(
  {
    tag: 'DIV',
    attrs:{
      id:'app'
    },
    children: [
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] }
        ]
      },
       1234,
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] },
          { tag: 'A', children: [] }
        ]
      }
    ]
  });

console.log(a);