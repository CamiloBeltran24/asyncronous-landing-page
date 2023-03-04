const API = 'https://rickandmortyapi.com/api/character'

const content = null || document.getElementById('content')

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async ()=>{

  try {

    const characters = await fetchData(API);

    console.log(characters);
    let view = `
    ${characters.results.map(character =>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${character.image}" alt="${character.name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${character.name}
          </h3>
        </div>
      </div>

    `).slice(0 , 20).join('')}
    `;

    content.innerHTML = view;

  } catch(error) {

    console.error(error);

    throw new Error(error);

  }
})()