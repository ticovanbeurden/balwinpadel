import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

export default class cartUpsellSlider extends window.HTMLElement {
    constructor() {
        super()
        this.slider = this.querySelector('[data-upsell-slider]');
        this.next = this.querySelector('[data-next]');
        this.prev = this.querySelector('[data-prev]');

        var keenSlider = new KeenSlider(
            this.slider,
            {
              loop: true,
              created: () => {
                console.log('created')
              },
            },
          )

          this.next.addEventListener('click', () => {
            keenSlider.next();
          });
          this.prev.addEventListener('click', () => {
            keenSlider.prev();
          });


        // this.button = this.querySelector('[type="submit"]')
        // this.form.querySelector('[name=id]').disabled = false
        // this.form.addEventListener('submit', this.submitHandler.bind(this))
        document.addEventListener('cart-upsell:update', function() {
          keenSlider.update();
        }.bind(this));
        document.addEventListener('cart:open', function() {
          keenSlider.update();
        }.bind(this));
      }

    
      async submitHandler(event) {
        event.preventDefault()
        // Hint ✦ 2 change this ;)
        this.button.classList.add('animate-pulse')
    
        const config = (type = 'javascript') => ({
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: `application/${type}`
          },
          // We get the data from the product form it self
          body: new FormData(this.form)
        })
    
        // We send a request to the ajax API
        // More here https://shopify.dev/docs/api/ajax
        try {
          await fetch(`${window.routes.cart_add_url}`, config())
          // We redirect to checkout
          window.location = window.shopUrl + '/checkout'
        } catch (error) {
          console.error(error)
        }
      }
    
}
