import React, { Component } from 'react';
import '../stylesheets/Main.css';
import { Link } from 'react-router-dom';
import DemaciaIcon from '../assets/icon-demacia.png';
import NoxusIcon from '../assets/icon-noxus.png';
import PiltZaunIcon from '../assets/icon-piltoverzaun.png';
import ShadowIslesIcon from '../assets/icon-shadowisles.png';
import IoniaIcon from '../assets/icon-ionia.png';
import FreljordIcon from '../assets/icon-freljord.png';


export default class Main extends Component {
  render() {
    return (
      <div className='container-fluid d-flex flex-column align-content-center justify-content-center'>
        <h1 className="text-light text-center pt-5">Welcome to LOR Cards!</h1>
        <span className="text-muted text-center">Click on a faction below to view their cards!</span>
        <div className='origins d-flex flex-row align-content-center justify-content-around py-5'>
          <div className='d-flex flex-column'>
            <Link to='/cards/demacia' className='group pb-5'>
              <img src={DemaciaIcon} alt='demacia'/>
              <h4 className='caption text-light'>Demacia</h4>
            </Link>
            <Link to='/cards/noxus' className='group pb-5'>
              <img src={NoxusIcon} alt='noxus'/>
              <h4 className='caption  text-light'>Noxus</h4>
            </Link>
          </div>
          <div className='d-flex flex-column'>
            <Link to='/cards/piltoverzaun' className='group pb-5'>
              <img src={PiltZaunIcon} alt='piltover zaun'/>
              <h4 className='caption text-light'>Piltover & Zaun</h4>
            </Link>
            <Link to='/cards/shadowisles' className='group pb-5'>
              <img src={ShadowIslesIcon} alt='shadow isles'/>
              <h4 className='caption text-light'>Shadow Isles</h4>
            </Link>
          </div>
          <div className='d-flex flex-column'>
            <Link to='/cards/ionia' className='group pb-5'>
              <img src={IoniaIcon} alt='ionia'/>
              <h4 className='caption text-light'>Ionia</h4>
            </Link>
            <Link to='/cards/freljord' className='group pb-5'>
              <img src={FreljordIcon} alt='freljord'/>
              <h4 className='caption text-light'>Freljord</h4>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}