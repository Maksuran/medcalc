for (let e of document.querySelectorAll('input:not(#result)')) {
    e.addEventListener('input', check)
  
    function check() {
      let result = document.querySelector('#result'),
        sum1 = document.querySelector('#sum1'),
        sum2 = document.querySelector('#sum2'),
        sum3 = document.querySelector('#sum3'),
        sum4 = document.querySelector('#sum4'),
        res = sum1.value*sum2.value/(sum3.value*(1000/sum4.value))*60
  
      result.value = res
    }
  }
