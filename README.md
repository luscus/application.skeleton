# application.skeleton
[![NPM version](https://badge.fury.io/js/application.skeleton.svg)](http://badge.fury.io/js/application.skeleton)
[![dependencies](https://david-dm.org/luscus/application.skeleton.svg)](https://david-dm.org/luscus/application.skeleton)
[![devDependency Status](https://david-dm.org/luscus/application.skeleton/dev-status.svg?theme=shields.io)](https://david-dm.org/luscus/application.skeleton#info=devDependencies)

Application Framework base package: it loads and applies packages to the application object.

I was and still am a big fan of LEGO® and I would like to think that software development should work in the same way.
[NPM](https://www.npmjs.com) is a great piece box and if we use prototype-less patterns (mixins, ...) we could apply behaviours to our applications
by expressing them as dependencies...

Example, my application should:

- emit events (install [application.mixin.emitter](https://github.com/luscus/application.mixin.emitter))
- be a state machine (install [application.mixin.automaton](https://github.com/luscus/application.mixin.automaton))
- use network communication (install [application.module.socket](https://github.com/luscus/application.module.socket) and any available protocol package)

This way I don't need to implement all this stuff or write code to use libraries: the behaviour is instantly available in the application object.
I can focus on the application specific code.


## Plugin types

### Mixin

Mixins add behaviours to the base application object itself: package name prefix is `application.mixin.`

### module

Modules wrap functionalities related to some specific domain into one property of the base object: package name prefix is `application.module.`

## Usage

## Set Dependency

    npm install application.skeleton

## Configuration

You can optionally pass a configuration that will be stored in the application object in a `config` property.

The structure of the config is up to you and your project, however there is one limitation: `config.modules` is reserved.
This config property is used to set configuration options for modules.

    var config = {
      "prop1": "someValue",
      "prop2": "whatever",
      modules: {
        "application.module.socket": {
          "enableThis": true,
          "portRange": [25000, 25100]
        }
      }
    };

## Initialise

    var skeleton = require('application.skeleton');

    // load plugins
    skeleton(application, config);


-------------------
Copyright (c) 2014 Luscus (luscus.redbeard@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
