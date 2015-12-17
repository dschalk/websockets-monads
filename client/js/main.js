"use strict";
import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import cow from './cow.js';

// const socket = new WebSocket("ws://schalk.net:4002");

function createWebSocket(path) {
    let host = window.location.hostname;
    if(host == '') host = 'localhost';
    let uri = 'ws://' + host + ':4002' + path;

    let Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
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

var send = function(event) {
      socket.send("CA#$42,solo," + LoginName +",6,6,12,20");
};

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);
https://github.com/paldepind/snabbdom 
var oldVnode = document.getElementById('placeholder');

function view(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, mI1, mI2) { 
    return h('div',{style: style3}, 
    [  h('div',{style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '20px'}}, 
    [ h('h1', {style: {textAlign: 'center', color: '#ffba66'}}, 'Websockets Monads'),
      h('span', 'This is the second page in the new Javascript Monads series. Detailed explanations of the basic monad constructor, "Monad" and its methods and the arguments they take can be found at '),
      h('a', {props: {href: 'http://schalk.net:4001' },  style: {color: '#EECCFF'}},' http://schalk.net:4001'), 
      h('span', ' and a code repo at '),
      h('a', {props: {href: 'https://github.com/dschalk/fun-with-monads'}, style: {color: '#EECCFF'}}, ' github repo' ),
      h('span', 'The original site, which was largely exploratory, is at: '  ),
      h('a', {props: {href: 'http://transcendent.ninja' },  style: {color: '#EECCFF'}},' http://transcendent.ninja'), 
      h('span', ' and a code repo at '),
      h('a', {props: {href: 'https://github.com/dschalk/javascript-monads'}, style: {color: '#EECCFF'}}, ' repo' ),
      h('span', '. The older site functions well, but it was bloated and unwieldy with React. I say "bloated" because I didn\'t need most of its core features. I didn\'t even use the state object and frequently called React.forceUpdate. Now I am at peace, using the '  ),
      h('a', {props: {href: 'https://github.com/paldepind/snabbdom' },  style: {color: '#EECCFF'}},' snabbdom library. '), 
      h('span', ' and a code repo at '),
      h('p', ),
      h('h2', {style: {textAlign: 'center', color: '#ffba66'}}, 'MonadIter' ),
      h('p', 'The basic monad is shown and demonstrated elsewhere. It is also in a script named "monad.js" in the "index.html" file, so you can experiment with the monads in the browser consol. Here is the other constructor in this project: '  ),
      cow.monadIter,
      h('p', 'As a refresher, Click the next button to execute the indicated code, then click the mMI2.release() button four times.'  ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4},
            [ cow.steps ],  ),
      h('br', ),    
      h('br', ),    
      h('button', {on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6},
            [ cow.next ],   ),
      h('p', 'Now, a demonstration of monads handling websockets messages. In order to create a unique socket, please enter some name.'  ),
      h('input', {style: inputStyle1, on: {keydown: updateLogin},  } ),
      h('button', {on: { mouseenter: update8e, mouseleave: update8l, click: updateNums }, props: {value: 0, id: '0'}, style: style8},
            m1[0]   ),
      h('button', {on: { mouseenter: update9e, mouseleave: update9l, click: updateNums }, props: {value: 1, id: '1'}, style: style9},
            m1[1]   ),
      h('button', {on: { mouseenter: update10e, mouseleave: update10l, click: updateNums }, props: {value: 2, id: '2'}, style: style10},
            m1[2]   ),
      h('button', {on: { mouseenter: update11e, mouseleave: update11l, click: updateNums }, props: {value: 3, id: '3'}, style: style11},
            m1[3]   ),
      h('p', ' ',  ),
      h('button', {on: { mouseenter: update12e, mouseleave: update12l, click: updateOp }, style: style12},
            m7[0]   ),
      h('button', {on: { mouseenter: update13e, mouseleave: update13l, click: updateOp }, style: style13},
            m7[1]   ),
      h('button', {on: { mouseenter: update14e, mouseleave: update14l, click: updateOp }, style: style14},
            m7[2]   ),
      h('button', {on: { mouseenter: update15e, mouseleave: update15l, click: updateOp }, style: style15},
            m7[3]   ),
      h('button', {on: { mouseenter: update16e, mouseleave: update16l, click: updateOp }, style: style16},
            m7[4]   ),
      h('p', '  '  ),

          h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: send }, style: style5},
                     `ROLL`   ),


      h('p', 'Now click ROLL. '  ),
      h('p', 'When you click a number, it disappears. After two numbers and an operator have been selected, in any order, a computation is performed and the result is placed at the end of the numbers row. Now there are three numbers. After another round, two are left and finally, the last computation can be performed. ',  ),
      h('p', 'You can click ROLL repeatedly and the Haskell server will obligingly provide new numbers. The numbers simulate the roll of four dice; two six-sided, one twelve-sided, and one twenty-sided. They are integral to the "Game of Score" application, in which players gain points by making the number "20". '  ),
      h('p', 'Every time you compute the number 20, mM13.x gets incremented by 1 and the mM14.x display on the right shows "<login_name>\'s score: <score>". As you can see in the click handlers below below, there are two chains for number clicks and two chains for operator clicks. In each case, the top chain is the execution path and the bottom chain uses boolean tests to control when the chain should compute a result and when the player should be given a point. Blocking and releasing is implemented with instances of MonadIter.'  ),
      h('p', 'I have written algorithms for such behavior in the past. Never before has the code been so concise and well organized. First I\'ll show the two click handlers; one for numbers and the other for operators. '    ),
      cow.dice,
      h('p', 'When numbers are clicked, they get pushed into mM3.x, an initially empty array. When an operator is clicked, it replaces "0" as the value of mM8. So when mM3.x.length === 2 and mM8.x !== 0, it is time for the computation to go forward. '  ),
      h('p', 'mM1 hold the initial dice roll and the subsequent arrays of available numbers. When the last element in the mM1.x array (mMx.x[mM1.x.length -1] is "20", the player get an additional point and a new roll.'   ), 
      h('p', 'My first "Game of Score" application ran on a Node.js server. The algorithm for the successive computations was a convoluted mess of callbacks between modules. Later, I re-made the application using a modified Haskell Wai-Websockets server with React in the browser. That was less of a mess, but there were plenty of calls to "React.setState" and the code wasn\'t real easy to follow. Using these monads, the main function calls are organized in one chain and timing decisions are organized in another. Once you get used to it, the code is very easy to follow. Identify the blocks in one chain and see when they are released in the other.'  ),
      h('p', 'The functions provided to bind are simple. They perform a task, and then return a monad so the chain can continue. Here is the code for the decision function "next": '    ),
      cow.next,
      h('p', 'Using "bnd" with "next", any monad can release any block. '    ),
      h('span', 'In "Page 3" of this series, "Websockets-monads-II", I will embellish the dice roll algorithm with more feature. All of the code is available at '   ),
      h('a', {props: {href: 'https://github.com/dschalk'}, style: {color: '#EECCFF'}}, 'github.com/dschalk'  ),
      h('div', {style: {height: '300px'}} ),
        ] ), 
      h ('div',{style: { width: '30%', position: 'fixed', top: '40px', right: '15px', color: '#CCFDDA'}},
        [
          h('br'),
          h('span', 'mM1.x: '),
          h('span', {style: styleM}, '  ' + m1),
          h('br'),
          h('span', 'mM2.x: '),
          h('span', {style: styleM}, '  ' + m2),
          h('br'),
          h('span', 'mM3.x: '),
          h('span', {style: styleM}, '  ' + m3),
          h('br'),
          h('span', 'mM4.x: '),
          h('span', {style: styleM}, '  ' + m4),
          h('br'),
          h('span', 'mM5.x: '),
          h('span', {style: styleM}, '  ' + m5),
          h('br'),
          h('span', 'mM6.x: '),
          h('span', {style: styleM}, '  ' + m6),
          h('br'),
          h('span', 'mM7.x: '),
          h('span', {style: styleM}, '  ' + m7),
          h('br'),
          h('span', 'mM8.x: '),
          h('span', {style: styleM}, '  ' + m8),
          h('br'),
          h('span', 'mM9.x: '),
          h('span', {style: styleM}, '  ' + m9),
          h('br'),
          h('span', 'mM10.x: '),
          h('span', {style: styleM}, '  ' + m10),
          h('br'),
          h('span', 'mM11.x: '),
          h('span', {style: styleM}, '  ' + m11),
          h('br'),
          h('span', 'mM12.x: '),
          h('span', {style: styleM}, '  ' + m12),
          h('br'),
          h('span', 'mM13.x: '),
          h('span', {style: styleM}, '  ' + m13),
          h('br'),
          h('span', 'mM14.x: '),
          h('span', {style: styleM}, '  ' + m14),
          h('br'),
          h('span', 'mM15.x: '),
          h('span', {style: styleM}, '  ' + m15),
          h('br'),
          h('span', 'mM16.x: '),
          h('span', {style: styleM}, '  ' + m16),
          h('br'),
          h('span', 'mM17.x: '),
          h('span', {style: styleM}, '  ' + m17),
          h('br'),
          h('span', 'mM18.x: '),
          h('span', {style: styleM}, '  ' + m18),
          h('br'),
          h('span', 'mM19.x: '),
          h('span', {style: styleM}, '  ' + m19),
          h('br'),
          h('span', 'mMI1.x: '),
          h('span', {style: styleMI}, '  ' + mI1),
          h('br'),
          h('span', 'mMI2.x: '),
          h('span', {style: styleMI}, '  ' + mI2),
          h('br'),
          h('br'),
          h('br'),
          h('button', {on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR},
                     `REFRESH`   ),
          h('br', ),           
          h('br', ),           
           
        ] )        
    ] )
}  

