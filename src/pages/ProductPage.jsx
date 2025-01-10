import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useStore from '../stores/store'

function ProductPage() {
  const { id } = useParams();
  const { productInfo, setProductInfo, fetchProductInfo } = useStore();

  useEffect(() => {
    fetchProductInfo(id);
  }, [id]);

  if (!productInfo) return <div>Loading...</div>;

  return (
    <div>
      <img src={productInfo.product_img} alt="" />
      <div>
        <h2>{productInfo.product_name}</h2>
        <p>{productInfo.company}</p>
        <p>{productInfo.category}</p>
      </div>
      <div>
        <p>{productInfo.description}</p>
      </div>
    </div>
  )
}

export default ProductPage