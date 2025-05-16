import React, { useEffect, useState } from 'react'
import axios from 'axios'
//modular css
import css from './Header.module.css'
//Icons
import logo from '../../assets/img/logo-w.png'
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";

function Header() {
  const [country, setCountry] = useState('USA')
  useEffect(()=>{
    axios.get('https://ipapi.co/json/')
    .then(res=> setCountry(res.data))
    .catch(err=> `Unable to get the country name ${err}`)
  },[])
  const countryCode = country?.country_code?.toLowerCase() || 'us'
  return (
    <>
   
    <header>
      <div className={css.menu}>
        <IoIosMenu />
      </div>
      <div className={css.logo}>
        <img src={logo} alt='Amazon logo' />
      </div>

      <div className={css.delivery}>
        <MdOutlineEditLocationAlt />
        <div>
          <p>Deliver to</p>
          <span>{country.country_name}</span>
        </div>

      </div>

      <div className={css.search}>
        <div className={css.option}>
          <select>
              <option value="">All</option>
              <option value="arts-crafts">Arts & Crafts</option>
              <option value="automotive">Automotive</option>
              <option value="baby">Baby</option>
              <option value="beauty">Beauty & Personal Care</option>
              <option value="books">Books</option>
              <option value="boys-fashion">Boys' Fashion</option>
              <option value="computers">Computers</option>
              <option value="deals">Deals</option>
              <option value="digital-music">Digital Music</option>
              <option value="electronics">Electronics</option>
              <option value="girls-fashion">Girls' Fashion</option>
              <option value="health-household">Health & Household</option>
              <option value="home-kitchen">Home & Kitchen</option>
              <option value="industrial-scientific">Industrial & Scientific</option>
              <option value="kindle-store">Kindle Store</option>
              <option value="luggage">Luggage</option>
              <option value="mens-fashion">Men's Fashion</option>
              <option value="movies-tv">Movies & TV</option>
              <option value="music-cds-vinyl">Music, CDs & Vinyl</option>
            </select>
        </div>
        <div className={css.input}>
          <input type="text" />
        </div>
        <div className={css.icon}>
          <IoSearch />
        </div>
      </div>
      <div className={css.language}>
        <img src={`https://flagcdn.com/w160/${countryCode}.png`} alt="" />
        <p>{country.country_code}</p>
      </div>
      <div className={css.profile}>
        <CgProfile />
        Sign In
      </div>
      <div className={css.return}> Returns & Orders</div>
      <div className={css.cart}>
        <IoCartOutline />
        <p className={css.value}>0</p>
        <div className={css.txt}>cart</div>
      </div>
    </header>
    <nav>
      <IoIosMenu />
      <ul> 

        <li>All</li>
        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Prime Video</li>
        <li>Gift Cards</li>
        <li>Customer Service</li>
        <li>Sell</li>
      </ul>
    </nav>
     </>
  )
}

export default Header
