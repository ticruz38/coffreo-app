import React from 'react';
import Dashboard from './dashboard';
import Modal from './modal';
import { connect } from 'react-redux';
import {selectUser, updateUser, addUser, unSelectUser} from '../actions/index';

class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className='home'>
        <div className="reveal" id="exampleModal1" data-reveal>
          <Modal {...this.props}/>
        </div>
        <div className = "top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text"><i className='fi-home'/> Tableau de bord</li>
              <li className="menu-text"><i className='fi-page-filled'/> Contrats<span className='gold'> 25</span></li>
              <li className="menu-text"><i className='fi-euro'/> Factures</li>
              <li className="menu-text"><i className='fi-folder'/> Archives<span className='gold'> 2</span></li>
              <li className="active menu-text"><i className='fi-widget'/> Administration</li>
            </ul>
          </div>
          <div className = "top-bar-right">
            <ul className="menu">
              <li className='menu-text'><i className='fi-torso'/> John Doe <i className = 'fi-arrow-down float-right'/></li>
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
    },
    onAddUser: (user) => {
      dispatch(addUser(user))
    },
    onUnSelectUser: () => {
      dispatch(unSelectUser())
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

export default Home;
