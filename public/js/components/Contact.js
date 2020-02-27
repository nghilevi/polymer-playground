import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module';

class ContactItem extends LitElement {

  constructor(){
      super();
  }

  static get properties(){
    return {
    }
  }

  static get styles(){
	  return css`
	  	.contact{
	  		width: 100%;
	  		display: grid;
	  		grid-template-columns: 2fr 1fr 1fr 1fr;
	  	}
	  	.contact .user-img{
	  		background-image: url('https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg');
	  		height: 40px;
	  		width: 40px;
	  		background-size: cover;
	  		background-position: center center;
	  		border-radius: 20px;
	  	}
	  	.contact .fullname{
	  		font-size: 1.4rem;
	  		font-weight: 700;
	  		text-transform: capitalize;
	  	}
	  	.number{
	  		font-weight: 500;
	  	}
	  `;
  }

  // lifecycle
  render() {
    return html`
	    <div class="contact">
	        <div class="user-img"></div>
	        <div class="fullname">Joe Santos Garcia</div>
	        <div class="number">718 - 219 - 8652</div>
	        <div class="state">NY</div>
	        <div class="category">Family</div>
	    </div>
  `;
  }


}

customElements.define('contact-item', ContactItem);
