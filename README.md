# eventer

A tiny event emitter.
```javascript
import Eventer from 'eventer';
const eventer = new Eventer();
```

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
