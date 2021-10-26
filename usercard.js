
const template = document.createElement('template');
template.innerHTML = `
<style>
*{
    padding: 0px;

}
    .user-card {
        font-family: 'Arial', sans-serif;
        background: #f4f4f4;
        width: 500px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 20px;
        justify-content: center;
        align-items: center;
        border-bottom: 15px;
        border-radius: 10%;
        padding: 10px;
        box-shadow: 0 10px 10px 0 grey;
        
    }
    .user-card img{
        width:100%;
        border-radius: 5%;
    }

    .user-card button {
        cursor: pointer;
        background: darkorchid;
        color: #fff;
        border: 0;
        border-radius: 5px;
        padding 5px 10px;
        
    }
     h3{
         color: coral;
     }
    </style>

<div class="user-card">
    <img/>
    <div>
        <h3></h3>
        <div class="info">
            <p class="email"></p>
            <p class="phone"></p>
            <p class="address"></p>
        </div>
        <button id="toggle-info">Hide Info</button>
    </div>
</div>  
`
class userCard extends HTMLElement{
    constructor(){
        super();

        this.showInfo = true;
        this.attachShadow({mode: 'open'});
        const shadow = this.shadowRoot;

        shadow.appendChild(template.content.cloneNode(true));

        shadow.querySelector('h3').innerText = this.getAttribute('name');
        shadow.querySelector('.email').innerText = this.getAttribute('email');
        shadow.querySelector('.phone').innerText = this.getAttribute('phone');
        shadow.querySelector('.address').innerText = this.getAttribute('address');
        shadow.querySelector('img').src = this.getAttribute('image');

    }
    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if(this.showInfo){
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info';

        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info';
        }
    }

    //for button we place it in connected callback
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        addEventListener('click', () =>this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        removeEventListener();
    } 
}

window.customElements.define("identity-card", userCard);