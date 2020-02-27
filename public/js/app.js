import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module';

class MainPage extends LitElement {

  constructor(){
      super();
  }

  static get properties(){
    return {
    }
  }

  static get styles(){
	  return css`
	  	.main-page{
	  		display: grid;
	  		grid-template-columns: 250px 1fr;
	  	}
	  `;
  }

  // lifecycle
  render() {
    return html`
    	<div class="main-page">
		  <side-menu></side-menu>
		  <content-area></content-area>  
		</div>
  `;
  }


}

customElements.define('main-page', MainPage);
