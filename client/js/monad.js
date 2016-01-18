'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Monad = function Monad(z) {
  var _this = this;

  _classCallCheck(this, Monad);

  this.x = z;

  this.bnd = function (func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(undefined, [_this].concat(args));
  };

  this.ret = function (a) {
    _this.x = a;
    return _this;
  };

  this.fmap = function (f) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var mon = arguments.length <= 1 || arguments[1] === undefined ? _this : arguments[1];

    mon.ret(f.apply(undefined, [mon.x].concat(args)));
    return mon;
  };
};

;

var MonadIter = function MonadIter(z, g) {
  var _this2 = this;

  _classCallCheck(this, MonadIter);

  this.x = z;
  this.id = g;
  this.flag = false;
  this.p = [];

  this.block = function () {
    _this2.flag = true;
    return _this2;
  };

  this.release = function () {
    var self = _this2;
    var p = _this2.p;

    if (p[1] === 'bnd') {
      p[2].apply(p, [self.x, self].concat(_toConsumableArray(p[3])));
      self.flag = false;
      return self;
    }

    if (p[1] === 'ret') {
      self.x = p[2];
      self.flag = false;
      return self;
    }

    if (p[1] === 'fmap') {
      p[3].ret(p[2].apply(p, [p[3].x].concat(_toConsumableArray(p[4]))));
      self.flag = false;
      return p[3];
    }
  };

  this.bnd = function (func) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    var self = _this2;
    if (self.flag === false) {
      func.apply(undefined, [self].concat(args));
      return self;
    }
    if (self.flag === true) {
      self.p = [self.id, 'bnd', func, args];
      return self;
    }
  };

  this.fmap = function (f) {
    for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    var mon = arguments.length <= 1 || arguments[1] === undefined ? _this2 : arguments[1];

    var self = _this2;
    if (self.flag === false) {
      mon.ret(f.apply(undefined, [mon.x].concat(args)));
      return mon;
    }
    if (self.flag === true) {
      self.p = [self.id, 'fmap', f, mon, args];
      return self;
    }
  };

  this.ret = function (a) {
    var self = _this2;
    if (self.flag === false) {
      self.x = a;
    }
    if (self.flag === true) {
      self.p = [self.id, 'ret', a];
      return self;
    }
    _this2.flag = false;
    return _this2;
  };
};

var pure = function pure(mon) {
  if (typeof mon.x.x == 'undefined') {
    return mon;
  }
  mon.ret(mon.x.x);
  return mon;
};

var bnd = function bnd(f, mon) {
  for (var _len5 = arguments.length, args = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    args[_key5 - 2] = arguments[_key5];
  }

  return f.apply(undefined, [mon].concat(args));
};

var ret = function ret(v) {
  var mon = new Monad(v);
  return mon;
}

var Mcube = function(v) {
  var mon = new Monad(v*v*v);
  return mon;
}

var Madd = function(a,b) {
  var mon = new Monad(a+b);
  return mon;
}

var fmap = function fmap(f, mon) {
  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  var v = mon.x;
  mon.ret(f.apply(undefined, [v].concat(args)));
  return mon;
};

var Val = 0;

var M = function M(a) {
  return new Monad(a);
};

var mM1 = M([]);
var mM2 = M(0);
var mM3 = M(0);
var mM4 = M(0);
var mM5 = M(0);
var mM6 = M(0);
var mM7 = M(0);
var mM8 = M(0);
var mM9 = M(0);
var mM10 = M(0);
var mM11 = M(0);
var mM12 = M(0);
var mM13 = M(0);
var mM14 = M(0);
var mM15 = M(0);
var mM16 = M(0);
var mM17 = M(0);
var mM18 = M(0);
var mM19 = M(0);

var MI = function MI(a, b) {
  return new MonadIter(a, b);
};

var mMI1 = MI(0, 'mMI1');
var mMI2 = MI(0, 'mMI2');
var mMI3 = MI(0, 'mMI3');
var mMI4 = MI(0, 'mMI4');
var mMI5 = MI(0, 'mMI5');
var mMI6 = MI(0, 'mMI6');

var toNums = function toNums(mon) {
  mon.x = mon.x.map(x => parseFloat(x));
  return mon; 
}

var calc = function calc(a,op,b) { 
  var result;
  switch (op) {
      case "add": result = (a + b);
      break;
      case "subtract": result = (a - b);
      break;
      case "mult": result = (a * b);
      break;
      case "div": result = (a / b);
      break;
      case "concat": result = (a+""+b)*1.0;
      break;
      default : 'Major Malfunction in calc.';
  }
  return result;
}

var push = function push(mon,v) {
    var a = mon.x;
    a.push(v);
    mon.ret(a);
    return mon;
}

var displayOff = function displayOff(mon,a) {
    document.getElementById(a).style.display = 'none';
    return mon;
}

var displayInline = function displayInline(mon,a) {
    document.getElementById(a).style.display = 'inline';
    return mon;
}

