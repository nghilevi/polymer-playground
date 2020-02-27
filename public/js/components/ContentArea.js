import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module';

class ContentArea extends LitElement {

  constructor(){
      super();
  }

  static get properties(){
    return {
    }
  }

  static get styles(){
	  return css`

	  `;
  }

  // lifecycle
  render() {
    return html`
    	<section id="content-area">
		    <contacts-list></contacts-list>
	  	</section>
  `;
  }


}

customElements.define('content-area', ContentArea);
