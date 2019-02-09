      
const  userPlay =userInput=>{
    userInput=userInput.toLowerCase();
      if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
      return userInput;
      }else {
        
     return  console.log("system error!");
      }
  }
    const computerPlay= ()=>{
     const randomNumber= Math.floor(Math.random() *3);
      switch(randomNumber){
        case 0:
          return 'rock';
          break;
        case 1:
          return 'paper';
          break;
        case 2:
          return 'scissors';
          break;
        default:
          console.log('errrorrrr');
      }
    }
    const determineWinner=(userChoice,computerChoice)=>{
       if(userChoice===computerChoice) {
        return 'The game is a tie !';
      }
     if(userChoice==='rock'){
        if(computerChoice==='paper') {
           return 'Computer won!';
           }
       else{
           return 'user won!'
         }
       }
      
     if(userChoice==='paper'){
         if(computerChoice==='rock') {
           return 'user won!';
           }
      else{
           return 'computer  won!'
         }
     }
        if(userChoice==='scissors'){
          if(computerChoice==='paper') {
            return 'user won!';
           }
         else{
           return 'computer  won!'
         }
        }
    }
    const playgame=(userChoice,computerChoice)=> {
      userChoice=userPlay('rock');
      computerChoice=computerPlay();
      console.log(`your choice is : ${userChoice}.`);
      console.log(`computers choice is: ${computerChoice}.`);
      console.log(`${determineWinner('rock',computerChoice)}`)
      
    }
    playgame()