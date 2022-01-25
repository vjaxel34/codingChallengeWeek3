// //MEDIUM: Write a function that would allow you to do this:

// var sharePizza = cutPizzaSlices(8);

// console.log(sharePizza(2));                                                                                                                                                                    

//   // prints "Each person gets 4.00 slices of pizza"

// console.log(sharePizza(3)); 

//   // prints "Each person gets 2.67 slices of pizza"

  function cutPizzaSlices(pizza) {
    return pizza * 2;
}

function pizzaOven(Axel, Angel) {
    const axelsSlice = cutPizzaSlices(Axel); 
    const angelsSlice = cutPizzaSlices(Angel);

    const share = `Axel gets ${axelsSlice} slices of pizza and Angel gets ${angelsSlice} slices of pizza.`;
    return share;
  }
  console.log(pizzaOven(2,1.3285)); 