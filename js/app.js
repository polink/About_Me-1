'use strict';
var numCorrect = 0;
var userName;
//welcome user to my page and ask their name=q1
var uName = function () {
    var isValid = false;
    while (!isValid) {
        userName = prompt('Welcome to my favorite foods page! What should I call you?');
        if (userName == null || userName === '' || !userName) {
            alert(' you didn\'t give a valid username! try again!')
        } else {
            alert(userName + ' has entered the building!');
            isValid = true;
        }
    }
    alert('Nice to meet you ' + userName + '. Since this is a page about my favorite foods why dont you try to guess a few things about me? Please guess with yes/no or y/n.');
    console.log('visitors name: ' + userName);
}
uName();


//Do I love pizza?=q2
var piza = function(){
do {
    var pizzaLove = prompt('Do you think I love pizza?');
} while (!pizzaLove);
var pizzaLoveUp = pizzaLove.toUpperCase();

if (pizzaLoveUp === 'Y' || pizzaLoveUp === 'Yes') {
    alert('Of course!');
    numCorrect++;
} else if (pizzaLoveUp === 'N' || pizzaLoveUp === 'NO') {
    alert('...I love pizza... -.-');
} else {
    alert('Your answer should have been either Yes/y or No/n but I\'ll let it slide since it\'s an easy question.');
}
console.log('Do they think I like pizza?:' + pizzaLove);
}
piza();

//Do I like hawaian pizza?=q3
var hawaiian = function(){
var isValid = false;
while (!isValid) {
    var hawPiz = prompt('Not so hard because who doesn\'t love pizza? But do you think I like the most controversial of all pies? I\'m speaking, obviously, of canadian bacon and pineapple.');
    while (hawPiz == null || hawPiz === '' || !hawPiz) {
        var hawPiz = prompt('This question is too important to skip, please answer with Yes/y or No/n');
    }
    var hawPizUp = hawPiz.toUpperCase();
    if (hawPizUp === 'Y' || hawPizUp === 'YES') {
        numCorrect++;
        alert('You got it!');
        var isValid = true;
    } else if (hawPizUp === 'N' || hawPizUp === 'NO') {
        alert('I\'m and equal oppertunity lover of all pizza toppings!');
        var isValid = true;
    } else {
        alert('try again');
    }
}
console.log('Do they think I like hawian pizza: ' + hawPiz);
}
hawaiian();

//Do I like sushi?=q4
var sushi = function(){
var sushiLove = prompt('OK lets try another food. Do  you think I like sushi?');
if (sushiLove.toUpperCase() === 'YES' || sushiLove.toUpperCase() === 'Y') {
    numCorrect++;
    alert('You are correct ' + userName + '!');
} else {
    alert('You have answered incorrectly ' + userName);
}
console.log('Do they think I like sushi?: ' + sushiLove);
}
sushi();

//Do I like cottage cheese?=q5
var grossCheese = function(){
var cCLove = prompt('If someone offered me a free tub of cottage cheese would I take it?');
if (cCLove.toUpperCase() === 'YES' || cCLove.toUpperCase() === 'Y') {
    alert('NO!');
} else if (cCLove.toUpperCase() === 'NO' || cCLove.toUpperCase() === 'N') {
    numCorrect++;
    alert('I hate cottage cheese');
} else {
    alert('Do you usually strugle wuith instructions?');
}
console.log('Do they think I like cottage cheese?: ' + cCLove);
}
grossCheese();

//is watermelon my favorite fruit?=q6
var watermelon = function(){
var wMelon = prompt('Do you think the watermelon is my favorite fruit?');
while (!wMelon || (wMelon.toUpperCase() !== 'YES' && wMelon.toUpperCase() !== 'Y' && wMelon.toUpperCase() !== 'NO' && wMelon.toUpperCase() !== 'N')) {
    alert('This is the last question, ' + userName + ' please submit a valid answer.');
    var wMelon = prompt('Do you think the watermelon is my favorite fruit?');
}
if (wMelon.toUpperCase() === 'YES' || wMelon.toUpperCase() === 'Y') {
    numCorrect++;
    alert(userName + '... YOU\'RE RIGHT!');
} else if (wMelon.toUpperCase() === 'NO' || wMelon.toUpperCase() === 'N') {
    alert(userName + '*sigh* it\'s ok you don\'t know me.');
} else {
    alert('I don\'t klnow how you did it but congrats');
}
console.log('do they think that watermelon is my favorite fruit?' + wMelon);
}
watermelon();

//guess the highest mountain I've climbed=q7
//thanks to https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/ for turning stings into numbers
var mountain = function(){
var answ = 14000;
for (var i = 4; i > 0; i--) {
    var iTxt = i.toString();
    var quest = prompt('About how high in feet is the highest mountain I have ever climbed? You have ' + iTxt + ' guesses left');
    var questNum = parseInt(quest, 10);
    var questNumR = Math.round(questNum/1000)*1000;
    if (questNumR === answ) {
        numCorrect++;
        alert('Wow ' + userName + '! You got it right!');
        break;
    } else if (questNumR > answ) {
        alert('Thats too high try a lower number');
    } else if (questNumR < answ) {
        alert('The mountain was taller then that. Try a higher number.');
    } else {
        alert('Please enter a number.')
    }
}

if (questNumR !== answ) {
    alert('Don\'t worry about it that was a hard question. The correct answer was 14,000');
}
console.log('their last guess on q7' + quest);
}
mountain();


//what games do I like?=q8
var favGames = function(){
var games = ['starcraft', 'overwatch', 'poker', 'tsuro', 'settlers of catan', 'chess'];

    for (var i = 6; i > 0; i--) {
        var iTxt = i.toString();
       do{ 
        var gameQuest = prompt('I\'m a big fan of card, video, and board games.  Can you guess one of my 6 favorite games? You have ' + iTxt + ' trys left.');
    }while(!gameQuest);
        var gameQuestUp = gameQuest.toLowerCase();
        var gameQCheck = 0;
        switch (gameQuestUp) {
            case games[0]:
                gameQCheck++;
                alert('That\'s right I\'ve been playing Starcraft since 1999.');
                break;
            
            case games[1]:
                gameQCheck++;
                alert('Yes, I\'ve been playing Overwatch since it was in beta.');
                break;
            
            case games[2]:
                gameQCheck++;
                alert('My favorite kind of poker is texas hold \'em but I enjoy the math and interpersonal aspects of all poker.');
                break;
            case games[3]:
                gameQCheck++;
                alert('Yes and I\'m suprised you know Tsuro.');
                break;
            
            case games[4]:
                gameQCheck++;
                alert('I\'ve only recently started playing Settlers but it is already one of my favorite games.');
                break;
            
            case games[5]:
                gameQCheck++;
                alert('I\'ve been playing chess longer then I can remember. I\'m still not very good though so we should have a game sometime! :D');
                break;
            
            default:
                alert('Sorry that answer is incorrect.');
                break;
    }
    if (gameQCheck === 1) {
        numCorrect++;
        break;
    }
}

alert('My 6 favorite games are ' + games[0] + ', ' + games[1] + ', ' + games[2] + ', ' + games[3] + ', ' + games[4] + ', and ' + games[5]);
}
favGames();

// How many you got right
alert('You got '+numCorrect+ ' out of 7 questions right '+userName+'.');
console.log(numCorrect);