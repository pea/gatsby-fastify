import React from 'react';

const ProductPage = ({serverData}) => {
  return <div>Slug: {serverData.slug}</div>;
}

export default ProductPage;

export async function getServerData({ params }) {
  return {
    props: params
  }
}
