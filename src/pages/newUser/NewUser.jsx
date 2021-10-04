import './newUser.css';

const NewUser = () => {
  return (
    <main className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='John' />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='John Doe' />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='johndoe@gmail.com' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='tel' placeholder='+1 234 456 77' />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='New York' />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Female</label>
            <input type='radio' name='gender' id='others' value='others' />
            <label for='others'>Others</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select name='active' id='active' className='newUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserButton'>create</button>
      </form>
    </main>
  );
};

export default NewUser;
