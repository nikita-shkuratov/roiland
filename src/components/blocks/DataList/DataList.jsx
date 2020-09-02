import React from 'react'

function DataList (props) {
  const {
    name,
    gender,
    status,
    air_date,
    episode,
    type,
    dimension,
  } = props.data

  const caracterData = (
    <>
      <div>
        <p>gender: {gender}</p>
      </div>
      <div>
        <p>status: {status}</p>
      </div>
    </>
  )

  const episodeData = (
    <>
      <div>
        <p>episode: {episode}</p>
      </div>
      <div>
        <p>date: {air_date}</p>
      </div>
    </>
  )

  const locationData = (
    <>
      <div>
        <p>type: {type}</p>
      </div>
      <div>
        <p>dimension: {dimension}</p>
      </div>
    </>
  )

  return (
    <li className="content__item">
      <div className="content__column">
        <div>
          <h4 className="__title">{name}</h4>
        </div>
        {gender && caracterData}
        {air_date && episodeData}
        {dimension && locationData}
      </div>
    </li>
  )
}

export default DataList
