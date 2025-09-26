define(["jquery", "axios"], function($, axios) {
  let allCharacters = [];

  async function fetchCharacters() {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      allCharacters = response.data.results;
      displayCharacters(allCharacters);
    } catch (error) {
      console.error("Error fetching characters:", error);
      $("#characters").html(
        '<p class="text-center text-red-600">Error loading characters</p>'
      );
    }
  }

  function displayCharacters(characters) {
    const html = characters.map(
      (c) => `
        <div class="bg-white border border-gray-300 rounded-lg p-4 text-center">
          <img src="${c.image}" alt="${c.name}" class="w-full h-45 object-cover rounded">
          <h3 class="mt-2.5 mb-1.5 mx-0 text-gray-800 text-lg font-normal">${c.name}</h3>
        </div>
      `
    ).join("");
    $("#characters").html(html);
  }

  function searchCharacters() {
    const searchTerm = $("#searchInput").val().toLowerCase();
    const filtered = allCharacters.filter((c) =>
      c.name.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filtered);
  }

  function init() {
    $(document).ready(function() {
      fetchCharacters();
      $("#searchInput").on("input", searchCharacters);
    });
  }

  return { init };
});
