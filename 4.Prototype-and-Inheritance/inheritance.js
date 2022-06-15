let animal = {
    move(){
        console.log("The animal is moving")
    }
  };
  let cat = {
    __proto__: animal
  };
  cat.move()