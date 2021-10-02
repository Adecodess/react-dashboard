import React from 'react';
import './widgetLg.css';
import profileimg from '../../images/profileimg.jpg';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>latest transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>customer</th>
          <th className='widgetLgTh'>date</th>
          <th className='widgetLgTh'>amount</th>
          <th className='widgetLgTh'>status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetLgImg' src={profileimg} alt='user' />
            <span className='widgetLgName'>John Doe</span>
          </td>
          <td className='widgetLgDate'>3 Oct 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetLgImg' src={profileimg} alt='user' />
            <span className='widgetLgName'>John Doe</span>
          </td>
          <td className='widgetLgDate'>3 Oct 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Decline' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetLgImg' src={profileimg} alt='user' />
            <span className='widgetLgName'>John Doe</span>
          </td>
          <td className='widgetLgDate'>3 Oct 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetLgImg' src={profileimg} alt='user' />
            <span className='widgetLgName'>John Doe</span>
          </td>
          <td className='widgetLgDate'>3 Oct 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
