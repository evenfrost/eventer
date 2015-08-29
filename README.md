# eventer

A tiny event emitter.
```javascript
import Eventer from 'eventer';
const eventer = new Eventer();
```

### Methods

#### on
Adds an event listener.
```javascript
eventer.on('user:added', name => console.log('User name is ${name}.'));
```

#### off
Removes an event listener.
```javascript
eventer.off('user:added', onUserAdd);
```

#### emit
Emits an event.
```javascript
eventer.emit('user:added', name);
```
