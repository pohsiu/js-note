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
