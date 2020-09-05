import React from 'react'
import Loader from '../Loader/Loader'
import { PATH_CHARACTER, PATH_EPISODE, PATH_LOCATION } from '../../../constants'
import { Link } from 'react-router-dom'

function DataList (props) {
  if (props.character) {
    return (
      <ul>
        {props.character.map((item, index) => (
          <Link to={`${PATH_CHARACTER}${item.id}`} key={index}>
            <li className="content__item">
              <div className="content__column">
                <div>
                  <h4 className="__title">{item.name}</h4>
                </div>
                <div>
                  <p>gender: {item.gender}</p>
                </div>
                <div>
                  <p>status: {item.status}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    )
  } else if (props.episode) {
    return (
      <ul>
        {props.episode.map((item, index) => (
          <Link to={`${PATH_EPISODE}${item.id}`} key={index}>
            <li className="content__item">
              <div className="content__column">
                <div>
                  <h4 className="__title">{item.name}</h4>
                </div>

                <div>
                  <p>episode: {item.episode}</p>
                </div>
                <div>
                  <p>date: {item.air_date}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    )
  } else if (props.location) {
    return (
      <ul>
        {props.location.map((item, index) => (
          <Link to={`${PATH_LOCATION}${item.id}`} key={index}>
            <li className="content__item">
              <div className="content__column">
                <div>
                  <h4 className="__title">{item.name}</h4>
                </div>
                <div>
                  <p>type: {item.type}</p>
                </div>
                <div>
                  <p>dimension: {item.dimension}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    )
  } else {
    return <Loader />
  }
}

export default DataList