var newVnode  = () => {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x,
  mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMI1.x, mMI2.x);
  return newVnode;
}

function update0() {
  oldVnode = patch(oldVnode, newVnode());
}

function updateNums(e) {
  mM2.ret([e.target.value, e.target.textContent]) 
  .bnd(() => mM3)
  .bnd(push,mM2.x[1])
  .bnd(() => {mM1.x[mM2.x[0]] = ""; return mM5;})
  .bnd(next,(mM8.x !== 0 && mM3.x.length === 2), mMI1)
  .bnd(next, (mM1.x[mM1.x.length - 1] == 20), mMI2)
  .bnd(update)
  .bnd(() => mMI1
      .block()
      .bnd(() => mM3
      .bnd(toFloat)
      .bnd(() => mM1
      .bnd(calc,mM3.x[0], mM8.x, mM3.x[1])
      .bnd(clean)
      .bnd(displayOff, mM1.x.length)
      .bnd(() => mM3
      .ret([])
      .bnd(() => mM4
      .ret(0).bnd(mM8.ret)
      .bnd(() => mM5.ret('Done')
      .bnd(update)   )) ))  
      .bnd(() => mMI2
          .block()
          .bnd(() => mM13.ret(mM13.x + 1).bnd(() => send())))))
}

function updateOp(e) {
  mM8.ret(e.target.textContent)
  .bnd(() => mM5.ret('Waiting')
  .bnd(next, (mM3.x.length == 2),  mMI1)
  .bnd(next, (mM1.x[mM1.x.length - 1] == 20), mMI2)
  .bnd(update) 
  .bnd(update)
  .bnd(() => mMI1)
      .block()
      .bnd(() => mM3
      .bnd(toFloat)
      .bnd(() => mM1
      .bnd(calc,mM3.x[0], mM8.x, mM3.x[1])
      .bnd(clean)
      .bnd(displayOff, mM1.x.length)
      .bnd(() => mM3
      .ret([])
      .bnd(() => mM4
      .ret(0).bnd(mM8.ret)
      .bnd(() => mM5.ret('Done')
      .bnd(update)   )) )) 
          .bnd(() => mMI2.block()
          .bnd(() => mM13.ret(mM13.x + 1).bnd(() => send())))))
}

