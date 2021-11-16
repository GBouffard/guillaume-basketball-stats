
import React from 'react'

const makeOptions = seasons =>
  seasons.map((season, i) => (
    <option value={season} key={i}>
      {season}
    </option>
  ))

const SeasonSelect = ({ onChange, value, seasonsList }) => {
  return (
    <select
      onChange={onChange}
      value={value}
      defaultValue={seasonsList[seasonsList.length - 1]}
    >
      {makeOptions(seasonsList)}
    </select>
  )
}

export default SeasonSelect
