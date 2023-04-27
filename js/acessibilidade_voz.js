var utterance = new SpeechSynthesisUtterance();

var audioElement = document.querySelector('audio');

var btnLeitura = document.getElementById("toggle-button");
var isOn = true;

btnLeitura.addEventListener("click", function() {
  if (isOn) {
      btnLeitura.innerHTML = "OFF";
      btnLeitura.classList.add("off");
      // Defina o texto a ser lido como o conteúdo do elemento abaixo do áudio
      utterance.text = document.getElementById('texto').textContent;

      // Inicie a leitura em voz alta
      window.speechSynthesis.speak(utterance);
  } else {
      btnLeitura.innerHTML = "ON";
      btnLeitura.classList.remove("off");
      
      window.speechSynthesis.cancel();
      
  }
  isOn = !isOn;
  utterance.addEventListener('end', function() {
  audioElement.pause();
  });
});
// Adicionar ouvinte de eventos ao objeto window para cancelar a leitura em voz alta e interromper a reprodução de áudio quando a página é descarregada
window.addEventListener('beforeunload', function() {
  window.speechSynthesis.cancel();
  audioElement.pause();
});
