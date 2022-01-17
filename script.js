// Manipulando elementos no DOM:

// Pegando o elemento pai root e colocando no App
const app = document.getElementById('root');
console.log(app)

// Criando elemento filho 'logo' 
const logo = document.createElement('img');
logo.setAttribute('id', 'logo');
logo.src = 'https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/1575803544139-UGWQADWFPHLY85UGB16S/FINAL+SPACE+BANNER?format=1500w'

// Criando um elemento filho 'div' e adicionando um atributo de nome 'class' com valor 'container' - <div class="container"></div>
// Syntax: Element.setAttribute(name, value); 
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Barra de Busca
const searchbar = document.createElement('div');
searchbar.setAttribute('id', 'divSearchBar');
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'searchBar');
input.setAttribute('id', 'searchBar');
input.setAttribute('placeholder', 'Procure por um personagem da série');
searchbar.appendChild(input);


// Inserir elementos filhos 'logo' e 'div' no elemento pai 'root'
app.appendChild(logo);
app.appendChild(searchbar);
app.appendChild(container);

///////////////////////////////////////////////////////////////////////////////////////////////
// Final Space Documentation: https://finalspaceapi.com/docs/
let response = fetch('https://finalspaceapi.com/api/v0/character/')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Estado inicial com todos os personagens ao abrir a página
    data.forEach(personagem => {
      // Criar uma div com uma classe 'card' para cada filme
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // Cria um elemento 'h1' e coloca como texto o titulo de cada filme
      const nome = document.createElement('h1');
      nome.textContent = personagem.name;

      // Cria um elemento 'p' e coloca como texto o status de cada personagem
      const status = document.createElement('p');
      status.textContent = `Status: ${personagem.status}`

      const origin = document.createElement('p');
      origin.textContent = `Origin: ${personagem.origin}`;

      // Cria um elemento 'img' e coloca a imagem da cada personagem
      const img = document.createElement('img');
      img.src = personagem.img_url;

      container.appendChild(card);
      card.appendChild(nome);
      card.appendChild(status);
      card.appendChild(origin);
      card.appendChild(img);
      console.log(card);
    });

    // Filtro dos personagens
    let filteredCharacters = data;
    input.addEventListener('keyup', tecla => {
      // Filtro dos personagens

      // Teste para ver o que esta sendo digitado case insensitive
      const searchString = tecla.target.value.toLowerCase();
      // Procurar o que está sendo digitado no arranjo de personangens (object)
      filteredCharacters = data.filter(character => {
        return character.name.toLowerCase().includes(searchString);
      });
      console.log(filteredCharacters);

      // "Limpar Tudo para poder Adicionar depois"
      container.innerHTML = '';
   
      // Funcao para criar um card para cada personagem - for 
      filteredCharacters.forEach(personagem => {
        // Criar uma div com uma classe 'card' para cada filme
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // Cria um elemento 'h1' e coloca como texto o titulo de cada filme
        const nome = document.createElement('h1');
        nome.textContent = personagem.name;
  
        // Cria um elemento 'p' e coloca como texto o status de cada personagem
        const status = document.createElement('p');
        status.textContent = `Status: ${personagem.status}`
  
        const origin = document.createElement('p');
        origin.textContent = `Origin: ${personagem.origin}`;
  
        // Cria um elemento 'img' e coloca a imagem da cada personagem
        const img = document.createElement('img');
        img.src = personagem.img_url;
  
        container.appendChild(card);
        card.appendChild(nome);
        card.appendChild(status);
        card.appendChild(origin);
        card.appendChild(img);
        console.log(card);
      })
  });
});
 