import React from 'react';
import classnames from 'classnames';

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    var tableRow = (user) => {
      return (
        <tr key={user.id} className={classnames({active: user.id === visibleUser.id})} onClick={()=>this.props.onUserClick(user.id)}>
          <td><input type='checkbox'/></td>
          <td>Mr</td>
          <td>{user.lastname} {user.firstname}</td>
          <td>{user.function}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>none</td>
        </tr>
      )
    }
    const visibleUser = this.props.users.filter(user => user.id === this.props.visibleUser)[0] || {};
    return (
      <div className='dashboard row'>
        <div className='small-10 columns'>
          <div className='table'>
            <div>
              <h3><i className='fi-widget'/><span> Administration</span></h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th><input type='checkbox'/></th>
                  <th>Civilité</th>
                  <th>Nom / Prenom</th>
                  <th>Fonction</th>
                  <th>Adresse email</th>
                  <th>Numero de téléphone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map(tableRow)}
              </tbody>
            </table>
          </div>
        </div>
        <div className='small-2 columns' style={{padding: "5px 0 0 5px"}}>
          <a className="expanded button add-user" data-open="exampleModal1"><i className='fi-plus float-left'/> Ajouter un utilisateur</a>
          <div className={classnames('side-bar', {hide: !this.props.visibleUser})}>
            <div className='black'>
              Nom Prenom <i className='fi-x float-right' onClick={this.props.onUnSelectUser}/><br/>
            <strong><input type='text' value={visibleUser.lastname + " " + visibleUser.firstname} readOnly/></strong>
            </div>
            <div>
              Civilité<br/>
            <strong><input type='text' value="Monsieur" readOnly/></strong>
            </div>
            <div>
              Fonction<br/>
            <strong><input type='text' id='function' onChange = {e => this.props.onUpdateUser(e, visibleUser.id)} value={visibleUser.function}/></strong>
            </div>
            <div>
              Email<br/>
            <strong><input type='text' id='email' onChange = {e => this.props.onUpdateUser(e, visibleUser.id)} value={visibleUser.email}/></strong>
            </div>
            <div>
              Numero de telephone<br/>
            <strong><input type='text' id='phone' onChange = {e => this.props.onUpdateUser(e, visibleUser.id)} value={visibleUser.phone}/></strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
