import GlobalStorage from '../storage';

function checkMantraVR(){
  if(GlobalStorage.hasVR){
      GlobalStorage.glassId.style.display="none";
  }
  else{
    GlobalStorage.glassId.style.display="block";
  }
}

export default checkMantraVR;
