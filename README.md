# eventer

A tiny event emitter.
```javascript
import Eventer from 'eventer';
const eventer = new Eventer();
```
Based on the [Map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) specification, so you will need a [polyfill](https://github.com/zloirock/core-js) if your environment does not support it.

### Installation

#### jspm
`jspm install eventer=github:evenfrost/eventer`

#### npm
`npm install evenfrost/eventer`

### Methods

#### add
Adds an event listener.
```javascript
eventer.add('user:added', name => console.log(`User name is ${name}.`));
```

#### remove
Removes an event listener.
```javascript
eventer.remove('user:added', onUserAdd);
```

#### emit
Emits an event.
```javascript
eventer.emit('user:added', name);
```
