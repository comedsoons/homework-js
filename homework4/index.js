const calculateEngravingPrice = function (message, pricePerWord) {
    let numberOfWords = 0;
    for (let i=0; i < message.length; i +=1){
        if(message[i]=== ' '){
            numberOfWords += 1;
      }
    }
    numberOfWords += 1;
    return numberOfWords*pricePerWord;
  };


  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  );

  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  );

  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  );

  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  );
