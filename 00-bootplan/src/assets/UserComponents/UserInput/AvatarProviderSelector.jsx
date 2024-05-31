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
            <div className='avatarProvider-selectorGroup'>
                        <div className='selector-inputContainer'>
                                <input type="radio" checked id="gitHubSelector" name="providerSelector" onChange={AvatarProviderSelectorHandler} />
                                <div className='selector-tileContainer'>
                                        <ion-icon name="logo-github"></ion-icon>
                                        {/* <label htmlFor="gitHubSelector" id="gitHubSelector">Github</label> */}
                                </div>
                                
                        </div>
                        
                        <div className='selector-inputContainer'>
                                <input type="radio" id="instagramSelector" name="providerSelector" onChange={AvatarProviderSelectorHandler} />
                                <div className='selector-tileContainer'>
                                        <ion-icon name="logo-instagram"></ion-icon>
                                        {/* <label htmlFor="instagramSelector" id="instagramSelector">Instagram</label> */}
                                </div>
                        </div>
                        
                        <div className='selector-inputContainer'>
                                <input type="radio" id="twitterSelector" name="providerSelector" onChange={AvatarProviderSelectorHandler} />
                                <div className='selector-tileContainer'>
                                        <ion-icon name="logo-google"></ion-icon>
                                        {/* <label htmlFor="twitterSelector" id="twitterSelector">Google</label> */}
                                </div>
                        </div>

            </div>
            
      </div>
      
    </>
  )

}
export default AvatarProviderSelector;

