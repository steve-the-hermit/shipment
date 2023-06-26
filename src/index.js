document.addEventListener('DOMContentLoaded', function() {
  const characterBar = document.getElementById('character-bar');
  const detailedInfo = document.getElementById('detailed-info');
  const nameElement = document.getElementById('name');
  const imageElement = document.getElementById('image');
  const voteCountElement = document.getElementById('vote-count');
  const votesForm = document.getElementById('votes-form');

  const characters = [
    {
      id: 1,
      name: 'Mr. Cute',
      image: 'https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif',
      votes: 0
    },
    {
      id: 2,
      name: 'Mx. Monkey',
      image: 'https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif',
      votes: 0
    },
    {
      id: 3,
      name: 'Ms. Zebra',
      image: 'https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif',
      votes: 0
    },
    {
      id: 4,
      name: 'Dr. Lion',
      image: 'http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif',
      votes: 0
    },
    {
      id: 5,
      name: 'Mme. Panda',
      image: 'https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif',
      votes: 0
    }
  ];

  function displayCharacterDetails(character) {
    nameElement.textContent = character.name;
    imageElement.src = character.image;
    voteCountElement.textContent = character.votes;
    detailedInfo.style.display = 'block';
  }

  function voteForCharacter(event) {
    event.preventDefault();
    const votesInput = document.getElementById('votes');
    const votes = parseInt(votesInput.value, 10);
    const currentVotes = parseInt(voteCountElement.textContent, 10);
    voteCountElement.textContent = currentVotes + votes;
    votesInput.value = '';
  }

  function createCharacterElement(character) {
    const characterName = document.createElement('span');
    characterName.textContent = character.name;
    characterName.addEventListener('click', function() {
      displayCharacterDetails(character);
    });
    return characterName;
  }

  function renderCharacterBar(characters) {
    characters.forEach(function(character) {
      const characterElement = createCharacterElement(character);
      characterBar.appendChild(characterElement);
    });
  }

  renderCharacterBar(characters);

  votesForm.addEventListener('submit', voteForCharacter);
});
