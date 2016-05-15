import React from 'react';
import classnames from 'classnames';

class Modal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  _addUser = () => {
    var form = Object.assign({}, this.refs['form-user'].getElementsByTagName('input'));
    for(var key in form) {
      form[key] = form[key].value;
    };
    this.props.onAddUser(form);
  }

  render() {
    return (
      <ul className="accordion" data-accordion role="tablist">
        <li className="accordion-item" ref='form-user'>
          <a href="#panel1d" role="tab" className="accordion-title" id="panel1d-heading" aria-controls="panel1d">
            <h5><i className='fi-torso'/> Création d'un utilisateur</h5>
          </a>
          <div id="panel1d" className="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel1d-heading">
            <div className='row'>
              <div className="small-6 columns input-group">
                <span className="input-group-label">Nom</span>
                <input className="input-group-field" id='lastname' type="text"/>
              </div>
              <div className="small-6 columns input-group">
                <span className="input-group-label">Prénom</span>
                <input className="input-group-field" id='firstname' type="text"/>
              </div>
            </div>
            <div className="small-12 columns input-group">
              <span className="input-group-label">Adresse email</span>
              <input className="input-group-field" id='email' type="text" placeholder="(ex: johndoe@gmail.com)"/>
            </div>
            <div className='row'>
              <div className="small-6 columns input-group">
                <span className="input-group-label">Fonction</span>
                <input className="input-group-field" id='function' type="text" placeholder='(ex: boulanger)'/>
              </div>
              <div className="small-6 columns input-group">
                <a className='expanded button'>Affecter à des entreprises</a>
              </div>
            </div>
          </div>
          </li>
          <li className="accordion-item">
            <a href="#panel1d" role="tab" className="accordion-title" id="panel1d-heading" aria-controls="panel1d">
              <h5><i className='fi-folder'/> Entreprises affectées</h5>
            </a>
            <div id="panel1d" className="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel1d-heading">
              Pas de contenu.
            </div>
          </li>
          <li className="accordion-item">
            <a href="#panel1d" role="tab" className="accordion-title" id="panel1d-heading" aria-controls="panel1d">
              <h5><i className='fi-shopping-bag'/> Rôles au sein de Coffreo Pro</h5>
            </a>
            <div id="panel1d" className="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel1d-heading">
              <a className='button' onClick={this._addUser}>Ajouter l'utilisateur</a>
            </div>
          </li>
        </ul>
      );
    }
  }

  export default Modal
