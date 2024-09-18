import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [Products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    ;(async() => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        })
        setProducts(response.data)
        console.log(response.data);
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('request canceled', error.message)
          return
        }
        setError(true)
        setLoading(false)
        
      }
      
    })()
    return () => {
      controller.abort()
    }
  }, [search])

  

  return (
    <>
      <h1>Products</h1>
      <input type="text"  placeholder='search'
      onChange={(e) => setSearch(e.target.value)}
      value={search}

      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>something went wrong</h1>}

      <h1>Number of Products: {Products.length}</h1>
    </>
  )
}

export default App
