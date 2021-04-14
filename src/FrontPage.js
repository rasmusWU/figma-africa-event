import './FrontPage.scss';
import { useEffect, useState } from 'react';

function FrontPage() {
    const [data, setData] = useState([]);
    const getData=()=> {
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            setData(data)
        });
    }
    useEffect (() => {
        getData()
    },[]);
    return (
        <div className="frontPage">
            <section className="frontPage__top">
                <section className="frontPage__gradient">
                    <nav className="frontPage__registerNav">
                        <button className="frontPage__registerNav__Btn">Register now</button>
                    </nav>
                    <section className="frontPage__content">
                        <img src="logo.svg" alt="" srcset=""/>
                        <section className="frontPage__text">
                        <h1 className="frontPage__text__titleText">
                            <span>Figma Africa</span> International Conference</h1>
                        <p className="frontPage__text__date">
                            December 6 - 8, 2018</p>
                        <p className="frontPage__text__place">
                            Kigali Conference Centre<br/>
                            Kimihurura Roundabout</p>
                        <button className="frontPage__text__registerBtn">Register now</button>
                        <p className="frontPage__text__disclaimer">
                            *Limited seats available</p>
                        </section>
                    </section>
                </section>
            </section>
            <section className="frontPage__bot">
                <h2>Our conference in numbers</h2>
                <section className="frontPage__stats">
                    <div className="frontPage__stat">
                        <h6 className="frontPage__stat__title">Countries</h6>
                        <p className="frontPage__stat__number frontPage__stat__countries">{data.countries}</p>
                    </div>
                    <div className="frontPage__stat">
                        <h6 className="frontPage__stat__title">Cities</h6>
                        <p className="frontPage__stat__number frontPage__stat__cities">{data.cities}</p>
                    </div>
                    <div className="frontPage__stat">
                        <h6 className="frontPage__stat__title">Speakers</h6>
                        <p className="frontPage__stat__number frontPage__stat__speakers">{data.speakers}</p>
                    </div>
                    <div className="frontPage__stat">
                        <h6 className="frontPage__stat__title">Attendees</h6>
                        <p className="frontPage__stat__number frontPage__stat__attendees">{data.attendees}</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default FrontPage;