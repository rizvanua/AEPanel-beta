
function bezieLine(ox,oy,destx,desty){
  let Obj={
    cp1x:0,
    cp1y:0,
    cp2x:0,
    cp2y:0,
  }
  let distanceX = destx -ox;
  let cpOffset = distanceX * 0.2;
  Obj.cp1x = ox + cpOffset;
  Obj.cp1y = oy;
  Obj.cp2x = destx - cpOffset;
  Obj.cp2y = desty;

  return Obj;
}

export default bezieLine;
