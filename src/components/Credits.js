import React from 'react';

function Credits() {
  return (
    <div className='container d-flex'>
      <ul className='list-inline mx-auto justify-content-center py-5'>
        <li className='text-white'><a href='https://universe.leagueoflegends.com/en_US/regions/'>Lore</a> for Faction Descriptions</li>
        <li className='text-white'><a href='https://developer.riotgames.com/docs/lor#_overview'>Images</a> for cards and factions</li>
        <li className='text-white'><a href='github.com/davidy327'>My Github</a> with source code for this webpage</li>
        <li className='text-white'><a href='https://favicon.io/'>Favicon</a> generator</li>
      </ul>
    </div>
  );
}

export default Credits;