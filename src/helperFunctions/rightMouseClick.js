function rightMouseClick(){
  window.addEventListener("contextmenu", function(event){
      event.preventDefault();
    });
}
export default rightMouseClick;
