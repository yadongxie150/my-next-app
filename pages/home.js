import React from 'react'
import fetch from 'isomorphic-fetch'

const Home = ({name}) => <div>Home, {name}</div>

const timeout = (time, data) => {
  return new Promise(resolve => setTimeout(() => resolve(data), time))
}
Home.getInitialProps = async () => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const response = await res.json()
  // return await timeout(2000, {name: 'jack'})
  return await Promise.resolve({name: 'jack12'})
}

export default Home
