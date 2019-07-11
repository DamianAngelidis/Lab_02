var properAnswer1 = false;
var properAnswer2 = false;
var properAnswer3 = false;
var properAnswer4 = false;
var properAnswer5 = false;

var correctAnswer = 0;

var correctGuess = false;
var numGuess = 0;

favCountries = ["Greece", "Ethiopia", "France", "United States"];
var correctGuess2 = false;
var numGuess2 = 0;

var modal = document.getElementById("cover");

function closeModal() {
    modal.style.display = "none";
}

function questions() {
    console.log('Im in')
    while(properAnswer1 === false) {

        var writesPoems =  prompt('Does Damian write poetry?');

        if (writesPoems.toLowerCase() === 'yes' || writesPoems.toLowerCase() === 'y') {
            alert('You are correct! It\'s been a hobby and a habit of mine since 5th grade.');
            properAnswer1 = true;
            correctAnswer = correctAnswer + 1;
        }
        else if (writesPoems.toLowerCase() === 'no' || writesPoems.toLowerCase() === 'n') {
            alert('Actually, I loving writing poetry, and have been doing it since the 5th grade');
            properAnswer1 = true;
        }
        else {
            alert('It seems that you didn\'t input an acceptable answer. To answer yes, type "yes" or just "y". For no, "no" or "n" will suffice.');
        }

    }

        console.log('The user answered ' + writesPoems + ' when asked whether or not Damian wrote poetry');

    while(properAnswer2 === false) { 

        var favPizza = prompt('Is Damian\'s favority type of pizza New York style? (y/n)')

        if (favPizza.toLowerCase() === 'yes' || favPizza.toLowerCase() === 'y') {
            alert('You absolute buffoon. How dare you put that disgusting slice above the holy pie that is Chicago deep dish. I would say there is a special place in ell for your kind, but New York already is that place.');
            properAnswer2 = true;
            correctAnswer = correctAnswer + 1;
        }
        else if (favPizza.toLowerCase() === 'no' || favPizza.toLowerCase() === 'n') {
            alert('You, my fellow person of culture, are correct. Us Chicago deep dish purists must stick together to defend against the New York style heathens');
            properAnswer2 = true;
        }
        else {
            alert('It seems that you didn\'t input an acceptable answer. To answer yes, type "yes" or just "y". For no, "no" or "n" will suffice.');
        }

    }

        console.log('The user answered ' + favPizza + ' when asked whether or not Damian\'s favorite type of pizza was New York style.');

    while(properAnswer3 === false) { 

        var hasDog =  prompt('Does Damian have a dog? (y/n)');

        if (hasDog.toLowerCase() === 'yes' || hasDog.toLowerCase() === 'y') {
            alert('According to the judge, I am legally required to refer to Beau as a dog. Colloquioally, I prefer to address him as a furry spawn of pure evil whose cold, void-like, and empty eyes hide his singular goal to ruin my life by any means neccesary.');
            properAnswer3 = true;
            correctAnswer = correctAnswer + 1;
        }
        else if (hasDog.toLowerCase() === 'no' || hasDog.toLowerCase() === 'n') {
            alert('If only. Unfortuantely, I am stuck in my personal, agonizing limbo with Beau, and as each day goes by, I become more fearful that he is immortal. He has consumed all that was good in my life, but refuses to end me. Instead he just sits there, taunting me with his tongue out, staring deep into my now empty soul. At least I don\'t have a cat.');
            properAnswer3 = true;
        }
        else {
            alert('It seems that you didn\'t input an acceptable answer. To answer yes, type "yes" or just "y". For no, "no" or "n" will suffice.');
        }

    }

        console.log('The user answered ' + hasDog + ' when asked whether or not Damian had a dog.');

    while(properAnswer4 === false) { 

        var alive =  prompt('Is Damian alive? (y/n)');

        if (alive.toLowerCase() === 'yes' || alive.toLowerCase() === 'y') {
            alert('hahahahahahahahahahahahahahahahah. Who knows?');
            properAnswer4 = true;
            correctAnswer = correctAnswer + 1;
        }
        else if (alive.toLowerCase() === 'no' || alive.toLowerCase() === 'n') {
            alert('hahahahahahahahahahahahahahahahah. It\'s all a simulation.');
            properAnswer4 = true;
        }
        else {
            alert('It seems that you didn\'t input an acceptable answer. To answer yes, type "yes" or just "y". For no, "no" or "n" will suffice.');
        }

    }

        console.log('The user answered ' + alive + ' when asked whether or not Damian was alive.');

    while(properAnswer5 === false) { 

        var imBatman =  prompt('Is Damian Batman? (y/n)');

        if (imBatman.toLowerCase() === 'yes' || imBatman.toLowerCase() === 'y') {
            alert('What? Of course he\'s not Batman. Here are the question YOU need to be asking: What led you to believe that a real person could be a fictional character How bad is Damian\'s sense of humour, that he actually wrote that question?');
            properAnswer5 = true;
            correctAnswer = correctAnswer + 1;
        }
        else if (imBatman.toLowerCase() === 'no' || imBatman.toLowerCase() === 'n') {
            alert('You\'re right, of course. I just find it a little hurtful that you didn\'t even consider that I could be. I knew it was unfunny and desperate when I wrote it, I guess I was just hoping that you would humor me for the sake of support. Guess not');
            properAnswer5 =  true;
        }
        else {
            alert('It seems that you didn\'t input an acceptable answer. To answer yes, type "yes" or just "y". For no, "no" or "n" will suffice.');
        }

    }

    while(correctGuess === false && numGuess < 4) {

        var x = parseInt(prompt("Now that you know all this about me, this question should be easy to you. How many times have I gotten an ear infection."));
        console.log('user answer', x, typeof(x));

        if(x === 13) {
            alert("Congrats! You've guessed the right number");
            correctGuess = true;
        } else if(x > 13) {
            numGuess++;
            alert("Unfortuantely the answer is smaller than that. You have " + (4 - numGuess) +' guesses left.');
        } else if(x < 13) {
            numGuess++;
            alert('That\'s too low. Try a bigger number. You have ' + (4 - numGuess) + ' guesses left.');
        } else {
            alert('It seems you haven\'t entered a valid response. Please limit your answers to numbers. You still have ' + (4-numGuess) + ' guesses left.');
        }

    }

    if(correctGuess === false && numGuess === 3) {
        alert('The correct was 13. THat\'s right I\'ve had 13 ear infections');
    }

        console.log('The user answered ' + imBatman + ' when asked whether or not Damian is Batman.');

    while (correctGuess2 === false && numGuess2 < 6) {

        var y = prompt("Ok that question was easy. Now you have to guess one of my favorite countries");
        console.log(y)

        for(i = 0; i < favCountries.length; i++) {
            console.log(favCountries[i])
            if(y.toLowerCase() === favCountries[i].toLowerCase()) {
                console.log(y, favCountries[i]);
                correctGuess2 = true;
                console.log(correctGuess2);
                alert('That\'s correct! ' + favCountries[i] + ' is one of my favorite countries.')
                break;
            }
        }
        if(correctGuess2 === false ){
            numGuess2++;
            alert('While it is interesting, ' + y + ' is not one of my countries You have ' + (6 - numGuess2) + ' guesses left.');
        }
    }

    alert('The complete list of my favorite countries are Greece, Ethiopia, France, and the United States');

    modal.style.display = "none";
}