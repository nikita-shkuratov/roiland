import React from 'react'
import Loader from '../Loader/Loader'
import cardEpis from '../../../style/img/card-epis.jpg'
import cardLoc from '../../../style/img/card-loc.jpg'
import DataList from '../DataList/DataList'

function DataCard (props) {
  if (props.character) {
    const [desiredCharacter, listEpisodes] = props.character
    const { image, name, gender, species, origin, status } = desiredCharacter

    return (
      <div className="page__container">
        <div className="card">
          <div>
            <img className="card__avatar" src={image} alt="" />
          </div>
          <div className="card__info">
            <p>{`Name : ${name}`}</p>
            <p>{`Gender : ${gender}`}</p>
            <p>{`Species : ${species}`}</p>
            <p>{`Origin : ${origin && origin.name}`}</p>
            <p>{`Status : ${status}`}</p>
          </div>
        </div>
        <div className="list__for__card">
          <h1 className="list__for__card__title">
            List of episodes with this character
          </h1>
          <DataList episode={listEpisodes} />
        </div>
      </div>
    )
  } else if (props.episode) {
    const [desiredEpisode, listCharacters] = props.episode
    const { name, episode, air_date } = desiredEpisode

    return (
      <div className="page__container">
        <div className="card">
          <div>
            <img className="card__avatar" src={cardEpis} alt="" />
          </div>
          <div className="card__info">
            <p>{`Name : ${name}`}</p>
            <p>{`Episode : ${episode}`}</p>
            <p>{`Air date : ${air_date}`}</p>
          </div>
        </div>
        <div className="list__for__card">
          <h1 className="list__for__card__title">
            List of episodes with this character
          </h1>
          <DataList character={listCharacters} />
        </div>
      </div>
    )
  } else if (props.location) {
    const [desiredLocation, listCharacters] = props.location
    const { name, type, dimension } = desiredLocation

    return (
      <div className="page__container">
        <div className="card">
          <div>
            <img className="card__avatar" src={cardLoc} alt="" />
          </div>
          <div className="card__info">
            <p>{`Name : ${name}`}</p>
            <p>{`Type : ${type}`}</p>
            <p>{`Dimension : ${dimension}`}</p>
          </div>
        </div>
        <div className="list__for__card">
          <h1 className="list__for__card__title">List of episodes with this character</h1>
          <DataList character={listCharacters} />
        </div>
      </div>
    )
  } else {
    return <Loader />
  }
}

export default DataCard
