import { useEffect, useState } from 'react';

import facbook from './assets/images/icon-facebook.svg';
import twitter from './assets/images/icon-twitter.svg';
import instagram from './assets/images/icon-instagram.svg';
import youtube from './assets/images/icon-youtube.svg';
import iconDown from './assets/images/icon-down.svg';
import iconUp from './assets/images/icon-up.svg';
import CardA from './CardA.jsx';
import CardB from './CardB.jsx';

export default function Dashboad(){
    const [IsDarkMode,SetIsDarkMode] = useState(false);

    const ToggleTheme = () => {
        SetIsDarkMode(!IsDarkMode)
    }

    useEffect(()=>{
        document.body.classList.toggle("LightMode",IsDarkMode) ;
    },[IsDarkMode])

    return(
        <>
            <main className="Card">
                {/* header section */}
                <header className="Header">
                    <div className="IntroContainer">
                        <h1 className="IntroTitle">
                            Social Media Dashboard
                        </h1>
                        <p className="IntroText">
                            Total Followers: 23,004
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="toggleContainer">
                        <p className="ToggleText">
                            Dark Mode
                        </p>
                        <input 
                        type='checkbox' 
                        checked={IsDarkMode}
                        onChange={ToggleTheme}
                        id='Switch'
                        className="toggle-input" />
                        <label 
                            htmlFor="Switch"
                            className='toggle-label' >
                        </label>
                    </div>
                </header>
                {/* socialMedia Section */}
                <section className="SocialMediaCards">
                    <CardA Icon={facbook} IconAlt='facbook' Name='@nathanf' Number='1987' Arrow={iconUp} ArrowAlt='ArrowUp' Rating='12 Today' className='CardA facbook' classRating='ArrowUp'/>
                    <CardA Icon={twitter} IconAlt='twitter' Name='@nathanf' Number='1044' Arrow={iconUp} ArrowAlt='ArrowUp' Rating='99 Today' className='CardA twitter' classRating='ArrowUp'/>
                    <CardA Icon={instagram} IconAlt='instagram' Name='@realnathanf' Number='11k' Arrow={iconUp} ArrowAlt='ArrowUp' Rating='1099 Today' className='CardA instagram' classRating='ArrowUp'/>
                    <CardA Icon={youtube} IconAlt='youtube' Name='Nathan F.' Number='8239' Arrow={iconDown} ArrowAlt='ArrowDown' Rating='144 Today' className='CardA youtube' classRating='ArrowDown'/>
                </section>
                {/* OverView Section */}
                <section className="OverviewCards">
                    <h1 className="OverviewTitle">
                        Overview - Today
                    </h1>
                    <div className="OverviewGrid">
                        <CardB Description='Page Views' Icon={facbook} IconAlt='facbook' Number='87' Arrow={iconUp} ArrowAlt='ArrowUp' Rating='3%' classRating='ArrowUp'/>
                        <CardB Description='Likes' Icon={facbook} IconAlt='facbook' Number='52' Arrow={iconDown} ArrowAlt='ArrowDown' Rating='2%' classRating='ArrowDown'/>
                        <CardB Description='Likes' Icon={instagram} IconAlt='instagram' Number='5462' Arrow={iconUp} ArrowAlt='ArrowUp' Rating='2257%' classRating='ArrowUp'/>
                        <CardB Description='Profile Views' Icon={instagram} IconAlt='instagram' Number='52k' Arrow={iconUp} ArrowAlt='ArrowUp' Rating='1375%' classRating='ArrowUp'/>
                        <CardB Description='Retweets' Icon={twitter} IconAlt='twitter' Number='117' Arrow={iconUp} ArrowAlt='ArrowUp' Rating='303%' classRating='ArrowUp'/>
                        <CardB Description='Likes' Icon={twitter} IconAlt='twitter' Number='507' Arrow={iconUp} ArrowAlt='ArrowUp' Rating='553%' classRating='ArrowUp'/>
                        <CardB Description='Likes' Icon={youtube} IconAlt='youtube' Number='107' Arrow={iconDown} ArrowAlt='ArrowDown' Rating='19%' classRating='ArrowDown'/>
                        <CardB Description='Total Views' Icon={youtube} IconAlt='youtube' Number='1407' Arrow={iconDown} ArrowAlt='ArrowDown' Rating='12%' classRating='ArrowDown'/>
                    </div>
                </section>
            </main>
        </>
    )
}