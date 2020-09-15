import React from 'react'
import Loader from '../Loader/Loader'
import DataList from '../DataList/DataList'
import propTypes from 'prop-types'
import { PageContainer, Card, List } from './styles'

function DataCard (props) {
  if (!props.data) {
    return <Loader />
  }
  if (props.data) {
    const { image, params, list, title } = props.data

    return (
      <PageContainer>
        <Card>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            {Object.keys(params).map(name => (
              <p key={name}>{`${name} : ${params[name]}`}</p>
            ))}
          </div>
        </Card>
        <List>
          <h1>{title}</h1>
          <DataList data={list} />
        </List>
      </PageContainer>
    )
  }
}

DataCard.propTypes = {
  image: propTypes.string,
  params: propTypes.object,
  list: propTypes.object,
  title: propTypes.string,
}

export default DataCard
