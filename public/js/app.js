$(document).ready(function () {
  displayProducts();

  function displayProducts() {
    $.get("/api/products", function (products) {
      products.forEach(function (product) {
        const name = product.product_name;
        const price = product.price;
        const image = product.image;

        $("#product-row").append(`
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12" id="product-col">
          <div class="card">
            <div class="product-image">
              <img src="${image}" class="card-img-top">
            </div>
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">$${price}</p>
              <form>
                <div class="form-row form-inline">
                  <div class="col-xs-3">
                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1"
                      max="100">
                  </div>
                  <div class="col text-right" id="submit-button">
                    <button type="submit" class="btn btn-primary">Submit Order</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>`);
      });
    })
  }

  $(document).on("click", ".submit", function (event) {
    event.preventDefault;

    const product = this.data.product;
    const orderQty = $("#quantity").val();

    $.get("/api/products/" + product, function (product) {
      const stockQty = product.stock_quantity;

      if (stockQty < orderQty) {
        console.log("Error");
      } else {
        const updatedStockQty = stockQty - orderQty;

        $.ajax({
          method: "PUT",
          url: "/api/products",
          data: {
            product_name: product.product_name,
            stock_quantity: updatedStockQty
          }
        }).then(function () {
          console.log("Success");
        })
      }
    })
  })
});