# Interesting Bugs

* Issue: Server cannot run because the port 5000 is already in use

```bash
phong: npm run server
> traffic-records@1.0.0 server /Users/phongngo/Desktop/traffic-records
> nodemon src/server.js
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/server.js`
events.js:281
      throw er; // Unhandled 'error' event
      ^
Error: listen EADDRINUSE: address already in use :::5000
    at Server.setupListenHandle [as _listen2] (net.js:1308:16)
    at listenInCluster (net.js:1356:12)
    at Server.listen (net.js:1444:7)
    at Function.listen (/Users/phongngo/Desktop/traffic-records/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/Users/phongngo/Desktop/traffic-records/src/server.js:10:20)
    at Module._compile (internal/modules/cjs/loader.js:1139:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1159:10)
    at Module.load (internal/modules/cjs/loader.js:988:32)
    at Function.Module._load (internal/modules/cjs/loader.js:896:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
Emitted 'error' event on Server instance at:
    at emitErrorNT (net.js:1335:8)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  code: 'EADDRINUSE',
  errno: -48,
  syscall: 'listen',
  address: '::',
  port: 5000
}
[nodemon] app crashed - waiting for file changes before starting...
```

* Solution: Finding the PID of the port and killing it

```bash
lsof -i:5000
kill -9 PID
```

* Issue: Cannot overwrite `users` model once compiled.

```bash
phong: npm run server:debug

> traffic-records@1.0.0 server:debug /Users/phongngo/Desktop/traffic-records
> nodemon --inspect src/server.js

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node --inspect src/server.js`
Debugger listening on ws://127.0.0.1:9229/aa1d1619-54d3-4bf8-9278-a34501912e5d
For help, see: https://nodejs.org/en/docs/inspector

/Users/phongngo/Desktop/traffic-records/node_modules/mongoose/lib/index.js:522
      throw new _mongoose.Error.OverwriteModelError(name);
      ^
MongooseError [OverwriteModelError]: Cannot overwrite `users` model once compiled.
    at new OverwriteModelError (/Users/phongngo/Desktop/traffic-records/node_modules/mongoose/lib/error/overwriteModel.js:20:11)
    at Mongoose.model (/Users/phongngo/Desktop/traffic-records/node_modules/mongoose/lib/index.js:522:13)
    at Object.<anonymous> (/Users/phongngo/Desktop/traffic-records/models/Sign_Action.js:18:29)
    at Module._compile (internal/modules/cjs/loader.js:1139:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1159:10)
    at Module.load (internal/modules/cjs/loader.js:988:32)
    at Function.Module._load (internal/modules/cjs/loader.js:896:14)
    at Module.require (internal/modules/cjs/loader.js:1028:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (/Users/phongngo/Desktop/traffic-records/src/server.js:10:20)
    at Module._compile (internal/modules/cjs/loader.js:1139:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1159:10)
    at Module.load (internal/modules/cjs/loader.js:988:32)
    at Function.Module._load (internal/modules/cjs/loader.js:896:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47 {
  message: 'Cannot overwrite `users` model once compiled.',
  name: 'OverwriteModelError'
}
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node --inspect src/server.js`
Debugger listening on ws://127.0.0.1:9229/e78f0064-e395-4a41-b1eb-1991069224d5
For help, see: https://nodejs.org/en/docs/inspector

/Users/phongngo/Desktop/traffic-records/node_modules/mongoose/lib/index.js:522
      throw new _mongoose.Error.OverwriteModelError(name);
      ^
MongooseError [OverwriteModelError]: Cannot overwrite `users` model once compiled.
    at new OverwriteModelError (/Users/phongngo/Desktop/traffic-records/node_modules/mongoose/lib/error/overwriteModel.js:20:11)
    at Mongoose.model (/Users/phongngo/Desktop/traffic-records/node_modules/mongoose/lib/index.js:522:13)
    at Object.<anonymous> (/Users/phongngo/Desktop/traffic-records/models/Sign_Action.js:18:29)
    at Module._compile (internal/modules/cjs/loader.js:1139:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1159:10)
    at Module.load (internal/modules/cjs/loader.js:988:32)
    at Function.Module._load (internal/modules/cjs/loader.js:896:14)
    at Module.require (internal/modules/cjs/loader.js:1028:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (/Users/phongngo/Desktop/traffic-records/src/server.js:10:20)
    at Module._compile (internal/modules/cjs/loader.js:1139:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1159:10)
    at Module.load (internal/modules/cjs/loader.js:988:32)
    at Function.Module._load (internal/modules/cjs/loader.js:896:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47 {
  message: 'Cannot overwrite `users` model once compiled.',
  name: 'OverwriteModelError'
}
[nodemon] app crashed - waiting for file changes before starting...
```

* Fix: A typo within mongoose model creation

```javascript
//inside models/Sign_Actions.js (before fix)
const SignAction = mongoose.model("users", SignActionSchema);
```

```javascript
//inside models/Sign_Actions.js (after fix)
const SignAction = mongoose.model("signActions", SignActionSchema);
```
