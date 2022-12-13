import React from 'react';

const ProductPage = ({serverData}) => {
  console.log(serverData)
  return <div>Product Page</div>;
}

export default ProductPage;

export async function getServerData({ params }) {
  return {
    props: params
  }
}
