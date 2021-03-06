import React from 'react';
import '../../styles/guide.css'
import Description from "../excursionBlock/Description";
import DateOfExcursion from "../excursionBlock/DateOfExcursion";
import ButtonMore from "../excursionBlock/ButtonMore";
import {FaFacebookMessenger, FaTelegram, FaViber} from "react-icons/fa";
import {guideInfo} from "../../json/guideInfo";
import {excursions} from "../../utils/constants";
import style from "../../css_modules/guide.module.css";
import other from "../../css_modules/other.module.css";

const GuideAbout = ({idGuide}) => {
    const guideExcursions = excursions.filter(k => k[1].guide === idGuide);

    return (
        <div>
            <h2 className={`font-weight-bold`}>
                {guideInfo[idGuide].name} {guideInfo[idGuide].surname}
            </h2>
            <div className='mb-3'>
                Лицензированный гид (верифицирован israguru.com)
            </div>
            <div className={`${style.scroll}`}>
                <h4 className='font-weight-bold'>
                    Кто я
                </h4>
                <p className='col-xl-12 col-lg-9'>
                    {guideInfo[idGuide].description}
                </p>

                <h4 className='font-weight-bold mb-5 mt-5'>
                    Ближайшие экскурсии
                </h4>
                {guideExcursions.map((key) => {
                    return (
                        <div className='row shadow
                        mr-3 mr-sm-3 mr-lg-4 mb-2 ml-1 p-2'>
                            <div className='col-lg-9 p-0'>
                                <Description key={key[0]} id={key[0]}/>
                            </div>
                            <div className='col-lg-3 rightBar'>
                                <div className='rightBarCenter'>
                                    <DateOfExcursion id={key[0]}/>
                                </div>
                                <div className={`${other.bottom} rightBarCenter`}>
                                    <ButtonMore guide={key[1].guide} id={key[0]}/>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <h4 className='font-weight-bold mt-5'>
                    Я могу
                </h4>
                <div>
                    Также в индивидуальном порядке могу провести экскурсии по следующим городам:
                    <ul className='mt-2'>
                        {guideInfo[idGuide].cities.map(cities =>
                            <li key={cities}>
                                {cities}
                            </li>)}
                    </ul>
                </div>

                <h4 className='font-weight-bold mt-5'>
                    Связаться со мной
                </h4>
                <p className='mb-2'>
                    Телефон: <b>{guideInfo[idGuide].phone}</b>
                </p>

                <p className='mb-2'>
                    Соцсети и мессенджеры
                </p>
                <div className={`${style.messenger} mb-5`}>
                    <FaTelegram className='mr-2'/>
                    <FaViber className='mr-2'/>
                    <FaFacebookMessenger/>
                </div>
            </div>
        </div>
    );
};

export default GuideAbout;