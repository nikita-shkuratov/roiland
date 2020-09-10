import React from 'react'
import Loader from '../Loader/Loader'
import DataList from '../DataList/DataList'

function DataCard (props) {
  if (!props.data) {
    return <Loader />
  }
  if (props.data) {
    const { image, params, list, title } = props.data

    return (
      <div className="page__container">
        <div className="card">
          <div>
            <img className="card__avatar" src={image} alt="" />
          </div>
          <div className="card__info">
            {Object.keys(params).map(name => (
              <p key={name}>{`${name} : ${params[name]}`}</p>
            ))}
          </div>
        </div>
        <div className="list__for__card">
          <h1 className="list__for__card__title">{title}</h1>
          <DataList data={list} />
        </div>
      </div>
    )
  }
}

export default DataCard
