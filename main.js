//Task 2 
const priceElement = document.getElementById('product-price');
const sizeSelector = document.getElementById('size-selector');

sizeSelector.addEventListener('change', function(event) {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
});


// Task 3 

const stockStatusElement = document.getElementById('stock-status');
const purchaseButton = document.getElementById('purchase-button');

const stock = {
    small: { price: 20, available: 5 },  
    medium: { price: 22, available: 0 }, 
    large: { price: 24, available: 10 }  
}
sizeSelector.addEventListener('change', function(event) {
    const selectedSize = event.target.value;  
    const selectedStock = stock[selectedSize];  
    priceElement.textContent = `$${selectedStock.price}`;

    // Update stock status and disable/enable purchase button
    if (selectedStock.available) {
        stockStatusElement.textContent = "In Stock";
        purchaseButton.disabled = false;  
    } else {
        stockStatusElement.textContent = "Out of Stock";
        purchaseButton.disabled = true;  
    }
});

// Task 4 Create a Checkout Event 
purchaseButton.addEventListener('click', function() {
    const selectedSize = sizeSelector.value;  
    const selectedStock = stock[selectedSize];  

    if (selectedStock.available > 0) {
        // Show a confirmation message
        alert(`Purchased ${selectedSize} for $${selectedStock.price}.`);
    } else {
        // Show an out-of-stock message
        alert(`Sorry, ${selectedSize} is out of stock.`);
    }
});


