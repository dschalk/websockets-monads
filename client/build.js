(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _snabbdomH = require('snabbdom/h');

var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

var monad = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  class Monad {\n    constructor(z) {\n\n      this.x = z;\n\n      this.bnd = (func, ...args) => {\n        return func(this.x, this, ...args);\n      };\n\n      this.ret = a => {\n        this.x = a;\n        return this;\n      };\n\n      this.fmap = (f, mon = this, ...args) => {      \n        mon.ret( f(mon.x, ...args));\n        return mon;\n\n      };\n    }\n  };\n');

var monadIter = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '    class MonadIter {\n    constructor(z,g) {\n\n        this.x = z;\n        this.id = g;\n        this.flag = false;\n        this.p = [];\n  \n        this.block = () => {\n            this.flag = true;\n            return this;\n        }\n\n        this.release = () => {\n            let self = this;\n            let p = this.p;\n  \n            if (p[1] === \'bnd\') {\n                p[2](self.x, self, ...p[3]);\n                self.flag = false;\n                return self;\n            }\n  \n            if (p[1] === \'ret\') {\n                self.x = p[2];\n                self.flag = false;\n                return self;\n            }\n  \n            if (p[1] === \'fmap\') { \n                p[3].ret(p[2](p[3].x, ...p[4]));\n                self.flag = false;\n                return p[3];\n            }\n        }\n    };\n');

