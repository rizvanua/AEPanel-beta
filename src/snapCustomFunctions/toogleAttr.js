//Custom function to toogle Attribute clipPath

Snap.plugin( function( Snap, Element, Paper, global ) {
  Element.prototype.toogleAttr = function(elem,clipR,attr) {
  if (!elem.attr(attr)||elem.attr(attr)!=='none')
  {
    return this.node.removeAttribute(attr)
  }
  else{

  console.log('else');
  elem.attr({ clipPath: clipR })
}
      };
})
