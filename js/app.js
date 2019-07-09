var properAnswer1 = false;

while(properAnswer1 === false) { 

    var writesPoems =  prompt('Does Damian writes poetry (y/n)');

    if (writesPoems.toLowerCase() === 'yes' || writesPoems.toLowerCase() === 'y') {
        alert('You are correct! It\'s been a hobby and a habit of mine since 5th grade.');
        properAnswer1 = true;
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

var properAnswer2 = false;

while(properAnswer2 === false) { 

    var favPizza =  prompt('Is New York style pizza Damian\'s favorite type of pizza? (y/n)');

    if (favPizza.toLowerCase() === 'yes' || favPizza.toLowerCase() === 'y') {
        alert('You absolute buffoon. How dare you put that disgusting slice above the holy pie that is Chicago deep dish. I would say there is a special place in ell for your kind, but New York already is that place.');
        properAnswer2 = true;
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

var properAnswer3 = false;

while(properAnswer3 === false) { 

    var hasDog =  prompt('Does Damian have a dog? (y/n)');

    if (hasDog.toLowerCase() === 'yes' || hasDog.toLowerCase() === 'y') {
        alert('According to the judge, I am legally required to refer to Beau as a dog. Colloquioally, I prefer to address him as a furry spawn of pure evil whose cold, void-like, and empty eyes hide his singular goal to ruin my life by any means neccesary.');
        properAnswer3 = true;
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

var properAnswer4 = false;

while(properAnswer4 === false) { 

    var alive =  prompt('Is Damian alive? (y/n)');

    if (alive.toLowerCase() === 'yes' || alive.toLowerCase() === 'y') {
        alert('hahahahahahahahahahahahahahahahah. Who knows?');
        properAnswer4 = true;
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


var properAnswer5 = false;

while(properAnswer5 === false) { 

    var imBatman =  prompt('Is Damian Batman? (y/n)');

    if (imBatman.toLowerCase() === 'yes' || imBatman.toLowerCase() === 'y') {
        alert('What? Of course he\'s not Batman. Here are the question YOU need to be asking: What led you to believe that a real person could be a fictional character How bad is Damian\'s sense of humour, that he actually wrote that question?');
        properAnswer5 = true;
    }
    else if (imBatman.toLowerCase() === 'no' || imBatman.toLowerCase() === 'n') {
        alert('You\'re right, of course. I just find it a little hurtful that you didn\'t even consider that I could be. I knew it was unfunny and desperate when I wrote it, I guess I was just hoping that you would humor me for the sake of support. Guess not');
        properAnswer5 =  true;
    }
    else {
        alert('It seems that you didn\'t input an acceptable answer. To answer yes, type "yes" or just "y". For no, "no" or "n" will suffice.');
    }

}
console.log('The user answered ' + imBatman + ' when asked whether or not Damian is Batman.');