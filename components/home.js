import React from 'react';
import Dashboard from './dashboard';
import { connect } from 'react-redux'
import {selectUser, updateUser} from '../actions/index';

class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    console.log(this.props);
    return (
      <div className='home'>
        <div className = "top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Tableau de bord</li>
              <li>Contrats</li>
              <li>Factures</li>
              <li>Archives</li>
              <li>Administration</li>
            </ul>
          </div>
          <div className = "top-bar-right">
            <ul className="menu">
              <li className='menu-text'>John Doe <i className='fi-hearth'/></li>
            </ul>
          </div>
        </div>
        <Dashboard {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    visibleUser: state.visibleUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserClick: (id) => {
      dispatch(selectUser(id))
    },
    onUpdateUser: (e, id) => {
      dispatch(updateUser(e, id))
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

export default Home;
