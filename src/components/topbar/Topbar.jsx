import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import profileimg from '../../images/profileimg.jpg';

const Topbar = () => {
  return (
    <section className='topbar'>
      <main className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>admin </span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topiconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topiconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img src={profileimg} alt='profile' className='topAvatar' />
        </div>
      </main>
    </section>
  );
};

export default Topbar;
