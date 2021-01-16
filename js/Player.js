class Player {
  constructor(){
    this.index=null;
    this.distant=0;
    this.name=null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distant:this.distant
    });
  }
 static getplayerinfo(){
    var playerinforef=database.ref('players').on("value",(data)=>{
      allplayers=data.val();
    })
  }
}
