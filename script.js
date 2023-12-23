document.getElementById('generateMadLib').addEventListener('click', function () {

let adjective = prompt('Enter an adjective:');
let noun = prompt('Enter a noun:');
let verb = prompt('Enter a verb:');
let adverb = prompt('Enter an adverb:');

let story = `Once upon a time, in a ${adjective} little town, a ${noun} with festive lights, a ${noun} ${adjective} ${verb}. On Christmas Eve, the smell of freshly baked cookies filled the air, and the sound
of crackling fire ${verb} in every home. The citizens gather at the town square, where a huge ${noun} stood tall, covered in ornaments. Kids built a snowman in the middle of the town, using a hat that was 
found in an old ${noun}, bringing it to life with ${adjective} eyes that gleamed with joy. As the night fell, a gentle snow ${verb} from the sky, turning the town into a winter wonderland.
The residents exchanged gifts, sharing the spirit of ${adjective} generoisty. And so, in this ${adjective} little town, the magic of Christmas filled every corner, creating memories that would be
remeber for years to come.`;

let madLibOutputDiv = document.getElementById('madLibOutput');


madLibOutputDiv.innerHTML = `<p>${story}</p>`;

})