function updateLogin(e) {

     let v = e.target.value;
     if (v == '' ) {
       return;
     } 
     if( e.keyCode == 13 ) {
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
  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(mM5.ret)
  .bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mMI1.ret).bnd(mMI2.ret);  
  oldVnode = patch(oldVnode, newVnode());
}

function updateSteps(event) {
    mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
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
  console.log(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode());
}

function updateNext(event) {
  mMI2.release()  
  console.log(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode());
}

function updateEvent(event) {
  mMI2.ret(event);
  console.log(event);
  oldVnode = patch(oldVnode, newVnode());
}

oldVnode = patch(oldVnode, newVnode());

socket.onmessage = function(event) {
  console.log('cow', event);
  let gameArray = event.data.split(",");
  console.log(event);
  console.log(gameArray);
  let makeStr = x => {
    let l = x.length;
    let str = '';
      for (let i=5; i<l; i+=1) {
        str = str + ', ' + x[i];
      }
    return (x[4] + ' ' + str);
  }
  let d2 = event.data.substring(0,6);
  // let d3 = event.data.substring(2,6);
  let sendersGroup = gameArray[1]; 
  let sender = gameArray[2];
  let extra = gameArray[3];
  let ext4 = gameArray[4];
  let ext5 = gameArray[5];
  let ext6 = gameArray[6];
  let ext7 = gameArray[7];
  let ext8 = gameArray[8];
  // let group = that.data.group;
  // let name = that.state.name;
  let ar = extra.split("<br>");
  let ar2 = ar.map(function (x) {
    return x.split("_")
  })
      switch (d2) {
          case "CC#$42":                         // Not broadcast. Login message.
            if (extra === '%#8*&&^1#$%^')  {
              mM6.ret('Name taken');
              //that.setState({info: `You entered a name which is already taken`})
              setTimeout( function () {
                document.location.reload(false);
              },2000);
            }
            else {
              mM6.ret(sender + '\'s socket is now open');
              update0();
            }
      
          break;

          case "CZ#$42":                             // Solutions.
          break;
          
          case "CA#$42":                             // Triggedarkred by ROLL
              mM1.ret([extra,  ext4,  ext5,  ext6]);
              mM7.ret(['add', 'subtract', 'mult', 'div', 'concat']); 
              mM3.ret([]);
              mM8.ret(0);
              mM6.bnd(displayInline,1);
              mM6.bnd(displayInline,2);
              mM6.bnd(displayInline,3);
              var senderScore = sender + "\u2019s score: " + mM13.x;

              mM14.ret(senderScore);
              update0();
          break;

          case "DI#$42":                              // Changes data.information .
          break

          case "CE#$42":                             // Updates numbers during play.
          break;

          case "CB#$42":                               // Updates the scoreboaard.
          break;

          case "CD#$42":
          break;

          case "CF#$42":                              // Re-set after a each clculation.
          break;

          case "CH#$42":
          break;

          case "CK#$42":                      // Updates DS_T after each calculation.
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

          case "CR#$42":                 // Resets the player interface after each round.
          break;

          case "CY#$42": // Triggedarkred by clicking "SCORE!".
          break;

          case "XY#$42":              // Triggedarkred by clicking "SCORE!" after "IMPOSSIBLE".
          break;

          case "DY#$42":                               // Triggered by clicking  "IMPOSSIBLE".
          break;

          case "DC#$42":
          break;

          case "DZ#$42":                                  // NOT IN USE
          break;

          case "IA#$42":
          break;

          default:
          break;
      }
   }

var inputStyle1 = inputStyleA;

var inputStyleA = { backgroundColor: '#d8d17d', display: 'inline'} ;

var inputStyleB = { display: 'none'} ;

var style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var styleHide = {display: 'none'};

var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: '18px', textAlign: 'left' };

var styleM = {color: '#FF000A', marginLeft: '13px', marginBottom: '2px', fontSize: '21px' };

var styleMI = {color: '#FF000A', marginLeft: '7px', marginBottom: '2px', fontSize: '21px' };

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

var update = function update(x,mon) {
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x,
  mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
  return mon;
}

