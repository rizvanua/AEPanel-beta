//Custom function to hangle ellements in group

Snap.plugin((Snap, Element, Paper, global)=>{
  Snap.Set.prototype.forEachInGroup = function (callback) {

    for(let key in this.items[0] ){
      if(this.items[0][key].node){
        callback(this.items[0][key]);
      }
    }
  }
});
