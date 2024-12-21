function openCard() {
  var button = document.getElementById('button');
  
  if(button.innerHTML == 'Đóng Nại❤️') {
    button.innerHTML = 'Mở ra❤️';
  } else {
    button.innerHTML = 'Đóng Nại❤️';
  }
  
  var cards = document.querySelectorAll('.card');
  for(var i = 0; i < cards.length; i++) {
    cards[i].classList.toggle('open');
  }
}