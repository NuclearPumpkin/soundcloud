import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GENRES } from '../../constants/genre';

function Logo() {
  return (
      <div className="logo">
        <Link to="/">
          <h1>Favesound</h1>
        </Link>
      </div>
  );
}

function MenuItem({ genre, selectedGenre }) {
  const linkClass = classNames('menu-item', {
    'menu-item-selected': genre === selectedGenre,
  });

  return (
    <Link to={getGenreLink(genre)} className={linkClass}>
      {genre}
    </Link>
  );
}

function MenuList({ selectedGenre }) {
  if (!selectedGenre) return null;
  return (
    <div>
      {GENRES.map((genre, key) => {
        const menuItemProps = { genre, selectedGenre, key };
        return <MenuItem { ...menuItemProps } />;
      })}
    </div>
  );
}

function Header({ currentUser, selectedGenre, onLogin, onLogout }) {
  return (
    <div className="header">
      <div className="header-content">
        <Logo />
        <MenuList selectedGenre={selectedGenre} />
        {/* <SessionAction
          currentUser={currentUser}
          onLogin={onLogin}
          onLogout={onLogout}
        /> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.session.user,
    selectedGenre: state.browse.selectedGenre
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: bindActionCreators(actions.login, dispatch),
    onLogout: bindActionCreators(actions.logout, dispatch),
  };
}

Header.propTypes = {
  currentUser: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default connect(null, null)(Header);
