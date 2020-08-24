import React from 'react'

function DataList(props) {
    const { name, gender, status, air_date, episode, type, dimension } = props.data

    const caracterData = (<p>gender: {gender} / status: {status} </p>)
    const episodeData = (<p>episode: {episode} / air_date: {air_date}</p>)
    const locationData = (<p>type: {type} / dimension: {dimension}</p>)

    console.log(gender)
    return (
        <li className='content__item'>
            <div className='content__container'>
                <h4 className='__title'>{name}</h4>
                {gender && caracterData}
                {air_date && episodeData}
                {dimension && locationData}
            </div>
        </li>
    )
}

export default DataList

