
n toFloat(x, mon) {
  mon.x.map(function (x) {
    return parseFloat(x);
  });
  return mon;
};

var toFloat = function toFloat(x, mon) {
  mon.x.map(function (x) {
    return parseFloat(x);
  });
  return mon;
};

var toFloat = function toFloat(x,mon) {
  var newx = mon.x.map(function (x) {
    return parseFloat(x);
  });
  mon.ret(newx);
  return mon;
};



mM3.bnd(push,mM1,v).bnd(() => mM1.bnd(splice,v).bnd(clean).bnd(toFloat).bnd(() => mM3.bnd(toFloat)).bnd(() => mM1.bnd(calc,mM3.x[0], mM4.x, mM3.x[1])))


mM3.bnd(push,mM1,v).bnd(toFloat).bnd(() => mM1.bnd(splice,v).bnd(clean).bnd(toFloat).bnd(calc,mM3.x[0], mM4.x, mM3.x[1]))



