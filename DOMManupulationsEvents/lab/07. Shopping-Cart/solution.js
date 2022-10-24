function solve() {
   let productDivs = Array.from(document.querySelector('div').children);
   let button = document.querySelector('div').children[5];
   button.addEventListener('click', checkout);
   let sum = 0;
   let products = [];
   for (let i = 1; i < productDivs.length - 2; i++) {
      let button = productDivs[i].children[2].children[0];
      button.addEventListener('click', addProduct);
      
   }

   function addProduct(event) {
      let price = Number(event.currentTarget
         .parentNode.parentNode.children[3].textContent);
      sum += price;
      let currentProduct = event.currentTarget
      .parentNode.parentNode.children[1].children[0].textContent;
      if (!products.includes(currentProduct)) {
         products.push(currentProduct);
      }
      let textarea = event.currentTarget.parentNode
      .parentNode.parentNode.children[4];
      textarea.value += `Added ${currentProduct} for ${price.toFixed(2)} to the cart.\n`;
   }

   function checkout(event) {
      let childDivs = Array.from(event.currentTarget.parentNode.children);
      for (let i = 1; i < childDivs.length - 2; i++) {
         let button = childDivs[i].children[2].children[0];
         button.setAttribute('disabled', 'true');
      }
      event.currentTarget.parentNode.children[4].value += 
      `You bought ${products.join(', ')} for ${sum.toFixed(2)}.`;
      event.currentTarget.setAttribute('disabled', 'true');
   }

}