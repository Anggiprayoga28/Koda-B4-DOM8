let allCharacters = [];

async function fetchCharacters() {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    allCharacters = response.data.results;
    displayCharacters(allCharacters);
  } catch (error) {
    console.error("Error fetching characters:", error);
    document.getElementById("characters").innerHTML =
      '<p class="text-center text-red-600">Error loading characters</p>';
  }
}

function displayCharacters(characters) {
  const charactersContainer = document.getElementById("characters");
  charactersContainer.innerHTML = characters
    .map(
      (character) => `
                        <div class="bg-white border border-gray-300 rounded-lg p-4 text-center">
                            <img src="${character.image}" alt="${character.name}" class="w-full h-45 object-cover rounded">
                            <h3 class="mt-2.5 mb-1.5 mx-0 text-gray-800 text-lg font-normal">${character.name}</h3>
                            <p class="text-gray-600 text-sm">${character.status} - ${character.species}</p>
                        </div>
                    `
    )
    .join("");
}

function searchCharacters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredCharacters = allCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm)
  );
  displayCharacters(filteredCharacters);
}

document.addEventListener("DOMContentLoaded", function () {
  fetchCharacters();
  document
    .getElementById("searchInput")
    .addEventListener("input", searchCharacters);
});
