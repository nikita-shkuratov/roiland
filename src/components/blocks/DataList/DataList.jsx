import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import {
  Table,
  TableHeaderRow,
  TableBodyRow,
  HeaderTitles,
  Image,
  BodyItems,
} from './styles'

function DataList (props) {
  const { list, path, title } = props.data
  return (
    <Table>
      <div>
        <TableHeaderRow>
          {title.map(item => (
            <HeaderTitles key={item}>
              <p>{`${item}`}</p>
            </HeaderTitles>
          ))}
        </TableHeaderRow>
      </div>
      <div>
        {list.map((item, index) => (
          <Link to={`${path}${item.id}`} key={index}>
            <TableBodyRow key={index}>
              <BodyItems>
                <Image src={item.image} alt="" />
              </BodyItems>
              {Object.values(item.params).map((name, index) => (
                <BodyItems key={index}>
                  <p>{`${name}`}</p>
                </BodyItems>
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
