'use strict';

var modal = document.getElementById("cover");
//Close the Modal
function closeModal() {
    modal.style.display = "none";
}

function questions(){
    console.log(questions)
      
var questionAsk = ['Do I write Poetry?','Is my favorite type of pizza NY style?','Do I have a dog?','Am I alive?','Am I Batman?'];
var answerQuest = ['yes','no','yes','no','no','yes','yes','no','no','yes'];
var correctResponse = ['You are correct! It\'s been a hobby and a habit of mine since 5th grade.','You absolute buffoon. How dare you put that disgusting slice above the holy pie that is Chicago deep dish. I would say there is a special place in ell for your kind, but New York already is that place.','If only. Unfortuantely, I am stuck in my personal, agonizing limbo with Beau, and as each day goes by, I become more fearful that he is immortal. He has consumed all that was good in my life, but refuses to end me. Instead he just sits there, taunting me with his tongue out, staring deep into my now empty soul. At least I don\'t have a cat.','hahahahahahahahahahahahahahahahah. Who knows?','You\'re right, of course. I just find it a little hurtful that you didn\'t even consider that I could be. I knew it was unfunny and desperate when I wrote it, I guess I was just hoping that you would humor me for the sake of support. Guess not'];
var wrongResponse = ['Actually, I loving writing poetry, and have been doing it since the 5th grade','You, my fellow person of culture, are correct. Us Chicago deep dish purists must stick together to defend against the New York style heathens','According to the judge, I am legally required to refer to Beau as a dog. Colloquioally, I prefer to address him as a furry spawn of pure evil whose cold, void-like, and empty eyes hide his singular goal to ruin my life by any means neccesary.','hahahahahahahahahahahahahahahahah. It\'s all a simulation.','What? Of course he\'s not Batman. Here are the question YOU need to be asking: What led you to believe that a real person could be a fictional character How bad is Damian\'s sense of humour, that he actually wrote that question?'];  

var favCountries = ["Greece", "Ethiopia", "France", "United States"];

var properAnswer = false;
var correctGuess = false;
var numGuess = 0;

var correctAnswer = 0;

for(var i=0;i<questionAsk.length;i++){   
    var forAns = prompt(questionAsk[i]); 

        console.log(i, forAns, questionAsk[i]);

    while(properAnswer === false){

        if(forAns === answerQuest[i*2]){
            alert(correctResponse[i]); 
            properAnswer = true;
            correctAnswer++;

            console.log(correctResponse[i],properAnswer);

        } else if(forAns === answerQuest[(i*2)+1]){
            alert(wrongResponse[i]);
            properAnswer = true;

            console.log(wrongResponse[i],properAnswer);

        } else {
            alert('It seems you did not put in an acceptable answer. Please only type yes or no.');
            properAnswer = true;
            i--;
            console.log(forAns, correctResponse[i],wrongResponse[i],properAnswer,correctResponse);
        }
    } 
    properAnswer = false; 
}

//Ear Infection Question
    while(properAnswer === false && numGuess < 4) {

        var guess = parseInt(prompt("Now that you know all this about me, this question should be easy to you. How many times have I gotten an ear infection."));

        if(guess === 13) {
            alert("Congrats! You've guessed the right number");
            properAnswer = true;
            correctAnswer++;
        } else if(guess > 13) {
            numGuess++;
            alert("Unfortuantely the answer is smaller than that. You have " + (4 - numGuess) +' guesses left.');
        } else if(guess < 13) {
            numGuess++;
            alert('That\'s too low. Try a bigger number. You have ' + (4 - numGuess) + ' guesses left.');
        } else {
            alert('It seems you haven\'t entered a valid response. Please limit your answers to numbers. You still have ' + (4-numGuess) + ' guesses left.');
        }

    }

    //If the user did not get the right answer, tell them
    if(correctGuess === false && numGuess === 3) {
        alert('The correct was 13. THat\'s right I\'ve had 13 ear infections');
    }

    properAnswer = false;
    numGuess = 0;

    //Favorite countries
    while (properAnswer === false && numGuess < 6) {

        guess = prompt("Ok that question was easy. Now you have to guess one of my favorite countries");
        console.log(guess)

        for(i = 0; i < favCountries.length; i++) {

            console.log(favCountries[i])
             
            if(y.toLowerCase() === favCountries[i].toLowerCase()) {

                console.log(guess, favCountries[i]);
                correctGuess2 = true;
                console.log(correctGuess);
                alert('That\'s correct! ' + favCountries[i] + ' is one of my favorite countries.')
                correctAnswer = correctAnswer + 1;
                break;

            }
        }

        if(properAnswer === false ){

            numGuess++;
            alert('While it is interesting, ' + y + ' is not one of my countries You have ' + (6 - numGuess2) + ' guesses left.');
        
        }
    }

    //So everyone can know all my favorite countries
    if(properAnswer === false) {
        alert('The complete list of my favorite countries are Greece, Ethiopia, France, and the United States');
    }
    console.log('The user final answer was ' + guess, guess, correctGuess, numGuess);

    alert('Good job finishing the guessing game. You got ' + correctAnswer + ' questions right out of 7. ');
    modal.style.display = "none";

}
