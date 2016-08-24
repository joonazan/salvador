# Salvador

Control lights without knowing a thing about the DALI protocol!

## Usage

```js
var salvador = require('salvador')
var backend = require('backend')

var dali = salvador.injectBackend(backend)

dali.allOff()
const stop = dali.blinkBallast(5)
setTimeout(stop, 10000)
```

## Implementing a backend

The functions provided by this library require you to implement a function with the signature `dali(address, command, cb?, sentTwice)`.

- address: the eight most significant bits of the DALI command
- command: the least significant bits
- cb: if present should be called with the DALI response.
- sentTwice: commands should be sent twice in rapid succession.

Commands must be sent over Dali in the order the dali function is called.
