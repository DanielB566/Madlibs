let adjective = prompt('Enter an adjective:');
let noun = prompt('Enter a noun:');
let verb = prompt('Enter a verb:');
let adverb = prompt('Enter an adverb:');

let story = `Once upon a time, in a ${adjective} ${noun}, a ${noun} ${adjective} ${verb}.`;

let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
