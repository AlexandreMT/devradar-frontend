import React from 'react';

import './styles.css';

function DevItem({ dev, onClick }) {
  async function handleClick(dev) {
    onClick(dev);
  }

  return (
    <>
      <li className="dev-item">
        <header>
          <img src={ dev.avatar_url } alt={ dev.name }/>
          <div className="user-info">
            <strong>{ dev.name }</strong>
            <span>{ dev.techs.join(', ') }</span>
          </div>
        </header>
        <p>{ dev.bio }</p>
        <a href={`https:github.com/${dev.github_username}`}>Acessar perfil do GitHub</a>
        <button
          className="btn-danger"
          value={dev._id}
          onClick={(e) => handleClick(e.target.value)}>Remover</button>
      </li>
    </>
  );
}

export default DevItem;