var displayBlock = function displayBlock(mon,a) {
    document.getElementById(a).style.display = 'block';
    return mon;
}

var popPush = function popPush(mon,a) {
  mon.x.pop;
  mon.x.push(a);
  return mon;
}

var blank = function blank(v,mon,i) {
  mon.x[i] = "";
  return mon;
}

var clean = function clean(mon) {
  mon.x = mon.x.filter(x => (x !== "" && x !== undefined));
  return mon;
}
  
var toFloat = function toFloat(mon) {
  var newx = mon.x.map(function (a) {
    return parseFloat(a);
  });
  mon.ret(newx);
  return mon;
};

var splice = function splice(mon,i) {
  mon.x.splice(i,1);
  return mon;
}

var next = function next(mon,bool,mon2) {
  if (bool) {
    mon2.release();
  }
  return mon
}

var doub = function doub(mon) {
  mon.ret(mon.x + mon.x);
  return mon;
};

var square = function square(mon) {
  mon.ret(mon.x * mon.x);
  return mon;
};

var tripple = function tripple(mon) {
  mon.ret(mon.x + mon.x + mon.x);
  return mon;
};

var cube =  function cube(mon) {
  mon.ret(mon.x * mon.x * mon.x);
  return mon;
};

var add = function add(mon, y) {
  mon.ret(mon.x + y);
  return mon;
};

var mult = function mult(mon, y) {
  mon.ret(mon.x * y);
  return mon;
};

var lg = '';

var log = function log(mon, y) {
  console.log(y);
  return mon;
};

var fnc = function fnc(a, b) {
  return a.b;
};

var branch = function branch(mon, a) {
  return mon;
};

var branchT = function branchT(mon, a) {
  setTimeout(function () {
    return mon;
  }, 500);
};

var rand = function rand(a, b) {
  return Math.floor(Math.random() * (a - b)) + b;
};

var ran = function ran(mon) {
  mon.ret(Math.floor(Math.random() * -4 + 5));
  return mon;
};

var chance = function chance(mon) {
  var a = rand(1, 5);
  var b = rand(1, 5);
  var c = rand(1, 5);
  mM1.ret(a);
  mM2.ret(b);
  mM3.ret(c);
  if (a === b && a === c) {
    mM4.ret('Winner! Three of a kind');
    return mon;
  }
  if (a === b || a === c || b === c) {
    mM4.ret('Pair. Try for three');
    return mon;
  }
  mM4.ret('Zilch. Don\'t give up now.');
  return mon;
};

var ch = function ch(mon, a, b, c) {
  if (a === b && a === c) {
    mon.ret('Winner! Three of a kind');
    return mon;
  }
  if (a === b || a === c || b === c) {
    mon.ret('Pair. Try for three');
    return mon;
  }
  mon.ret('Zilch. Don\'t give up now.');
  return mon;
};

var jackpot = function jackpot(mon) {
  var k = 1;
  for (k; k < 5; k += 1) {
    if (x === [k, k, k, k, k, k]) {
      mM10.ret("Jackpot!");
      return mon;
    }
  }
  mM10.ret("No jackpot time");
  return mon;
};

var bench = function bench(mon) {
  var self = undefined;
  var k = 0;
  var j = 0;
  var d1 = new Date();
  for (k; k < 1000000; k++) {
    mM1 = new Monad(k);
  }
  mon.ret(new Date() - d1);
  return mon;
};

var bench2 = function bench2() {
  var self = undefined;
  var k = 0;
  var j = 0;
  var d1 = new Date();
  for (k; k < 1000000; k++) {
    mM2.ret(k);
  }
  resBench2 = new Date() - d1;
  setTimeout(function () {
    self.forceUpdate();
  }, 12);
};

var cu = function cu(x) {
  return x * x * x;
};
var sq = function sq(x) {
  return x * x;
};
var du = function du(x) {
  return x * x;
};
var ad = function ad(a, b) {
  return a + b;
};
var id = function id(x) {
  return x;
};
var lo = function lo(x) {
  return console.log(x);
};

var block = function block(mon, mon2) {
  mon2.flag = true;
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$', mon2.id, mon2.x, mon2.flag);
  return mon;
};

var release = function release(mon, mon2) {
  mon2.flag = false;
  console.log('***************************', mon2.id, mon2.x, mon2.flag);
  return mon;
};

var test5 = function test5(m) {
  var x = m.x;
  m.ret(x + 3).bnd(add, 1).bnd(mMS2.ret).bnd(add, 1).bnd(doub);
};

var test6 = function test6() {
  mMS1.ret(3).fmap(ad, mMS2, mMS1.x).fmap(du).fmap(ad, mM1, mMS1.x).fmap(cu).fmap(id, mMS3).bnd(add, mMS2.x + 1000);
};

var delay = function delay(mon) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000);
  });
};

var increment = function increment() {
  VAL = VAL + 1;
};
