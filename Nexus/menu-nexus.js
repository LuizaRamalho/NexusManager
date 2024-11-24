let carouselIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showSlides() {
  carouselIndex++;
  if (carouselIndex >= images.length) {
    carouselIndex = 0;
  }
  document.querySelector('.carousel-images').style.transform = `translateX(-${carouselIndex * 100}%)`;
}

setInterval(showSlides, 3000); // Muda de imagem a cada 3 segundos

// Script para menu hamburguer
const hamburgerButton = document.getElementById('hamburgerButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.getElementById('closeButton');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});










// CARROSSEL

  // Seleciona o elemento que contém todas as imagens do carrossel pelo ID 'carouselTrack'
  const track = document.getElementById('ssssaxcz  78');

  // Seleciona todos os elementos com a classe 'carousel-item' e os armazena em uma NodeList
  const items = document.querySelectorAll('.carousel-item');
  
  // Variável que mantém o índice da imagem atual exibida no carrossel (começa em 0, a primeira imagem)
  let index = 0;
  
  // Função que move o carrossel para a próxima imagem 
  function moveCarousel() {
      // Incrementa o índice em 1 para avançar para a próxima imagem
      index++;
  
      // Verifica se o índice atual é maior ou igual ao número de imagens (menos uma)
      // Isso significa que o carrossel está no final e precisa voltar ao início
      if (index >= items.length - 1) { //Em JavaScript, a propriedade length é usada para retornar o número de elementos em uma estrutura de dados, como uma string, um array ou uma lista de elementos do DOM.
  
  // exemplo: "Hello".length        retorna 5, pois a string "Hello" tem 5 caracteres.
  
  
  
          // Define um atraso de 500 milissegundos antes de executar a função de retorno ao início
          setTimeout(() => {
  
              // Remove a transição para que o retorno ao início seja instantâneo e sem animação
              track.style.transition = 'none';
  
              // Reseta o índice para 0, que representa a primeira imagem
              index = 0;
  
              // Move o carrossel de volta para a primeira imagem (posição inicial)
              track.style.transform = `translateX(0)`;
  
          }, 500); // O tempo de 500 ms garante que a transição anterior (se houver) seja completada
      } else {
  
          // Caso o índice ainda não tenha atingido o final, move o carrossel para a próxima imagem
  
          // Adiciona uma transição suave de 0.5 segundos para o movimento do carrossel
          track.style.transition = 'transform 0.5s ease';
  
          // Move o carrossel para a esquerda, usando o índice atual para calcular o deslocamento
          // Exemplo: se index = 1, desloca -100%, se index = 2, desloca -200%, etc.
          track.style.transform = `translateX(-${index * 100}%)`;
      }
  }
  
  // Define um intervalo de tempo para chamar a função moveCarousel a cada 3000 milissegundos (3 segundos)
  // Isso faz com que o carrossel se mova automaticamente a cada 1 segundos
  setInterval(moveCarousel, 1000);