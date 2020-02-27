import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module';

class CounterComp extends LitElement {

  constructor(){
      super();
      this.total = 0;
      this.totalObj = {
        number: 0
      }
      console.log('constructor: this.background: ',this.background); // undefined
  }

  static get properties(){
    return {
        total: Number, // redundant
        color: String,
        background: String,
        fontWeight: String
    }
  }

  static get styles(){
    console.log('styles: this.background: ',this.background); // undefined
    let backgroundColor = 'red';
      return css`
        .comp {
          background: green;
        }
      `;
  }

  // lifecycle
  render() {
    return html`
    <div class="comp">
      <p style="color: white">total: ${this.total}</p>
      <p style="color: white">total obj: ${this.totalObj.number}</p>

      <button @click="${this.onButtonClicked.bind(this, 1)}">button 1</button>
      <br/>
      <button id="button-2"}">button 2</button>
      <br/>
      <slot name="header" @click="${this.onTitleClicked}">
        <title-default title="my title" color="${this.color}"></title-default>
      </slot>

      <slot name="content">
        <div>${this.defaultContent || 'background: ' + this.background}</div>
      </slot>

    </div>
  `;
  }

  firstUpdated(){
    /*
    const button2 = this.shadowRoot.getElementById('button-2').addEventListener('click', e => this.onButtonClicked(2))
    */
    ///*

    let _this = this;
    const button2 = this.shadowRoot.getElementById('button-2').addEventListener('click', function(e){
        _this.onButtonClicked(2);
        console.log('this.totalObj.number: ',_this.total);
      }
    )
    //*/
  }

  // custom class methods
  onButtonClicked(num){
    if(num === 1){
      this.total++;
    }else{
      this.total--;
    }
    this.totalObj.number = this.total;
    console.log('u click the button '+num,'this.total: ',this.total);
  }

  onTitleClicked(){
    console.log('u click the title');
  }

}

class TitleDefault extends LitElement {

  constructor(){
    super();
    this.defaultTitle = 'Title here';
  }

  static get properties(){
    return {
      color: String,
      title: String
    }
  }

  static get styles(){
      return css`
      .header {
        color: red;
      }
      `;
  }

  render() {
    return html`
      <label style="color:${this.color}">${this.title || this.defaultTitle}</label>
    `;
  }

}

customElements.define('title-default', TitleDefault);
customElements.define('counter-comp', CounterComp);
