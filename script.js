window.onload = function() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var resultDiv = document.getElementById('result');
  
    var convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', function() {
      var celsiusValue = parseFloat(celsiusInput.value);
      if (!isNaN(celsiusValue)) {
        var fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        resultDiv.innerHTML = celsiusValue.toFixed(2) + '°C = ' + fahrenheitValue.toFixed(2) + '°F';
      } else {
        var fahrenheitValue = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheitValue)) {
          var celsiusValue = (fahrenheitValue - 32) * 5 / 9;
          resultDiv.innerHTML = fahrenheitValue.toFixed(2) + '°F = ' + celsiusValue.toFixed(2) + '°C';
        } else {
          resultDiv.innerHTML = 'Invalid input';
        }
      }
      resultDiv.classList.add('show');
    });
  };
