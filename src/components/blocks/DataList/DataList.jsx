import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

function DataList (props) {
  const { list, path, title } = props.data

  return (
    <div className="table">
      <div className="table__header">
        <div className="table__header__row">
          {title.map(item => (
            <div key={item}>
              <p>{`${item}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="table__body">
        {list.map((item, index) => (
          <Link to={`${path}${item.id}`} key={index}>
            <div className="table__body__row" key={index}>
              <div>
                <img className="table__image" src={item.image} alt="" />
              </div>
              {Object.values(item.params).map((name, index) => (
                <div key={index}>
                  <p>{`${name}`}</p>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

DataList.propTypes = {
  data: propTypes.object,
  list: propTypes.array,
  path: propTypes.string,
  title: propTypes.array,
}

export default DataList
