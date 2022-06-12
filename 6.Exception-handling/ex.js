function division(){
  try {
    console.log (a)
    let a = 3
    console.log(1 / 0);
  } catch (err) {
    console.log("let must be declared")
  }

}
  try {
    division();
    if (Infinity) {
        throw new TypeError ('Infinity');
    } 
    } catch(e) {
         if (e.name == 'TypeError') {
            console.log('cannot be divided by zero');
        } else {
            throw e;
        }
    }

