'use strict'

import {LitElement, html} from '@polymer/lit-element';

class HomeElement extends LitElement {
    
    _render(){
        return html `
        <div>
        Hello World
        </div>`;

    }
}
customElements.define('home', HomeElement);