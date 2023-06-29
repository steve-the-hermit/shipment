document.addEventListener('DOMContentLoaded', function() {
    const characterBar = document.getElementById('character-bar');
    const detailedInfo = document.getElementById('detailed-info');
    const nameElement = document.getElementById('name');
    const imageElement = document.getElementById('image');
    const voteCountElement = document.getElementById('vote-count');
    const votesForm = document.getElementById('votes-form');
  
    // Fetch characters from the server
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(characters => {
        // Render character bar
        renderCharacterBar(characters);
      })
      .catch(error => console.error('Error fetching characters:', error));
  
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
  
    votesForm.addEventListener('submit', voteForCharacter);
  });
  