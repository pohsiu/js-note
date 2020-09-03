const raw = [
  {
    name: 'usercenter',
    component: 'usercenter',
    parent: 'home'
  },
  {
    name: 'home',
    component: 'home',
  },
  {
    name: 'com-1-1',
    component: 'com',
    parent: 'com-1'
  },
  {
    name: 'com',
    component: 'com',
  },
  {
    name: 'com-1',
    component: 'com',
    parent: 'com'
  },
]

let result = [];
const map = {};
raw.forEach(object => {
  if (map[object.name]) {
    map[object.name] = {
      ...object,
      ...map[object.name],
    }
  } else {
    map[object.name] = object;
  }
  if (object.parent) {
    if (map[object.parent]) {
      if (!map[object.parent].children) {
        map[object.parent].children = [object];
      } else {
        map[object.parent].children.push(object);
      }
    } else {
      map[object.parent] = {
        children: [object],
      };
    }
    return;
  }
  result.push(object);
})

console.log(map);

console.log(result);

const buildTree = (arr) => {
    const result = {};
    const parentList = {};
    while (arr.length > 0) {
      const curNode = arr.shift();
      if (!curNode.parent) {
        // curNode node does not have parent => it is root
        result[curNode.name] = curNode;
        parentList[curNode.name] = curNode;
      } else {
        // curNode node has parent => it is child
        if (parentList[curNode.parent]) {
          //curNode node parent has been build
          let parent = curNode.parent;
          let child = curNode.name;
          let tmp = {
            ...parentList[parent],
            children: {
              ...parentList[parent].children,
              [child]: curNode,
            }
          };
          parentList[child] = curNode;
          child = parent;
          parent = parentList[parent].parent;
          while (parentList[parent]) {
            tmp = {
              ...parentList[parent],
              children: {
                ...parentList[parent].children,
                [child]: {
                  ...tmp,
                }
              }
            };
            child = parent;
            parent = parentList[parent];
          }
          result[tmp.name] = {
            ...tmp,
          }
        } else {
          //curNode node parent has not been build
          arr.push(curNode);
        }
      }
    }
    return result;
  }
