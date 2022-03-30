function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "How to write a review") {
        return "To write a review, you must first be signed in, then simply go to the reviews section of the desired restaurant and click 'new review'!";
    } else if (input == "How to navigate") {
        return "You may navigate the site by using the tabs on the top right!";
    } else if (input == "I have a complaint") {
        return "Oh dear, we're sorry about that! Do contact us via the contact page, our team will get back to you within 2 working days:D";
    } else if (input == "What's your name?") {
        return "My name is Sam! Nice to meet you:D";
    } else if (input == "Hi Sam") {
        return "Hello!";
    } else {
        return "Sorry I didn't quite get that:(, try asking something else!";
    }

}