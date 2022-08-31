/* eslint-disable @typescript-eslint/no-var-requires */

import React, { useEffect, useState } from "react"

// const api_url = 'https://landregistry.data.gov.uk/def/ukhpi/.json';
const UKPD = require('../../../node_modules/ukpd/build')



function Ukpd() {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await UKPD.streetLevel(51, -0.1)
    // const data = await response.json()
    console.log(response)
    console.log(response.latitude)
    setUsers(response)
   }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div> Hello police</div>
  )
}

export default Ukpd

async function main () {
  const result = await UKPD.categories()

  const categories = result.map((category) => category.name)

  console.log('the following categories are available:', categories.join(', '))
}

main()


async function availability () {
  const result = await UKPD.availability()

  const dates = result.map((item) => item.date)

  console.log('data is available for', dates.join(', '))
}

availability()

// function transformPointReversed(topology, position) {
//   position = position.slice();
//   position[0] = (position[0] - topology.transform.translate[0])
//   /(topology.transform.scale[0]),
//   position[1] = (position[1] - topology.transform.translate[1])
//   /(topology.transform.scale[1]) 
//   return position;
// };