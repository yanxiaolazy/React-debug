function createElement(type, config, ...children) {
  let propName;
  // console.log(type)
  // console.log(config)
  // const props = {};

  if (config !== null) {
    delete config.__self;
    delete config.__source;
    // for (propName in config) {

    //   if (hasOwnProperty.call(config, propName)) {
    //     props[propName] = config[propName];
    //   }
    // }
  }

  // const childrenLength = arguments.length - 2;
  // if (childrenLength === 1) {
  //   props.children = children;
  // } else {
  //   const childrenArray = Array(childrenLength);
  //   for (let i = 0; i < childrenLength; i ++) {
  //     childrenArray[i] = arguments[i + 2];
  //   }
  //   props.children = childrenArray;
  // }

  const props = {
    ...config,
    children: children.map(child => 
      typeof child === "object" ? child: createTextNode(child)
    )
  };

  return {
    type, 
    props
  };
}

function createTextNode(text) {
  return {
    type: "TEXT",
    props: {
      children: [],
      nodeValue: text
    }
  };
}

export {createElement};