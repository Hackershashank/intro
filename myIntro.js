var container = document.querySelector('.container');
    container.addEventListener('mouseover', function() {
      container.style.backgroundColor = '#ebebeb';
    });
    container.addEventListener('mouseout', function() {
      container.style.backgroundColor = '#f5f5f5';
    });
     // Toggle the visibility of the hidden text
     var toggleButton = document.getElementById('toggleButton');
     var hiddenText = document.getElementById('hiddenText');
 
     toggleButton.addEventListener('click', function() {
       if (hiddenText.classList.contains('hidden')) {
         hiddenText.classList.remove('hidden');
       } else {
         hiddenText.classList.add('hidden');
       }
     });