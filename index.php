<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Trivia Game</title>

    <!-- Bootstrap core CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/reset.css">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="assets/css/style.css">

    <img rel="icon" type="image/jpg" href="assets/images/game.jpg"/>



  </head>

  <body>
  
 
   
    <div class="container">
      <div class="header text-center clearfix">
        <h1 class="text-muted">KRAUTROCK TRIVIA</h1>
      </div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <div id="game">
        <img rel="icon" type="image/jpg" href="assets/images/game.jpg"/>
          <h2>KRAUTROCK TRIVIA</h2>
          <p id="remaining-time" class="lead">Time Left: <span id="timer"></span></p>
          <p id="question" class="lead"></p>
        </div>
        <div id="results">
        </div>
      </div>

      <div class="row">
        <div id="choices" class="text-center">
          <button id="start" class="btn btn-info btn-lg">Start Game</button>
          <div id="options">
            
          </div>
          
        </div>
      </div>

    </div> 


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="assets/javascript/app.js"></script>  


  </body>
</html>