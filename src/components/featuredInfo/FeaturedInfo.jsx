import React from 'react';
import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <main className='featuredItem'>
        <span className='featuredTitle'>revenue</span>
        <section className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -11.4 <ArrowDownward className='featuredIcon negative' />
          </span>
        </section>
        <span className='featuredSub'>compared to last month</span>
      </main>
      <main className='featuredItem'>
        <span className='featuredTitle'>sales</span>
        <section className='featuredMoneyContainer'>
          <span className='featuredMoney'>$6,415</span>
          <span className='featuredMoneyRate'>
            -2.4 <ArrowDownward className='featuredIcon negative' />
          </span>
        </section>
        <span className='featuredSub'>compared to last month</span>
      </main>
      <main className='featuredItem'>
        <span className='featuredTitle'>cost</span>
        <section className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,235</span>
          <span className='featuredMoneyRate'>
            +21.4 <ArrowUpward className='featuredIcon positive' />
          </span>
        </section>
        <span className='featuredSub'>compared to last month</span>
      </main>
    </div>
  );
};

export default FeaturedInfo;
