const utterance = new SpeechSynthesisUtterance();
const audioElement = document.querySelector('audio');
let displayImage = document.getElementById('imagem_micro')

var isOn = true;

function microfone_Imagem(){
  let displayImage = document.getElementById('imagem_micro')
  if(displayImage.src.match('./img/acessibilidade/microfone_som.png')){
    // Defina o texto a ser lido como o conteúdo do elemento abaixo do áudio
    utterance.text = document.getElementById('texto').textContent;
    //Inicie a leitura em voz alta
    window.speechSynthesis.speak(utterance);
    displayImage.src = './img/acessibilidade/microfone-mudo.png'
  }
  else{
    window.speechSynthesis.cancel();
    displayImage.src = './img/acessibilidade/microfone_som.png'
  }
  isOn = !isOn;
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
