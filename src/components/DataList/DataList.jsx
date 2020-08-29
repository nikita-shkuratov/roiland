import React, { Fragment } from 'react'


function DataList(props) {
    const { name, gender, status, air_date, episode, type, dimension } = props.data

    const caracterData = (
        <Fragment>
            <div>
                <p>gender: {gender}</p>
            </div>
            <div>
                <p>status: {status}</p>
            </div>
        </Fragment>)


    const episodeData = (
        <Fragment>
            <div>
                <p>episode: {episode}</p>
            </div>
            <div>
                <p>date: {air_date}</p>
            </div>
        </Fragment>)


    const locationData = (
        <Fragment>
            <div>
                <p>type: {type}</p>
            </div>
            <div>
                <p>dimension: {dimension}</p>
            </div>
        </Fragment>)

    return (
        <li className='content__item'>
            <div className='content__column'>
                <div>
                    <h4 className='__title'>{name}</h4></div>
                {gender && caracterData}
                {air_date && episodeData}
                {dimension && locationData}
            </div>
        </li>
    )
}

export default DataList

