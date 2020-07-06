import React from 'react';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <main>
      <div className='header'>
        <img
          id='header-image'
          alt=''
          src='https://images.squarespace-cdn.com/content/v1/5682e741d8af10374c50892f/1560282570790-UQ4VFM8A1WYRKVSQLYIZ/ke17ZwdGBToddI8pDm48kHE9e2P1Uk9QAlN4Ynfg_U4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2drZ9ercx4GKqh5k_wJwBXrmjRi8zs9DbX5XfqdFt_M-Dm7cT0R_dexc_UL_zbpz6JQ/food-photography-ventura-restaurant-photographer-harper-point.jpg?format=2500w'
        />
        <div className='header-text'>
          <h1>Find recipes for ingredients you have at home</h1>
        </div>
      </div>
      <div className='app-info'>
        <h2 className='info-title'>
          An easy way to utilize what you already have!
        </h2>
        <p id='info-text'>
          Just type in the ingredients you have at home and would like to use,
          and you'll get a bunch of recipes that you can make!
        </p>
      </div>
    </main>
  );
};

export default Home;
