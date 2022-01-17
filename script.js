// Manipulando elementos no DOM:

// Pegando o elemento pai root e colocando no App
const app = document.getElementById('root');
console.log(app)

// Criando elemento filho 'logo' 
const logo = document.createElement('img');
logo.setAttribute('id', 'logo');
logo.src = 'https://i2.wp.com/lugarnenhum.net/wp-content/uploads/2018/08/final-space-logo-e1534353796350.jpg?fit=1280%2C640&ssl=1'

// Criando um elemento filho 'div' e adicionando um atributo de nome 'class' com valor 'container' - <div class="container"></div>
// Syntax: Element.setAttribute(name, value); 
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Barra de Busca
const searchbar = document.createElement('div');
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'searchBar');
input.setAttribute('id', 'searchBar');
input.setAttribute('placeholder', 'Search for a character');
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
    let filteredCharacters = data;
    // Filtro dos personagens
    input.addEventListener('keyup', tecla => {
      // Filtro dos personagens

      // Teste para ver o que esta sendo digitado case insensitive
      const searchString = tecla.target.value.toLowerCase();
      // Procurar o que está sendo digitado no arranjo de personangens (object)
      filteredCharacters = data.filter(character => {
        return character.name.toLowerCase().includes(searchString);
      });
      console.log(filteredCharacters);
    });
 
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