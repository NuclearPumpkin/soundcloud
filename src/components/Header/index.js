import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GENRES } from '../../constants/genre';
import { browse } from '../../constants/pathnames';

function getGenreLink(genre) {
  return `${browse}/${genre || DEFAULT_GENRE}`;
}

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

function Header({ selectedGenre }) {
  return (
    <div className="header">
      <div className="header-content">
        <Logo />
        <MenuList selectedGenre={selectedGenre} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedGenre: state.browse.selectedGenre
  };
}


Header.propTypes = {
  currentUser: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default connect(mapStateToProps, null)(Header);
