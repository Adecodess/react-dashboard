import './sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';

const Sidebar = () => {
  return (
    <main className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>quick menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <PermIdentity className='sidebarIcon' />
              Users
            </li>
            <li className='sidebarListItem'>
              <Storefront className='sidebarIcon' />
              Products
            </li>
            <li className='sidebarListItem'>
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <BarChart className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutline className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>staffs</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <WorkOutline className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <Report className='sidebarIcon' />
              Report
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
