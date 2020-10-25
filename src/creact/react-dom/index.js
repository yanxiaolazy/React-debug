//vnode: {type: 'div', props:}
function render(vnode, container) {
  console.log(vnode);
  //vnode -> node
  // if (!vnode && !container) return;

  const node = createNode(vnode);

  container.appendChild(node);
}

function createNode(vnode) {
  const {type, props} = vnode;
  let node = null;
  //
  if (type === "TEXT") {
    //处理文本节点
    node = document.createTextNode("");
  } else if (typeof type === 'string') {
    node = document.createElement(type);
  } else if (typeof type === 'function') {
    // console.log('function: ', )
    node = updateFunctionComponent(vnode)
  }

  //遍历子节点
  reconcileChild(node, props.children);

  //更新属性
  updateNode(node, props);
  return node;
}

function updateFunctionComponent(vnode) {
  const {type, props} = vnode;
  const vvnode = type(props);

  return createNode(vvnode);
}

function updateNode(node, props) {
  Object.keys(props)
  .filter(k => k !== 'children')
  .forEach(k => node[k] = props[k]);
}

function reconcileChild(node, children) {
  for (const i in children) {
    render(children[i], node);
  }
}


export  {render};