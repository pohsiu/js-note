# js-note


# Log Object when it's too big

```
var util = require('util');
fs.writeFileSync('test.txt', util.inspect(obj));
```

Inifite depth
```util.inspect(obj, { showHidden: true, depth: null })```
