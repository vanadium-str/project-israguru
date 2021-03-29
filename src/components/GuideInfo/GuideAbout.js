import React from 'react';
import {FaFacebookMessenger, FaTelegram, FaViber} from "react-icons/fa";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Button from "../excursionBlock/Button";
import {bannerData} from "../../json/bannerData";

const GuideAbout = props => {
    return (
        <div>
            <h2 className='theme font-weight-bold'>{props.name} {props.surname}</h2>
            <div className='mb-3'>Лицензированный гид (верифицирован israguru.com)</div>
            <div className='scroll'>
                <h4 className='font-weight-bold'>Кто я </h4>
                <p>{props.description}</p>
                <h4 className='font-weight-bold mb-5 mt-5'>Ближайшие экскурсии</h4>
                {/*TODO*/}
                {/*<Home/>*/}
                {
                    bannerData.filter(k => k.guide === props.id).map((data, key) => {
                        return (
                            <div className='row shadow mb-2 mr-2 ml-1'>
                                <div className='col-9 p-0'><Description summary={data.summary} level={data.level}
                                                                        title={data.title}/></div>
                                <div className='col-3 d-flex justify-content-center'>
                                    <div><Date/></div>
                                    <div className='bottom mb-5'><Button changePage={props.changePage}/></div>
                                </div>
                            </div>
                        )
                    })}
                <h4 className='font-weight-bold mt-5'>Я могу</h4>
                <div>Также в индивидуальном порядке могу провести экскурсии по следующим городам:
                    <ul className='mt-2'>{props.cities.map(cities =>
                        <li key={cities}>{cities}</li>)}
                    </ul>
                </div>
                <h4 className='font-weight-bold mt-5'>Связаться со мной</h4>
                <p className='mb-2'>Телефон: 11111111111</p>
                <p className='mb-2'>Соцсети и мессенджеры</p>
                <div className='mb-5'>
                    <FaTelegram/>
                    <FaViber/>
                    <FaFacebookMessenger/>
                </div>
            </div>
        </div>
    );
};

export default GuideAbout;