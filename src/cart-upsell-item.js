export default class cartUpsellSlider extends window.HTMLElement {
    constructor() {
        super()
        this.variantId = this.querySelector('[data-variant-id]').value;
        this.button = this.querySelector('[data-add-to-cart]')
        this?.button?.addEventListener('click', this.submitHandler.bind(this))
      }
    
      async submitHandler(event) {
        event.preventDefault()

        let formData = {
          'items': [{
           'id': parseInt(this.variantId),
           'quantity': 1
           }]
         };
         fetch(window.theme.routes.cartAdd, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(formData)
         })
         .then(response => {
          this.remove();
          document.dispatchEvent(new CustomEvent('cart:build'));
           return response.json();
         })
         .catch((error) => {
           console.error('Error:', error);
         });


        
        // let formData = {
        //   'items': [{
        //    'id': parseInt(this.variantId),
        //    'quantity': 1
        //    }]
        //  };
        // // Hint ✦ 2 change this ;)
        //  console.log(formData );
        // const config = (type = 'javascript') => ({
        //   method: 'POST',
        //   headers: {
        //     'X-Requested-With': 'XMLHttpRequest',
        //     Accept: `application/${type}`
        //   },
        //   // We get the data from the product form it self
        //   body: JSON.stringify(formData)
        // })
    
        // // We send a request to the ajax API
        // // More here https://shopify.dev/docs/api/ajax
        // try {
        //   await fetch(`${window.theme.routes.cartAdd}`, config())
        //   // We redirect to checkout
        //   console.log('SUCCESS');
        //   // window.location = window.shopUrl + '/checkout'
        // } catch (error) {
        //   console.log('ERRORR');
        //   console.error(error)
        // }
      }
    
}
