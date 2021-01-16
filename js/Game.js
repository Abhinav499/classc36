class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("GAME START",120,100);
  Player.getplayerinfo();
    if(allplayers!==undefined){
      var displayPos=130;
      for(var i in allplayers){
        if(i==="player"+player.index){
          fill ("red");

        }
        else{
          fill ("black");
        }
        displayPos+=20;
        textSize(15)
        text(allplayers[i].name+""+allplayers[i].distant,120,displayPos);
      }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distant=player.distant+50;
      player.update();
    }
  }
}
