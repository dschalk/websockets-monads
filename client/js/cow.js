import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const monad = h('pre', {style: {color: '#AFEEEE' }}, 
`
  class Monad {
    constructor(z) {

      this.x = z;

      this.bnd = (func, ...args) => {
        return func(this.x, this, ...args);
      };

      this.ret = a => {
        this.x = a;
        return this;
      };

      this.fmap = (f, mon = this, ...args) => {      
        mon.ret( f(mon.x, ...args));
        return mon;

      };
    }
  }; 
  
  class MonadIter {
    constructor(z,g) {

      this.x = z;
      this.id = g;
      this.flag = false;
      this.p = [];

      this.block = () => {
        this.flag = true;
        return this;
        }

      this.release = () => {
        let self = this;
        let p = this.p;

        if (p[1] === 'bnd') {
          p[2](self.x, self, ...p[3]);
          self.flag = false;
          return self;
        }

        if (p[1] === 'ret') {
          self.x = p[2];
          self.flag = false;
          return self;
        }

        if (p[1] === 'fmap') { 
          p[3].ret(p[2](p[3].x, ...p[4]));
          self.flag = false;
          return p[3];
        }
     }

      this.bnd = (func, ...args) => {
        let self = this;
        if (self.flag === false) {
          func(self.x, self, ...args);
          return self;
        }
        if (self.flag === true) {
          self.p = [self.id, 'bnd', func, args];
          return self;
        }
      }

      this.fmap = (f, mon = this, ...args) => {   
        let self = this;
          if (self.flag === false) {
            mon.ret(f(mon.x,  ...args));
            return mon;
          }
          if (self.flag === true) {
            self.p = [self.id, 'fmap', f, mon, args];
            return self;
          }
      }

      this.ret = a => { 
        let self = this;
          if (self.flag === false) {
            self.x = a;
          }
          if (self.flag === true) {
          self.p = [self.id, 'ret', a];
          return self;
          }
        this.flag = false;
        return this;
      }
    }}
` );  

const steps = h('pre', {style: {color: '#AFEEEE' }}, 
`    mM1.ret(0).bnd(x => mM2.ret(x.x).bnd(() => mM3.ret(0)
     .bnd(x => mM4.ret(x.x)
     .bnd(() => mM1.ret('Click the mMI2.release() button to proceed')
     .bnd(() => mMI2.block()
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMI2.block()
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMI2.block()
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMI2.block()
     .bnd(() => mM1.ret(0).bnd(x => mM2.ret(x.x).bnd(() => mM3.ret(0)
     .bnd(() => mM4.ret(0))
      ))))))))))))));
`
 );  

const dice = h('pre', {style: {color: '#AFEEEE' }}, 
`  function updateNums(e) {
    mM2.ret([e.target.value, e.target.textContent]) 
    .bnd(() => mM3)
    .bnd(push,mM2.x[1])
    .bnd(() => {mM1.x[mM2.x[0]] = ""; return mM5;})
    .bnd(update)
    updateCalc();
  }
  
  function updateOp(e) {
    mM8.ret(e.target.textContent);
    updateCalc();
  }  

  function updateCalc() {  
    if ((mM8.x === 0) || (mM3.x.length !== 2)) {return};
    mM19.bnd(() => (
    (mMI2.block()
      .bnd(() => mM13
      .ret(mM13.x + 1)
      .bnd(() => send())) ),
    (mMI4.block()
      .bnd(() => mM13
      .ret(mM13.x + 3)
      .bnd(() => send())) ),  
    (mM3
      .bnd(toFloat)
      .bnd(() => mM7
      .fmap(() => {return calc(mM3.x[0], mM8.x, mM3.x[1])})
      .bnd(() => mM1.bnd(push, mM7.x)
      .bnd(clean)
      .bnd(next, (mM7.x == 18), mMI4)
      .bnd(next, (mM7.x == 20), mMI2) )
      .bnd(displayOff, mM1.x.length)
      .bnd(() => mM3
      .ret([])
      .bnd(() => mM4
      .ret(0).bnd(mM8.ret)
      .bnd(() => mM5.ret('Done')
      .bnd(update)   )))) )
    )) 
  }
  
);  

  var next = function next(x,mon,bool,mon2) {  
    if (bool) {
      mon2.release();
    }
    return mon
    }  `
);  


const send = h('pre', {style: {color: '#AFEEEE' }}, 
`    var send = function(event) {
        socket.send("CA#$42,solo," + LoginName +",6,6,12,20");
    };`
);  

const nex = h('pre', {style: {color: '#AFEEEE' }}, 
`  var next = function next(x,mon,bool,mon2) {
    if (bool) {
      mon2.release();
    }
    return mon
  }  `
);  




export default {monad, steps, next, dice, send};




