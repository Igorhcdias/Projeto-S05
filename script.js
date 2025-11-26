let dadosReserva = {
  data: '',
  inicio: '',
  fim: '',
  sala: ''
};

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function goToSelection() {
  dadosReserva.data = document.getElementById('input-date').value;
  dadosReserva.inicio = document.getElementById('input-start').value;
  dadosReserva.fim = document.getElementById('input-end').value;
  
  if(!dadosReserva.data || !dadosReserva.inicio) {
    alert("Por favor, preencha a data e horário!");
    return;
  }

  showScreen('screen-selection');
}

function selectRoom(nomeSala) {
  dadosReserva.sala = nomeSala;
  
  document.getElementById('confirm-room-name').innerText = dadosReserva.sala;
  
  document.getElementById('confirm-date').innerText = dadosReserva.data;
  
  document.getElementById('confirm-start').innerText = dadosReserva.inicio;
  document.getElementById('confirm-end').innerText = dadosReserva.fim;

  showScreen('screen-confirmation');
}

function finishReservation() {
  alert("✅ SUCESSO!\n\nSua reserva para " + dadosReserva.sala + " foi realizada e enviada para seu email.");
  
  showScreen('screen-home');
}

function goBack(targetScreen) {
  showScreen(targetScreen);
}