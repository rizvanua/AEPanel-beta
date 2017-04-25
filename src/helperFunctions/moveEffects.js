import csInterface from '../csInterface';
import GlobalStorage from '../storage';
import R from "../raphaelContainer.js";

// Function to check an order of Effects' blocks (by X coordinate)


 function moveEffects (thisSet){

  GlobalStorage.historyOfObjects.itemArray.length=0;
  let storageName;
  let thisBlockEffectName;
  let typeBlock;
  let attrY;
  let obj;
  let promise;
  let sorted;
  let lowestBlock;
  let mymap;
  let myIndex;
  if(thisSet.setEffectName){
    storageName=thisSet.setEffectName;
      
  }
  else if(thisSet.thisCommonContrlName){
    storageName=thisSet.thisCommonContrlName;

  }


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
        attrY=GlobalStorage.historyOfObjects[key][0].getBBox().y;
        obj={name:thisBlockEffectName, y:attrY, typeBlock:typeBlock};

        GlobalStorage.historyOfObjects.itemArray.push(obj);
      }
        }




        promise= new Promise((resolve)=>{

          sorted=_.sortBy(GlobalStorage.historyOfObjects.itemArray, function(i){

              return i.y;// Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
          });
          lowestBlock=_.last(sorted);

          switch (lowestBlock.typeBlock) {
            case 'effect':

              GlobalStorage.undermostEffectBlock.y=lowestBlock.y;
              break;
            case 'control':

              GlobalStorage.undermostCommonControlBlock.y=lowestBlock.y;
              break;
            default:

          }

                resolve(sorted);
              }).then((resolve)=>{

                mymap=_.map(resolve,function(i,num){
                    return i.name;// create map of the array and get array of effects' names
                });
                  return mymap;
              }).then((mymap)=>{

                myIndex=_.indexOf(mymap,storageName);//get index of the curent effect in array. This Index is  the place of effect in order
                myIndex+=1;

                csInterface.evalScript(`$._ext.moveEffectIndex("${storageName}","${myIndex}")`,(res)=>{

                  GlobalStorage.effectCheckArr=GlobalStorage.historyOfObjects.itemArray.map((i)=>{
                    return i.name
                  });

                });
              });

}
export default  moveEffects;
