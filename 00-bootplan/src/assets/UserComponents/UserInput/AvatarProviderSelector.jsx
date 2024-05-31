import React, { useState } from 'react';

import './AvatarProviderSelector.css';


export function AvatarProviderSelector({onChange}) {
  
  function AvatarProviderSelectorHandler(e){
    e.preventDefault();
    const selector = e.target.value;
    onChange(selector);
  }

  return (
    <>
      <div className='avatarProviderSelector-container'>
        <input
                type="radio"
                id="gitHubSelector"
                name="providerSelector"
                onChange={AvatarProviderSelectorHandler}
        />
        <label htmlFor="gitHubSelector" id="gitHubSelector"><ion-icon name="logo-github"></ion-icon></label>
        <input
                type="radio"
                id="instagramSelector"
                name="providerSelector"
                onChange={AvatarProviderSelectorHandler}
        />
        <label htmlFor="instagramSelector" id="instagramSelector"><ion-icon name="logo-instagram"></ion-icon></label>
        <input
                type="radio"
                id="twitterSelector"
                name="providerSelector"
                onChange={AvatarProviderSelectorHandler}
        />
        <label htmlFor="twitterSelector" id="twitterSelector"><ion-icon name="logo-twitter"></ion-icon></label>

      </div>
      
    </>
  )

}
export default AvatarProviderSelector;

