//import csInterface from '../csInterface';
import GlobalStorage from '../storage';
import csInterface from "../csInterface";
import innerDeleteFunction from "../helperFunctions/innerDeleteFunction";
//Custom event. Event is run when something is deletede from After Effects explicitly
let deleteBlockEvent = new Event('deleteBlockEvent');
document.addEventListener('deleteBlockEvent', function (e) {
/*console.log(GlobalStorage.blockToRemove);
console.log(GlobalStorage.effectCheckArr);
console.log(this.effectCheckArr);*/
let nameOfBlock
//GlobalStorage.undermostEffectBlock.y=10;

GlobalStorage.blockToRemove.forEach((i, num)=>{

  //console.log(GlobalStorage.blockToRemove[num]);
  //console.log(GlobalStorage.historyOfObjects);
  nameOfBlock=GlobalStorage.blockToRemove[num];
  GlobalStorage.toDelete=GlobalStorage.historyOfObjects[nameOfBlock];
  //innerDeleteFunction(nameOfBlock);
  let promise= new Promise((resolve)=>{
    GlobalStorage.overMouseSet=null;
    //let effectName=GlobalStorage.toDelete.setEffectName;
    if(GlobalStorage.toDelete&&GlobalStorage.toDelete.setEffectName&&GlobalStorage.historyOfObjects[nameOfBlock]){//Remove ordinar effects (not chained with Distributor)
      let effectName=GlobalStorage.toDelete.setEffectName;
      delete GlobalStorage.historyOfObjects[effectName];
      if(effectName=="Mantra VR"){
      let glassId=document.getElementById("glass");
      glassId.style.display="block";
    }
      //Call to ExtScript

                  //csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{//Remove effects from After Effects
                    let remove=GlobalStorage.toDelete.remove()
                    resolve(remove);
                  //});

      //

    }
    else if(GlobalStorage.toDelete&&GlobalStorage.toDelete.thisCommonContrlName&&GlobalStorage.historyOfObjects[nameOfBlock]){//Remove CommonControls
      let CommonContrlName= GlobalStorage.toDelete.fullCommonContrlName;
      let thisCommonContrlName=GlobalStorage.toDelete.thisCommonContrlName;
      let itemsArray=GlobalStorage.toDelete.items;

      let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{//filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
      if(i.node.nodeName=="path"){
        //console.log(i.LineTo);
        //console.log(GlobalStorage.toDelete.currentName);
        if(GlobalStorage.historyOfObjects[i.LineTo]&&GlobalStorage.toDelete.currentName!=i.LineTo){
          let elemObj=GlobalStorage.historyOfObjects[i.LineTo][0][0];
          for (let key in elemObj){
            if(elemObj[key].type=='rect'&&elemObj[key].attr('propDataName')==i.propertyOfEffect){
              elemObj[key].node.previousElementSibling.classList.remove('true');
              elemObj[key].node.previousElementSibling.classList.add('false');
            }
          }
          return i.LineTo;
        }

      }



      });


      //let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
      //    if(i.DistributorEffects){
      //      return i.DistributorEffects.join(';')
      //    }
      //    return i.LineTo;
     //
      //});
      let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects

            let jsonObject;
              jsonObject='{"Lineto":"'+i.LineTo+'","propertyOfEffect":"'+i.propertyOfEffect+'"}';
          return jsonObject;

        });

  let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');//transform array to string to pass in into "ext.deleteCommonControl" function

console.log(thisCommonContrlName);
csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{
});
let remove=GlobalStorage.toDelete.remove()
delete GlobalStorage.historyOfObjects[nameOfBlock];
resolve(remove);

/*if(thisCommonContrlName!="Master"){
  csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{
  });
  let remove=GlobalStorage.toDelete.remove()
  delete GlobalStorage.historyOfObjects[nameOfBlock];
  resolve(remove);
}
else{
  csInterface.evalScript(`$._ext.createMasterMultiplier()`);
}*/




        //

    }
    //resolve ()
    })
    .then((resolve)=>{

    resolve=undefined;
    GlobalStorage.toDelete=undefined;
    GlobalStorage.prevActive=undefined;


    });

  //GlobalStorage.historyOfObjects[nameOfBlock].remove();


  //console.log('START');
  //console.log(GlobalStorage.historyOfObjects);
/*if(GlobalStorage.toDelete&&GlobalStorage.toDelete.setEffectName){//Remove effects

    let effectName=GlobalStorage.toDelete.setEffectName;


    //Call to ExtScript

                csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{//Remove effects from After Effects
                  //GlobalStorage.historyOfObjects[nameOfBlock].remove();
                  let remove=GlobalStorage.toDelete.remove()
                  delete GlobalStorage.historyOfObjects[nameOfBlock];
                  console.log('END EFFECT');
                  console.log(GlobalStorage.historyOfObjects);
                });

    //


}
else if(GlobalStorage.toDelete&&GlobalStorage.toDelete.thisCommonContrlName){
  //!
    let CommonContrlName= GlobalStorage.toDelete.fullCommonContrlName;
    let thisCommonContrlName=GlobalStorage.toDelete.thisCommonContrlName;
    let itemsArray=GlobalStorage.toDelete.items;

    let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{//filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )

      if(i.node.nodeName=="path"&&!i.DistributorEffects){
        //console.log(i.propertyOfEffect);
        //console.log(GlobalStorage.historyOfObjects[i.LineTo][0][0]);
        let elemObj=GlobalStorage.historyOfObjects[i.LineTo][0][0]
        for (let key in elemObj){
          if(elemObj[key].type=='rect'&&elemObj[key].attr('propDataName')==i.propertyOfEffect){
            elemObj[key].node.previousElementSibling.classList.remove('true');
            elemObj[key].node.previousElementSibling.classList.add('false');
          }
        }

        return i.LineTo;
      }
      else if(i.node.nodeName=="path"&&i.DistributorEffects){
          return i.DistributorEffects;

      }


    });


    //let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
    //    if(i.DistributorEffects){
    //      return i.DistributorEffects.join(';')
    //    }
    //    return i.LineTo;
    //
    //});
    let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
          if(i.DistributorEffects){
            return i.DistributorEffects.join(';')
          }
          let jsonObject;
            jsonObject='{"Lineto":"'+i.LineTo+'","propertyOfEffect":"'+i.propertyOfEffect+'"}';
        return jsonObject;

      });

  let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');//transform array to string to pass in into "ext.deleteCommonControl" function
      //Call to ExtScript
//console.log(arrayOfLinkedEffectsString);
                  //console.log(GlobalStorage.toDelete.thisCommonContrlName);
console.log(GlobalStorage.toDelete[0].node.effectName);

  //console.log(CommonContrlName);

  //console.log(thisCommonContrlName);

    csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{

    let remove=GlobalStorage.toDelete.remove();
    delete GlobalStorage.historyOfObjects[nameOfBlock];
    console.log('END CONTROL');
    console.log(GlobalStorage.historyOfObjects);

    });

  //!

}*/
  //delete GlobalStorage.historyOfObjects[nameOfBlock];
});


  /*if(GlobalStorage.historyOfObjects[objectKey]){// check if object wicth this name exists in historyOfObjects (if exist this is EffectObject)
    delete GlobalStorage.historyOfObjects[objectKey];//Remove effects from historyOfObjects
    //Call to ExtScript

                csInterface.evalScript(`$._ext.deleteEffect("${objectKey}")`,(res)=>{//Remove effects from After Effects

                  let remove=GlobalStorage.effectCheckArr.remove()
                  resolve(remove);
                });

    //
  }*/

}, false);

export  default deleteBlockEvent;
