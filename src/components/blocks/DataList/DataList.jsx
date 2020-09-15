import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { Table, TableHeaderRow, TableBodyRow } from './styles'

function DataList (props) {
  const { list, path, title } = props.data

  return (
    <Table>
      <div>
        <TableHeaderRow>
          {title.map(item => (
            <div key={item}>
              <p>{`${item}`}</p>
            </div>
          ))}
        </TableHeaderRow>
      </div>
      <div>
        {list.map((item, index) => (
          <Link to={`${path}${item.id}`} key={index}>
            <TableBodyRow key={index}>
              <div>
                <img src={item.image} alt="" />
              </div>
              {Object.values(item.params).map((name, index) => (
                <div key={index}>
                  <p>{`${name}`}</p>
                </div>
              ))}
            </TableBodyRow>
          </Link>
        ))}
      </div>
    </Table>
  )
}

DataList.propTypes = {
  data: propTypes.object,
  list: propTypes.array,
  path: propTypes.string,
  title: propTypes.array,
}

export default DataList
