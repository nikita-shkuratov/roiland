import React from 'react'
import Loader from '../Loader/Loader'
import { PATH_CHARACTER, PATH_EPISODE, PATH_LOCATION } from '../../../constants'
import { Link } from 'react-router-dom'
import playIco from '../../../style/img/play-ico.png'
import locationIco from '../../../style/img/location-ico.png'

function DataList (props) {
  if (props.character) {
    return (
      <div className="table">
        <div className="table__header">
          <div className="table__header__row">
            <div><p>name</p></div>
            <div><p>species</p></div>
            <div><p>origin</p></div>
            <div><p>status</p></div>
          </div>
        </div>
        <div className="table__body">
          {props.character.map((item, index) => (
            <Link to={`${PATH_CHARACTER}${item.id}`} key={index}>
              <div className="table__body__row" key={index}>
                <div>
                  <img className="table__image" src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
                <div><p>{item.species}</p></div>
                <div><p>{item.origin && item.origin.name}</p></div>
                <div><p>{item.status}</p></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  } else if (props.episode) {
    return (
      <div className="table">
        <div className="table__header">
          <div className="table__header__row little">
            <div><p>name</p></div>
            <div><p>episode</p></div>
            <div><p>date</p></div>
          </div>
        </div>
        <div className="table__body">
          {props.episode.map((item, index) => (
            <Link to={`${PATH_EPISODE}${item.id}`} key={index}>
              <div className="table__body__row little" key={index}>
                <div>
                  <img className="table__image" src={playIco} alt="" />
                  <p>{item.name}</p>
                </div>
                <div><p>{item.episode}</p></div>
                <div><p>{item.air_date}</p></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  } else if (props.location) {
    return (
      <div className="table">
        <div className="table__header">
          <div className="table__header__row little">
            <div><p>name</p></div>
            <div><p>type</p></div>
            <div><p>dimension</p></div>
          </div>
        </div>
        <div className="table__body">
          {props.location.map((item, index) => (
            <Link to={`${PATH_LOCATION}${item.id}`} key={index}>
              <div className="table__body__row little" key={index}>
                <div>
                  <img className="table__image" src={locationIco} alt="" />
                  <p>{item.name}</p>
                </div>
                <div><p>{item.type}</p></div>
                <div><p>{item.dimension}</p></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  } else {
    return <Loader />
  }
}

export default DataList
