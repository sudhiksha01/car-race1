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
    player.getPlayer();
    if(allPlayers!==undefined){
      var position=250;
for(var i in allPlayers){
position=position+20
textSize(15);
text(allPlayers[i].name+":"+allPlayers[i].distance,220,position)
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
  player.distance=player.distance+50
  player.update()
}
    }
  }
}
