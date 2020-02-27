import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module';

class ContactsList extends LitElement {

  constructor(){
      super();
  }

  static get properties(){
    return {
    }
  }

  static get styles(){
	  return css`
	  	.contacts{
	  		max-width: 800px;
	  	}
	  	h2{
	  		color: #3e4162;
	  		font-weight: 300;
	  	}
	  `;
  }

  // lifecycle
  render() {
    return html`
	    <section class="contacts">
	      <h2>Contacts</h2>
	      <contact-item></contact-item>
	      <contact-item></contact-item>
	    </section>
  `;
  }


}

customElements.define('contacts-list', ContactsList);
