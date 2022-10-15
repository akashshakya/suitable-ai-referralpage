import React from 'react'
import Money from '../assets/money-management.svg'
import SearchIcon from '../assets/icon_search_.svg'

export default function Banner() {
  return (
    <div className='banner'>
      <p className='referral-heading'>Referral Status<span><img src={Money} alt='money' style={{marginLeft:"10px"}}></img></span> </p> 
      <div >
        <input className='search-box' type="text"  placeholder="Search"/>
        <span ><img className='search-icon' src={SearchIcon} alt='money'></img></span>
      </div>
    </div>
  )
}
