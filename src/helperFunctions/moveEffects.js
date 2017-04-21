import csInterface from '../csInterface';
import GlobalStorage from '../storage';
import R from "../raphaelContainer.js";

// Function to check an order of Effects' blocks (by X coordinate)


 function moveEffects (thisSet){
   //console.log("moveEffects",thisSet);
//console.log(thisSet)
//console.log(JSON.stringify(R.canvas.innerHTML));
//console.log(GlobalStorage.historyOfObjects);
//console.log(JSON.stringify(GlobalStorage.historyOfObjects));
  GlobalStorage.historyOfObjects.itemArray.length=0;
  let storageName;
  let thisBlockEffectName;
  let typeBlock;
  if(thisSet.setEffectName){
    storageName=thisSet.setEffectName;
      //console.log(storageName);
  }
  else if(thisSet.thisCommonContrlName){
    storageName=thisSet.thisCommonContrlName;
    //console.log(storageName);
  }

    //GlobalStorage.historyOfObjects[storageName]=thisSet;
    for (let key in GlobalStorage.historyOfObjects) {
      if(key!="itemArray"){

        if(GlobalStorage.historyOfObjects[key].setEffectName){
          thisBlockEffectName=GlobalStorage.historyOfObjects[key].setEffectName;
          typeBlock='effect';
        }
        else if(GlobalStorage.historyOfObjects[key].thisCommonContrlName) {
          thisBlockEffectName=GlobalStorage.historyOfObjects[key].thisCommonContrlName;
          typeBlock='control';
        }
        let attrY=GlobalStorage.historyOfObjects[key][0].getBBox().y;
        let obj={name:thisBlockEffectName, y:attrY, typeBlock:typeBlock};
        //console.log(obj);
        GlobalStorage.historyOfObjects.itemArray.push(obj);
      }
        }




        let promise= new Promise((resolve)=>{
          //console.log(GlobalStorage.historyOfObjects);
          let test=_.sortBy(GlobalStorage.historyOfObjects.itemArray, function(i){

              return i.y;// Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
          });
          let lowestBlock=_.last(test);

          switch (lowestBlock.typeBlock) {
            case 'effect':
            //console.log('GlobalStorage.undermostEffectBlock.y',lowestBlock.y);
              GlobalStorage.undermostEffectBlock.y=lowestBlock.y;
              break;
            case 'control':
            //console.log('GlobalStorage.undermostCommonControlBlock.y',lowestBlock.y);
              GlobalStorage.undermostCommonControlBlock.y=lowestBlock.y;
              break;
            default:

          }

          //  GlobalStorage.undermostEffectBlock.y=test[test.length-1][1].attr("y");//this is the y coordinate of the lowermost blockEffect
//console.log(test);
                resolve(test);
              }).then((resolve)=>{
                //console.log(resolve);
                let mymap=_.map(resolve,function(i,num){
                  //if(i.name){
                    return i.name;// create map of the array and get array of effects' names
                //  }
                //  else if(i.thisCommonContrlName){
                  //  console.log(i.thisCommonContrlName);
                    //return i.thisCommonContrlName;// create map of the array and get array of effects' names
                  //}


                });
                  return mymap;
              }).then((mymap)=>{
                //console.log(mymap)
                let myIndex=_.indexOf(mymap,storageName);//get index of the curent effect in array. This Index is  the place of effect in order
                myIndex+=1;
                //console.log(myIndex);
                //console.log(storageName);
                csInterface.evalScript(`$._ext.moveEffectIndex("${storageName}","${myIndex}")`,(res)=>{
                  //console.log(GlobalStorage.effectCheckArr);
                  //console.log(GlobalStorage.historyOfObjects.itemArray);
                  GlobalStorage.effectCheckArr=GlobalStorage.historyOfObjects.itemArray.map((i)=>{
                    return i.name
                  });
                    //console.log(GlobalStorage.effectCheckArr);
                });
              });

}
export default  moveEffects;
