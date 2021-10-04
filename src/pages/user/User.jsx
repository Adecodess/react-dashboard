import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@material-ui/icons';
import profileimg from '../../images/profileimg.jpg';
import './user.css';

const User = () => {
  return (
    <main className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>edit user</h1>
        <button className='userAddButton'>create</button>
      </div>
      <section className='userContainer'>
        <div className='userShow'>
          <div className='userTopShow'>
            <img src={profileimg} alt='user' className='userShowImg' />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>jane doe</span>
              <span className='userShowjob'>software engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>account details</span>
            <div className='usershowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>jandoe99</span>
            </div>
            <div className='usershowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>2 june 1988</span>
            </div>
            <span className='userShowTitle'>contact details</span>
            <div className='usershowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+1 234046 38</span>
            </div>
            <div className='usershowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>jandoe99@gmail.com</span>
            </div>
            <div className='usershowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>new york | usa</span>
            </div>
          </div>
        </div>
        <section className='userUpdate'>
          <span className='userUpdateTitle'>edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='janedoe99'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='jane doe'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone Number</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='+1 234046 38'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='New York | Usa'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='jandoe99@gmail.Com'
                />
              </div>
            </div>
            <div className='userUpdateRight'></div>
          </form>
        </section>
      </section>
    </main>
  );
};

export default User;
