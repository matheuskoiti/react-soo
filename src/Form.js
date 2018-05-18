import React, { Component } from 'react';
import './App.css';
import './pure-min.css';

class Form extends Component {
  constructor() {
    super();
    this.sendForm = this.sendForm.bind(this);
    this.state = {item : []};
  }

  sendForm(event) {
  	const data = new FormData(event.target);
    const value = data.getAll('item');;

    event.preventDefault()

	this.setState({item: value});
  }

  render() {
    return (
      <div className="App">
        <form class="pure-form pure-form-aligned" onSubmit={this.sendForm}>
          <fieldset>
            <div class="pure-control-group">
              <label for="name">Item</label>
              <input id="name" type="text" placeholder="Item" name="item"/>
            </div>

            <div class="pure-controls">
              <button class="pure-button pure-button-primary button-add">Adicionar item</button>
            </div>
          </fieldset>
        </form>
  	    <div className="list">
          <b>Iten inserido: </b>
          {
    	    this.state.item.map(function(listItem){
          	  return (
          	  	<div className="item-list">
                  <tr>
                    <td>{listItem}</td>
                  </tr>
                </div>
              );
    	    })
          }
        </div>
      </div>
    );
  }
}

export default Form;
