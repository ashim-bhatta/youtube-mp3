import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { combineReducersType } from '../../Redux'
import Footer from '../Footer'
import MusicCard from '../MusicCard'
import Nav from '../Nav'

const SongContainer = ({ results }: any) => {
  return (
    <>
      <div className='search__result__container center'>
        {results?.map((result, index) => {
          return <MusicCard data={{ ...result, index }}  key={index} />
        })}
      </div>
    </>
  )
}

export default SongContainer
