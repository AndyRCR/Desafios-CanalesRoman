import './ItemListContainer.css'
import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
  const [productList, setProductList] = useState(null)

  useEffect(() => {
    fetch('https://sheet.best/api/sheets/9710fa39-894d-4138-bc44-2863728a31ac')
    .then(res => res.json())
    .then(res => setTimeout(()=> setProductList(res), 1500))
  
    return () => {
      
    }
  }, [])

  return (
    <>
      <div className='itemListContainer'>
        <h2>Lista de productos</h2>
        <ItemList productList={productList} />
      </div>
    </>
  )
}

export default ItemListContainer