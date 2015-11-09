	$(function(){

	console.log('working');
	});	

	window.onload = function(){
		var myCanvas = document.getElementById('myCanvas');
			var	context = myCanvas.getContext("2d");
			var Track = new Image();
			var ctxW = myCanvas.width;
			var ctxH = myCanvas.height;

			Track.src = "Track.jpg";

				var xPos = 0;	// car postiton
				var yPos = 190;
				var X = 0;      // Car2 position
				var Y = 250;
	
				var car = new Image();	    // Red Car	
					car.onload = function(){
						context.drawImage(car,xPos,yPos);
					};
						car.src="Car_one.png";

				var car2 = new Image();		// Black Car
					car.onload = function(){
						context.drawImage(car2,X,Y);
					};
					car2.src = "car.png";		
			
		function draw(){
			var	context = myCanvas.getContext("2d");
				context.clearRect(0, 0, 800, 800);
				context.drawImage(Track,0,0);
				context.drawImage(car,xPos,yPos);
				context.drawImage(car2,X,Y);
			}

				function move(e){
											// Keyboard controls left,right. car
					if(e.keyCode == 39){
						xPos +=8;
					}
						if (e.keyCode == 37){
							xPos -=8;
						}
							if(e.keyCode == 68){     // Keyboard controls left,right. Car2
								X +=8;
							}
								if (e.keyCode==65) {
									X -=8;
								};
								myCanvas.width = myCanvas.width;
								draw();
								winner();
				}

				document.onkeydown = move;

				function winner(){
					if(xPos >= 840){
						alert('Player 1 Winner!');
					}
						if (X >=840) {
							alert('Player 2 Winner!')
						};
				}

				$('#reset_btn').on('click',function(e){
					xPos = 0;
					X = 0;
				});
				 
								
};
			