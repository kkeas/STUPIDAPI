function generateMadlib() {
    /**
 * Generates a random madlib sentence based on user input.
 * Retrieves sentences from the server, selects a random sentence,
 * and replaces placeholders with user-provided values.
 * Displays the generated madlib sentence on the page.
 */
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;
    var adjective = document.getElementById("adjective").value;
  
    var sentences = [
      `In a ${adjective} galaxy far, far away, a ${noun} decided to ${verb} through the cosmos.`,
      `The ${adjective} ${noun} embarked on a quest to ${verb} the secrets of the universe.`,
      `As the ${noun} ${verb}ed through the ${adjective} nebula, it discovered a new world.`,
      `The ${adjective} starship, piloted by a brave ${noun}, ${verb}ed into uncharted territory.`,
      `In the ${adjective} void of space, the ${noun} ${verb}ed with determination.`,
      `The ${noun}'s ${adjective} mission was to ${verb} the galaxy and bring peace to all.`,
      `With a ${adjective} crew and a sturdy ${noun}, they ${verb}ed to explore the final frontier.`,
      `The ${adjective} ${noun} ${verb}ed through asteroid fields and cosmic storms.`,
      `In the ${adjective} depths of the universe, the ${noun} ${verb}ed to unravel the mysteries of existence.`,
      `The ${noun}'s ${adjective} journey to ${verb} the cosmos had only just begun.`
    ];
  
    var madlib = sentences[Math.floor(Math.random() * sentences.length)];
    document.getElementById("madlib").innerHTML = madlib;
  }
