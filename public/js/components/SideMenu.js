import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module';

class SideMenu extends LitElement {

  constructor(){
      super();
  }

  static get properties(){
    return {
    }
  }

  static get styles(){
	  return css`
		#side-menu{
		  background: #323759;
		  height: 100vh;
		  padding: 50px 25px;
		}

		.logo{
		  text-align: center;
		}

		.logo img{
		  width: 50px;
		}

		.title{
		  font-weight: 700;
		  color: #ccced7;
		  margin 1rem 0;
		}

		#side-menu nav a {
		  color: #ccced7;
		  text-decoration: none;
		  text-transform: capitalize;
		  display: block;
		  padding: 10px 10px 10px 0;
		}

		#side-menu nav a span.icon {
		  padding: 10px 10px 10px 0;
		}
	  `;
  }

  // lifecycle
  render() {
    return html`
    <section id="side-menu">
	    <div class="logo">
	    	<img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png" alt="">
	    </div>
	    <div class="menu">
	      <div class="title">Contacts</div>
	      <nav>
	        <a href="#"><span class="icon">+</span> Add Contact</a>
	        <a href="#"><span class="icon">+</span> Add Contact</a>
	        <a href="#"><span class="icon">+</span> Add Contact</a>
	        <a href="#"><span class="icon">+</span> Add Contact</a>
	      </nav>
	    </div>
  	</section>
  `;
  }


}

customElements.define('side-menu', SideMenu);
