import React from 'react'
import Loader from '../Loader/Loader'
import playIco from '../../../style/img/play-ico.png'
import locationIco from '../../../style/img/location-ico.png'

function DataCard (props) {
  if (props.character) {
    const { image, name, gender, species, origin, status } = props.character
    if (origin) {
      return (
        <div className="caracter">
          <div className="character__img">
            <img className="avatar" src={image} alt="" />
          </div>
          <div className="character__info">
            <p>{`NAME : ${name}`}</p>
            <p>{`GENDER : ${gender}`}</p>
            <p>{`SPECIES : ${species}`}</p>
            <p>{`ORIGIN : ${origin.name}`}</p>
            <p>{`STATUS : ${status}`}</p>
          </div>
        </div>
      )
    } else {
      return <Loader />
    }
  } else if (props.episode) {
    const { name, episode, air_date } = props.episode
    return (
      <div className="episode__info">
        <img className="play_ico" src={playIco} alt="" />
        <h1>{episode}</h1>
        <h2>{name}</h2>
        <h2>{air_date}</h2>
      </div>
    )
  } else if (props.location) {
    const { name, type } = props.location
    return (
      <div className="episode__info">
        <img className="play_ico" src={locationIco} alt="" />
        <h1>{name}</h1>
        <h2>{type}</h2>
      </div>
    )
  } else {
    return <Loader />
  }
}

export default DataCard
