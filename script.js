let allCharacters = [];
        
async function loadAllCharacters() {
    let page = 1;
        let hasNext = true;
            
    while (hasNext) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        hasNext = data.info.next !== null;
        page++;
    }
            
    displayCharacters(allCharacters);
}
        
function displayCharacters(characters) {
    const container = document.getElementById('characters');
    container.innerHTML = characters.map(char => `
        <div class="card">
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
        </div>
    `).join('');
}
        
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = allCharacters.filter(char => 
        char.name.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filtered);
});
        
loadAllCharacters();