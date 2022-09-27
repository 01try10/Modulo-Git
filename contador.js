exports.countInstancesOf = function (letter1,letter2, sentence) {
    let count1 = 0;
    let count2 = 0;

  
    for (let i = 0; i < sentence.length; i++) {
      if (sentence.charAt(i) === letter1) {
        count1 += 1;
      }
    }

    for (let i = 0; i < sentence.length; i++) {
      if (sentence.charAt(i) === letter2) {
        count2 += 1;
      }
    }
    return Math.abs(count2-count1);
  }
  


