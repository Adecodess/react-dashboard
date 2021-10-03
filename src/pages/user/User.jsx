import { MailTwoTone } from '@material-ui/icons';
import './user.css';

const User = () => {
  return (
    <main className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>edit user</h1>
        <button className='userAddButton'>create</button>
      </div>
    </main>
  );
};

export default User;
