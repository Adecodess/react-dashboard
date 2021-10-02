import React from 'react';
import './widgetSm.css';
import profileimg from '../../images/profileimg.jpg';
import { Visibility } from '@material-ui/icons';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>new members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src={profileimg} alt='profile  ' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>john doe</span>
            <span className='widgetSmUTitle'>software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={profileimg} alt='profile  ' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>john doe</span>
            <span className='widgetSmUTitle'>software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={profileimg} alt='profile  ' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>john doe</span>
            <span className='widgetSmUTitle'>software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={profileimg} alt='profile  ' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>john doe</span>
            <span className='widgetSmUTitle'>software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={profileimg} alt='profile  ' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>john doe</span>
            <span className='widgetSmUTitle'>software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
