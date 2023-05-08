const utterance = new SpeechSynthesisUtterance();
const audioElement = document.querySelector('audio');
let displayImage = document.getElementById('imagem_micro')

var isOn = true;

function microfone_Imagem(){
  if(isOn){
    //Ao ser clicado a fala ira inicar
    let displayImage = document.getElementById('imagem_micro')
    if(displayImage.src.match('./img/acessibilidade/microfone_som.png')){
      // Defina o texto a ser lido como o conteúdo do elemento abaixo do áudio
      utterance.text = document.getElementById('texto').textContent;
      //Inicie a leitura em voz alta
      window.speechSynthesis.speak(utterance);
      displayImage.src = './img/acessibilidade/microfone-mudo.png'
    }
    else{
      //Se o microfone for clicado novamente irá parar a fala
      window.speechSynthesis.cancel();
      displayImage.src = './img/acessibilidade/microfone_som.png'
    }
  }  
  isOn = !isOn;
  //fala para ao acabar textos
  utterance.addEventListener('end', function() {
    displayImage.src = './img/acessibilidade/microfone_som.png'

    audioElement.pause();
  });
}
// Adicionar ouvinte de eventos ao objeto window para cancelar a leitura em voz alta e interromper a reprodução de áudio quando a página é resetada(F5)
window.addEventListener('beforeunload', function() {
  window.speechSynthesis.cancel();
  audioElement.pause();
});