var steps = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\n    mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)\n     .bnd(() => mM1\n     .ret(\'Click mMI2.release() to proceed\')\n     .bnd(refresh)\n     .bnd(() => mMI2\n         .block()\n     .bnd(() => mM2\n     .ret(\'Click it again.\')\n     .bnd(refresh)\n     .bnd(() => mMI2\n         .block()\n     .bnd(() => mM3.ret(\'Keep going\')\n     .bnd(refresh)\n     .bnd(() => mMI2\n         .block()\n     .bnd(() => mM4\n     .ret(\'One more\')\n     .bnd(refresh)\n     .bnd(() => mMI2\n         .block()\n     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)\n     .bnd(mM4.ret).bnd(refresh)\n      ))))))))) \n');

var dice = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\nfunction updateNums(e) {\n  mM2.ret([e.target.value, e.target.textContent])\n  .bnd(() => mM3)\n  .bnd(push,mM2.x[1])\n  .bnd(() => {mM1.x[mM2.x[0]] = ""; return mMI1;})\n      .block()\n      .bnd(() => mM3\n      .bnd(toFloat)\n      .bnd(() => mM1\n      .bnd(calc,mM3.x[0], mM8.x, mM3.x[1])\n      .bnd(clean)\n      .bnd(displayOff, mM1.x.length)\n      .bnd(() => mM3\n      .ret([])\n      .bnd(() => mM4\n      .ret(0).bnd(mM8.ret)\n      .bnd(() => mM5.ret(\'Done\')\n      .bnd(update)   )) ))  )\n  mM5.ret(\'Waiting\')     \n  .bnd(update)\n  .bnd(() => {if (mM8.x !== 0 && mM3.x.length === 2)  { mMI1.release() }} )\n}\n\nfunction updateOp(e) {\n  mM8.ret(e.target.textContent)\n  .bnd(update)\n  .bnd(() => {mMI2.block()\n    .bnd(() => mM3\n    .bnd(toFloat)\n    .bnd(() => mM1\n    .bnd(calc,mM3.x[0], mM8.x, mM3.x[1]))\n    .bnd(clean)\n    .bnd(displayOff, mM1.x.length)\n    .bnd(() => mM3\n    .ret([])\n    .bnd(() => mM4\n    .ret(0).bnd(mM8.ret)\n    .bnd(() => mM5.ret(\'Done\')\n    .bnd(update)   )) )) } )\n  mM5.ret(\'Waiting\')\n  .bnd(update)\n  .bnd(() => {if (mM3.x.length === 2)  { mMI2.release() }} )\n}\n');

var next = (0, _snabbdomH2['default'])('div', { style: { fontSize: '28px', color: 'FFFF00' } }, 'mMI2.release()');
/*
const stepsF = () =>  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
     .bnd(() => mM1.ret('Click the mMI2.release() button to proceed')
     .bnd(() => mMI2.block()
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMI2.block()
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMI2.block()
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMI2.block()
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret)
      ))))))))) 
*/

exports['default'] = { monad: monad, monadIter: monadIter, steps: steps, next: next, dice: dice };
module.exports = exports['default'];

},{"snabbdom":9,"snabbdom/h":3}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _snabbdomH = require('snabbdom/h');

var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

var _cowJs = require('./cow.js');

var _cowJs2 = _interopRequireDefault(_cowJs);

// const socket = new WebSocket("ws://schalk.net:4002");

function createWebSocket(path) {
  var host = window.location.hostname;
  if (host == '') host = 'localhost';
  var uri = 'ws://' + host + ':4002' + path;

  var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
  return new Socket(uri);
}

var socket = createWebSocket('/');

var LoginName;
var xyz = 0;
var numsA = [];
var numsB = [];
var numsC = [];
var CYCLE = 1;

socket.onopen = function (event) {
  console.log('cow onopen ', event);
  update0();
};

var send = function send(event) {
  socket.send("CA#$42,solo," + LoginName + ",6,6,12,20");
};

var patch = _snabbdom2['default'].init([require('snabbdom/modules/class'), // makes it easy to toggle classes
require('snabbdom/modules/props'), // for setting properties on DOM elements
require('snabbdom/modules/style'), // handles styling on elements with support for animations
require('snabbdom/modules/eventlisteners')]);
// attaches event listeners
https: //github.com/paldepind/snabbdom
var oldVnode = document.getElementById('placeholder');

function view(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, mI1, mI2) {
  return (0, _snabbdomH2['default'])('div', { style: style3 }, [(0, _snabbdomH2['default'])('div', { style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '20px' } }, [(0, _snabbdomH2['default'])('h1', { style: { textAlign: 'center', color: '#ffba66' } }, 'Websockets Monads'), (0, _snabbdomH2['default'])('span', 'This is the second page in the new Javascript Monads series. Detailed explanations of the basic monad constructor, "Monad" and its methods and the arguments they take can be found at '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://schalk.net:4001' }, style: { color: '#EECCFF' } }, ' http://schalk.net:4001'), (0, _snabbdomH2['default'])('span', ' and a code repo at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/fun-with-monads' }, style: { color: '#EECCFF' } }, ' github repo'), (0, _snabbdomH2['default'])('span', 'The original site, which was largely exploratory, is at: '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://transcendent.ninja' }, style: { color: '#EECCFF' } }, ' http://transcendent.ninja'), (0, _snabbdomH2['default'])('span', ' and a code repo at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/javascript-monads' }, style: { color: '#EECCFF' } }, ' repo'), (0, _snabbdomH2['default'])('span', '. The older site functions well, but it was bloated and unwieldy with React. I say "bloated" because I didn\'t need most of its core features. I didn\'t even use the state object and frequently called React.forceUpdate. Now I am at peace, using the '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/paldepind/snabbdom' }, style: { color: '#EECCFF' } }, ' snabbdom library. '), (0, _snabbdomH2['default'])('span', ' and a code repo at '), (0, _snabbdomH2['default'])('p'), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#ffba66' } }, 'MonadIter'), (0, _snabbdomH2['default'])('p', 'The basic monad is shown and demonstrated elsewhere. It is also in a script named "monad.js" in the "index.html" file, so you can experiment with the monads in the browser consol. Here is the other constructor in this project: '), _cowJs2['default'].monadIter, (0, _snabbdomH2['default'])('p', 'As a refresher, Click the next button to execute the indicated code, then click the mMI2.release() button four times.'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4 }, [_cowJs2['default'].steps]), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6 }, [_cowJs2['default'].next]), (0, _snabbdomH2['default'])('p', 'Now, a demonstration of monads handling websockets messages. In order to create a unique socket, please enter some name.'), (0, _snabbdomH2['default'])('input', { style: inputStyle1, on: { keydown: updateLogin } }), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update8e, mouseleave: update8l, click: updateNums }, props: { value: 0, id: '0' }, style: style8 }, m1[0]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update9e, mouseleave: update9l, click: updateNums }, props: { value: 1, id: '1' }, style: style9 }, m1[1]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update10e, mouseleave: update10l, click: updateNums }, props: { value: 2, id: '2' }, style: style10 }, m1[2]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update11e, mouseleave: update11l, click: updateNums }, props: { value: 3, id: '3' }, style: style11 }, m1[3]), (0, _snabbdomH2['default'])('p', ' '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update12e, mouseleave: update12l, click: updateOp }, style: style12 }, m7[0]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update13e, mouseleave: update13l, click: updateOp }, style: style13 }, m7[1]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update14e, mouseleave: update14l, click: updateOp }, style: style14 }, m7[2]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update15e, mouseleave: update15l, click: updateOp }, style: style15 }, m7[3]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update16e, mouseleave: update16l, click: updateOp }, style: style16 }, m7[4]), (0, _snabbdomH2['default'])('p', '  '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: send }, style: style5 }, 'ROLL'), (0, _snabbdomH2['default'])('p', 'Now click ROLL. '), (0, _snabbdomH2['default'])('p', 'When you click a number, it disappears. After two numbers and an operator have been selected, in any order, a computation is performed and the result is placed at the end of the numbers row. Now there are three numbers. After another round, two are left and finally, the last computation can be performed. '), (0, _snabbdomH2['default'])('p', 'You can click ROLL repeatedly and the Haskell server will obligingly provide new numbers. The numbers simulate the roll of four dice; two six-sided, one twelve-sided, and one twenty-sided. They are integral to the "Game of Score" application, in which players gain points by making the number "20". '), (0, _snabbdomH2['default'])('p', 'Here are the click handlers, one for all four numbers and one for the five operators: '), _cowJs2['default'].dice, (0, _snabbdomH2['default'])('p', 'When numbers are clicked, they get pushed into mM3.x, an initially empty array. When an operator is clicked, it replaces "0" as the value of mM8. So when mM3.x.length === 2 and mM8.x !== 0, it is time for the computation to go forward. '), (0, _snabbdomH2['default'])('p', 'The "if" block could have contained the code to be executed. It could have contained a call to a function containing the code. "block" and "release" are not essential here, but this is an opportunity to demonstrate them. I like block and release because they make it very easy (for someone familiar with the monads) to understand the code. At first glance, you see the block. Your eyes scan down to the release. Right away you see when halted code will execute. Then look back up and see what it does. '), (0, _snabbdomH2['default'])('p', 'My first "Game of Score" application ran on a Node.js server. The algorithm for the successive computations was a convoluted mess of callbacks between modules. Later, I re-made the application using a modified Haskell Wai-Websockets server with React in the browser. That was less of a mess, but there were plenty of calls to "React.setState" and the code wasn\'t real easy to understand. Here, instead of multiple function calls, I have two consise monad chains. '), (0, _snabbdomH2['default'])('p', 'The next monad constructor might be a "maybe" monad that quickly propagates failure down the chain, instructing each link along the way not to do anything except return the failure message. '), (0, _snabbdomH2['default'])('p', 'There are convenient ways to avoid interference between routines. The simple monads don\'t have to be named, so a chain can start with "new Monad". For example, "new Monad(3)).bnd(cube) results in an anonymous monad with value "27". Name spaces can be used for MonadIterator. My name is David Schalk, so in a team project I could let it be known that I claim the exlusive right to create monad references prefixed by "DS". '), (0, _snabbdomH2['default'])('p', 'Another idea is a monad that locks when it is being used. They could be similar to Haskell MVars and serve as a foundation on which to build a means to assure that transactions are atomic; that is, that they execute completely or not at all. '), (0, _snabbdomH2['default'])('div', { style: { height: '300px' } })]), (0, _snabbdomH2['default'])('div', { style: { width: '30%', position: 'fixed', top: '40px', right: '15px', color: '#CCFDDA' } }, [(0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM1.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM2.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m2), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM3.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m3), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM4.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m4), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM5.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m5), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM6.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m6), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM7.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m7), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM8.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m8), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM9.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m9), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM10.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m10), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM11.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m11), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM12.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m12), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM13.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m13), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM14.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m14), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM15.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m15), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM16.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m16), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM17.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m17), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM18.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m18), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM19.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m19), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mMI1.x: '), (0, _snabbdomH2['default'])('span', { style: styleMI }, '  ' + mI1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mMI2.x: '), (0, _snabbdomH2['default'])('span', { style: styleMI }, '  ' + mI2), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR }, 'REFRESH'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br')])]);
}

var newVnode = function newVnode() {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x, mMI1.x, mMI2.x, mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMI1.x, mMI2.x);
  return newVnode;
};

function update0() {
  oldVnode = patch(oldVnode, newVnode());
}

function updateNums(e) {
  mM2.ret([e.target.value, e.target.textContent]).bnd(function () {
    return mM3;
  }).bnd(push, mM2.x[1]).bnd(function () {
    mM1.x[mM2.x[0]] = "";return mMI1;
  }).block().bnd(function () {
    return mM3.bnd(toFloat).bnd(function () {
      return mM1.bnd(calc, mM3.x[0], mM8.x, mM3.x[1]).bnd(clean).bnd(displayOff, mM1.x.length).bnd(function () {
        return mM3.ret([]).bnd(function () {
          return mM4.ret(0).bnd(mM8.ret).bnd(function () {
            return mM5.ret('Done').bnd(update);
          });
        });
      });
    });
  });
  mM5.ret('Waiting').bnd(update).bnd(function () {
    if (mM8.x !== 0 && mM3.x.length === 2) {
      mMI1.release();
    }
  });
}

function updateOp(e) {
  mM8.ret(e.target.textContent).bnd(update).bnd(function () {
    mMI2.block().bnd(function () {
      return mM3.bnd(toFloat).bnd(function () {
        return mM1.bnd(calc, mM3.x[0], mM8.x, mM3.x[1]);
      }).bnd(clean).bnd(displayOff, mM1.x.length).bnd(function () {
        return mM3.ret([]).bnd(function () {
          return mM4.ret(0).bnd(mM8.ret).bnd(function () {
            return mM5.ret('Done').bnd(update);
          });
        });
      });
    });
  });
  mM5.ret('Waiting').bnd(update).bnd(function () {
    if (mM3.x.length === 2) {
      mMI2.release();
    }
  });
}

function updateLogin(e) {

  var v = e.target.value;
  if (v == '') {
    return;
  }
  if (e.keyCode == 13) {
    mM9.ret(v);
    console.log("CC#$42" + v);
    socket.send("CC#$42" + v);
    LoginName = v;
    console.log(LoginName);
    inputStyle1 = inputStyleB;
    update0();
  }
}

function updateR(event) {
  console.log(socket.readyState);
  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(mM5.ret).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mMI1.ret).bnd(mMI2.ret);
  oldVnode = patch(oldVnode, newVnode());
}

function updateSteps(event) {
  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(function () {
    return mM1.ret('Click the mMI2.release() button to proceed').bnd(function () {
      return mMI2.block().bnd(function () {
        return mM2.ret('Click it again.').bnd(function () {
          return mMI2.block().bnd(function () {
            return mM3.ret('Keep going').bnd(function () {
              return mMI2.block().bnd(function () {
                return mM4.ret('One more').bnd(function () {
                  return mMI2.block().bnd(function () {
                    return mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  console.log(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode());
}

function updateNext(event) {
  mMI2.release();
  console.log(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode());
}

function updateEvent(event) {
  mMI2.ret(event);
  console.log(event);
  oldVnode = patch(oldVnode, newVnode());
}

oldVnode = patch(oldVnode, newVnode());

socket.onmessage = function (event) {
  console.log('cow', event);
  var gameArray = event.data.split(",");
  console.log(event);
  console.log(gameArray);
  var makeStr = function makeStr(x) {
    var l = x.length;
    var str = '';
    for (var i = 5; i < l; i += 1) {
      str = str + ', ' + x[i];
    }
    return x[4] + ' ' + str;
  };
  var d2 = event.data.substring(0, 6);
  // let d3 = event.data.substring(2,6);
  var sendersGroup = gameArray[1];
  var sender = gameArray[2];
  var extra = gameArray[3];
  var ext4 = gameArray[4];
  var ext5 = gameArray[5];
  var ext6 = gameArray[6];
  var ext7 = gameArray[7];
  var ext8 = gameArray[8];
  // let group = that.data.group;
  // let name = that.state.name;
  var ar = extra.split("<br>");
  var ar2 = ar.map(function (x) {
    return x.split("_");
  });
  switch (d2) {
    case "CC#$42":
      // Not broadcast. Login message.
      if (extra === '%#8*&&^1#$%^') {
        mM6.ret('Name taken');
        //that.setState({info: `You entered a name which is already taken`})
        setTimeout(function () {
          document.location.reload(false);
        }, 2000);
      } else {
        mM6.ret(sender + '\'s socket is now open');
        update0();
      }

      break;

    case "CZ#$42":
      // Solutions.
      break;

    case "CA#$42":
      // Triggedarkred by ROLL
      mM1.ret([extra, ext4, ext5, ext6]);
      mM7.ret(['add', 'subtract', 'mult', 'div', 'concat']);
      mM3.ret([]);
      mM8.ret(0);
      mM6.bnd(displayInline, 1);
      mM6.bnd(displayInline, 2);
      mM6.bnd(displayInline, 3);
      update0();
      break;

    case "DI#$42":
      // Changes data.information .
      break;

    case "CE#$42":
      // Updates numbers during play.
      break;

    case "CB#$42":
      // Updates the scoreboaard.
      break;

    case "CD#$42":
      break;

    case "CF#$42":
      // Re-set after a each clculation.
      break;

    case "CH#$42":
      break;

    case "CK#$42":
      // Updates DS_T after each calculation.
      break;

    case "CQ#$42":
      break;

    case "DQ#$42":
      break;

    case "EQ#$42":
      break;

    case "FQ#$42":
      break;

    case "GQ#$42":
      break;

    case "HQ#$42":
      break;

    case "CR#$42":
      // Resets the player interface after each round.
      break;

    case "CY#$42":
      // Triggedarkred by clicking "SCORE!".
      break;

    case "XY#$42":
      // Triggedarkred by clicking "SCORE!" after "IMPOSSIBLE".
      break;

    case "DY#$42":
      // Triggered by clicking  "IMPOSSIBLE".
      break;

    case "DC#$42":
      break;

    case "DZ#$42":
      // NOT IN USE
      break;

    case "IA#$42":
      break;

    default:
      break;
  }
};

var inputStyle1 = inputStyleA;

var inputStyleA = { backgroundColor: '#d8d17d', display: 'inline' };

var inputStyleB = { display: 'none' };

var style2 = { backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var style1 = { backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var styleHide = { display: 'none' };

var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%', width: '100%', color: '#FFE4C4', fontSize: '18px', textAlign: 'left' };

var styleM = { color: '#FF000A', marginLeft: '13px', marginBottom: '2px', fontSize: '21px' };

var styleMI = { color: '#FF000A', marginLeft: '7px', marginBottom: '2px', fontSize: '21px' };

var style0 = style2;

var style4 = style2;
var style4e = style1;
var style4l = style2;

var style5 = style2;
var style5e = style1;
var style5l = style2;

var style6 = style2;
var style6e = style1;
var style6l = style2;

var style7 = style2;
var style7e = style1;
var style7l = style2;

var style8 = style2;
var style8e = style1;
var style8l = style2;

var style9 = style2;
var style9e = style1;
var style9l = style2;

var style10 = style2;
var style10e = style1;
var style10l = style2;

var style11 = style2;
var style11e = style1;
var style11l = style2;

var style12 = style2;
var style12e = style1;
var style12l = style2;

var style13 = style2;
var style13e = style1;
var style13l = style2;

var style14 = style2;
var style14e = style1;
var style14l = style2;

var style15 = style2;
var style15e = style1;
var style15l = style2;

var style16 = style2;
var style16e = style1;
var style16l = style2;

var style17 = style2;
var style17e = style1;
var style17l = style2;

var style18 = style2;
var style18e = style1;
var style18l = style2;

var style19 = style2;
var style19e = style1;
var style19l = style2;

var style20 = style2;
var style20e = style1;
var style20l = style2;

var style21 = style2;
var style21e = style1;
var style21l = style2;

var style22 = style2;
var style22e = style1;
var style22l = style2;

var style23 = style2;
var style23e = style1;
var style23l = style2;

var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function updateInput1(event) {
  inputStyle1 = inputStyleB;
  oldVnode = patch(oldVnode, newVnode());
}

function update3e(event) {
  style0 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update3l(event) {
  style0 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update4e(event) {
  style4 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update4l(event) {
  style4 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update5e(event) {
  style5 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update5l(event) {
  style5 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update6e(event) {
  style6 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update6l(event) {
  style6 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update7e(event) {
  style7 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update7l(event) {
  style7 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update8e(event) {
  style8 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update8l(event) {
  style8 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update9e(event) {
  style9 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update9l(event) {
  style9 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update10e(event) {
  style10 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update10l(event) {
  style10 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update11e(event) {
  style11 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update11l(event) {
  style11 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update12e(event) {
  style12 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update12l(event) {
  style12 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update13e(event) {
  style13 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update13l(event) {
  style13 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update14e(event) {
  style14 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update14l(event) {
  style14 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update15e(event) {
  style15 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update15l(event) {
  style15 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update16e(event) {
  style16 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update16l(event) {
  style16 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update17e(event) {
  style17 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update17l(event) {
  style13 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update18e(event) {
  style18 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update18l(event) {
  style18 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update19e(event) {
  style19 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update19l(event) {
  style19 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update20e(event) {
  style20 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update20l(event) {
  style20 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update21e(event) {
  style21 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update21l(event) {
  style21 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update22e(event) {
  style22 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update22l(event) {
  style22 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update23e(event) {
  style23 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update23l(event) {
  style23 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRe(event) {
  styleR = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRl(event) {
  styleR = style2;
  oldVnode = patch(oldVnode, newVnode());
}

var update = function update(x, mon) {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x, mMI1.x, mMI2.x, mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
  return mon;
};

},{"./cow.js":1,"snabbdom":9,"snabbdom/h":3,"snabbdom/modules/class":5,"snabbdom/modules/eventlisteners":6,"snabbdom/modules/props":7,"snabbdom/modules/style":8}],3:[function(require,module,exports){
var VNode = require('./vnode');
var is = require('./is');

module.exports = function h(sel, b, c) {
  var data = {}, children, text, i;
  if (arguments.length === 3) {
    data = b;
    if (is.array(c)) { children = c; }
    else if (is.primitive(c)) { text = c; }
  } else if (arguments.length === 2) {
    if (is.array(b)) { children = b; }
    else if (is.primitive(b)) { text = b; }
    else { data = b; }
  }
  if (is.array(children)) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
    }
  }
  return VNode(sel, data, children, text, undefined);
};

},{"./is":4,"./vnode":10}],4:[function(require,module,exports){
module.exports = {
  array: Array.isArray,
  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
};

},{}],5:[function(require,module,exports){
function updateClass(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldClass = oldVnode.data.class || {},
      klass = vnode.data.class || {};
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? 'add' : 'remove'](name);
    }
  }
}

module.exports = {create: updateClass, update: updateClass};

},{}],6:[function(require,module,exports){
var is = require('../is');

function arrInvoker(arr) {
  return function() {
    // Special case when length is two, for performance
    arr.length === 2 ? arr[0](arr[1]) : arr[0].apply(undefined, arr.slice(1));
  };
}

function fnInvoker(o) {
  return function(ev) { o.fn(ev); };
}

function updateEventListeners(oldVnode, vnode) {
  var name, cur, old, elm = vnode.elm,
      oldOn = oldVnode.data.on || {}, on = vnode.data.on;
  if (!on) return;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (old === undefined) {
      if (is.array(cur)) {
        elm.addEventListener(name, arrInvoker(cur));
      } else {
        cur = {fn: cur};
        on[name] = cur;
        elm.addEventListener(name, fnInvoker(cur));
      }
    } else if (is.array(old)) {
      // Deliberately modify old array since it's captured in closure created with `arrInvoker`
      old.length = cur.length;
      for (var i = 0; i < old.length; ++i) old[i] = cur[i];
      on[name]  = old;
    } else {
      old.fn = cur;
      on[name] = old;
    }
  }
}

module.exports = {create: updateEventListeners, update: updateEventListeners};

},{"../is":4}],7:[function(require,module,exports){
function updateProps(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldProps = oldVnode.data.props || {}, props = vnode.data.props || {};
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur) {
      elm[key] = cur;
    }
  }
}

module.exports = {create: updateProps, update: updateProps};

},{}],8:[function(require,module,exports){
var raf = requestAnimationFrame || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function updateStyle(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldStyle = oldVnode.data.style || {},
      style = vnode.data.style || {},
      oldHasDel = 'delayed' in oldStyle;
  for (name in style) {
    cur = style[name];
    if (name === 'delayed') {
      for (name in style.delayed) {
        cur = style.delayed[name];
        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
          setNextFrame(elm.style, name, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      elm.style[name] = cur;
    }
  }
}

function applyDestroyStyle(vnode) {
  var style, name, elm = vnode.elm, s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
      compStyle, style = s.remove, amount = 0, applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if(applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function(ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};

},{}],9:[function(require,module,exports){
// jshint newcap: false
/* global require, module, document, Element */
'use strict';

var VNode = require('./vnode');
var is = require('./is');

function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }

function emptyNodeAt(elm) {
  return VNode(elm.tagName, {}, [], undefined, elm);
}

var emptyNode = VNode('', {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, map = {}, key;
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

function createRmCb(childElm, listeners) {
  return function() {
    if (--listeners === 0) childElm.parentElement.removeChild(childElm);
  };
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules) {
  var i, j, cbs = {};
  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode);
      if (isDef(i = data.vnode)) vnode = i;
    }
    var elm, children = vnode.children, sel = vnode.sel;
    if (isDef(sel)) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? document.createElementNS(i, tag)
                                                          : document.createElement(tag);
      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
      if (dotIdx > 0) elm.className = sel.slice(dot+1).replace(/\./g, ' ');
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          elm.appendChild(createElm(children[i], insertedVnodeQueue));
        }
      } else if (is.primitive(vnode.text)) {
        elm.appendChild(document.createTextNode(vnode.text));
      }
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      elm = vnode.elm = document.createTextNode(vnode.text);
    }
    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      parentElm.insertBefore(createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i = vnode.data, j;
    if (isDef(i)) {
      if (isDef(i = i.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i, listeners, rm, ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
          if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
            i(ch, rm);
          } else {
            rm();
          }
        } else { // Text node
          parentElm.removeChild(ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0, newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) { // New element
          parentElm.insertBefore(createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
          oldCh[idxInOld] = undefined;
          parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;
    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    if (isDef(i = oldVnode.data) && isDef(i = i.vnode)) oldVnode = i;
    if (isDef(i = vnode.data) && isDef(i = i.vnode)) vnode = i;
    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
    if (oldVnode === vnode) return;
    if (isDef(vnode.data)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }
    } else if (oldVnode.text !== vnode.text) {
      elm.textContent = vnode.text;
    }
    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }

  return function(oldVnode, vnode) {
    var i;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();
    if (oldVnode instanceof Element) {
      if (oldVnode.parentElement !== null) {
        createElm(vnode, insertedVnodeQueue);
        oldVnode.parentElement.replaceChild(vnode.elm, oldVnode);
      } else {
        oldVnode = emptyNodeAt(oldVnode);
        patchVnode(oldVnode, vnode, insertedVnodeQueue);
      }
    } else {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    }
    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

module.exports = {init: init};

},{"./is":4,"./vnode":10}],10:[function(require,module,exports){
module.exports = function(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {sel: sel, data: data, children: children,
          text: text, elm: elm, key: key};
};

},{}]},{},[2]);
