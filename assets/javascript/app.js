$(document).ready(function(){
  

  $("#remaining-time").hide();
  $("#start").on('click', Krautrock.startGame);
  $(document).on('click' , '.option', Krautrock.guessChecker);
  
})

var Krautrock = {

  // Krautrock properties
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerOn: false,
  timerId : '',
  // questions options and answers data
  questions: {
    q1: "Who replaced Malcolm Mooney as lead singer of Can in 1970?",
    q2: "What band from Ohio recorded their first album in Colonge, Germany?",
    q3: "Which famous Kraut Rock band had entirely English members?",
    q4: "While known for their work in the 70's, which band recorded the Grand Theft Auto V soundtrack?",
    q5: "Which album did David Bowie record first after moving to Germany in 1976?",
    q6: "What distinctive drumbeat was made famous by Jaki Liebezeit and Klaus Dinger?",
    q7: "This supergroup features members of the bands Neu! and Cluster?",
    q8: "Of these bands, three are from Düsseldorf, but which band is from Wümme?",
  },
  options: {
    q1: ['Micheal Rother', 'Brian Eno', 'Peter Föller', 'Damo Suzuki'],
    q2: ['Ultravox', 'DEVO', 'The Godz', 'Ash Ra Tempel'],
    q3: ['Nektar', 'Birth Control', 'The Cosmic Jokers', 'Guru Guru'],
    q4: ['Kraftwerk', 'Tangerine Dream', 'Cluster', 'Brainticket'],
    q5: ['Lodger', 'Heroes', 'Station to Station', 'Low'],
    q6: ['Motorik', 'Four on the floor', 'kosmischemusik', 'Amen Break'],
    q7: ['Kraan', 'Novalis', 'Harmonia', 'Popul Vuh'],
    q8: ['Kraftwerk', 'La Düsseldorf', 'Neu!', 'Faust'],
  },
  answers: {
    q1: 'Damo Suzuki',
    q2: 'DEVO',
    q3: 'Nektar',
    q4: 'Tangerine Dream',
    q5: 'Low',
    q6: 'Motorik',
    q7: 'Harmonia',
    q8: 'Faust',
  },
  // Krautock main game engine


  // method to initialize game

  startGame: function(){

    // Game reset

    Krautrock.currentSet = 0;
    Krautrock.correct = 0;
    Krautrock.incorrect = 0;
    Krautrock.unanswered = 0;
    clearInterval(Krautrock.timerId);
    
    
    $('#game').show();
      
    $('#results').html('');
    
    $('#timer').text(Krautrock.timer);
    
    $('#start').hide();

    $('#remaining-time').show();
    
  
    Krautrock.nextQuestion();
    
  },
  // Question and answers loop
  nextQuestion : function(){
    
  
    Krautrock.timer = 15;
     $('#timer').removeClass('last-seconds');
    $('#timer').text(Krautrock.timer);
    
    // This is to prevent the Timer from speeding up
    if(!Krautrock.timerOn){
      Krautrock.timerId = setInterval(Krautrock.timerRunning, 1000);
    }
    
    // Grabs questions
    var questionContent = Object.values(Krautrock.questions)[Krautrock.currentSet];
    $('#question').text(questionContent);
    
    
    var questionOptions = Object.values(Krautrock.options)[Krautrock.currentSet];
    
    // this displays all the answer options by appending the html

    $.each(questionOptions, function(index, key){
      $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
    })
    
  },
  
  // main timing engine 

  timerRunning : function(){
    

    if(Krautrock.timer > -1 && Krautrock.currentSet < Object.keys(Krautrock.questions).length){
      $('#timer').text(Krautrock.timer);
      Krautrock.timer--;
        if(Krautrock.timer === 4){
          $('#timer').addClass('last-seconds');
        }
    }
    // The game "BUZZER"
    else if(Krautrock.timer === -1){
      Krautrock.unanswered++;
      Krautrock.result = false;
      clearInterval(Krautrock.timerId);
      resultId = setTimeout(Krautrock.guessResult, 3000);
      $('#results').html('<h3>Times up! The correct answer was '+ Object.values(Krautrock.answers)[Krautrock.currentSet] +'</h3>');
    }
    
    else if(Krautrock.currentSet === Object.keys(Krautrock.questions).length){
      
      // scoreboard

      $('#results')
        .html('<h3>Thanks for playing. Hope ya had fun.</h3>'+
        '<p>Correct: '+ Krautrock.correct +'</p>'+
        '<p>Incorrect: '+ Krautrock.incorrect +'</p>'+
        '<p>Unaswered: '+ Krautrock.unanswered +'</p>');
      
      // hide game sction
      $('#game').hide();
      
      // show start button to begin a new game
      $('#start').show();
    }
    
  },
  // Game brain-- checks the answer clicked
  guessChecker : function() {
    
    
    var resultId;
    
    // the current answer
    var currentAnswer = Object.values(Krautrock.answers)[Krautrock.currentSet];
    
   
    if($(this).text() === currentAnswer){
      // turn button green for correct
      $(this).addClass('btn-success').removeClass('btn-info');
      
      Krautrock.correct++;
      clearInterval(Krautrock.timerId);
      resultId = setTimeout(Krautrock.guessResult, 1000);
      $('#results').html('<h3>Correct Answer!</h3>');
    }
    // incorrect else function
    else{
      // turn button clicked red if wrong
      
      $(this).addClass('btn-danger').removeClass('btn-info');
      
      Krautrock.incorrect++;
      clearInterval(Krautrock.timerId);
      resultId = setTimeout(Krautrock.guessResult, 1000);
      $('#results').html('<h3>Oof! Better luck next time. '+ currentAnswer +'</h3>');
    }
    
  },
  // method to remove previous question results and options
  guessResult : function(){
    
    // increment to next question set
    Krautrock.currentSet++;
    
    // remove the options and results
    $('.option').remove();
    $('#results h3').remove();
    
    // begin next question
    Krautrock.nextQuestion();
     
  }
    
  }