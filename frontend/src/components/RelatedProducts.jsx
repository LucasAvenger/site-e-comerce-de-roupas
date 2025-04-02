import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from '../components/ProductItem'

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            // Faz uma cópia dos produtos
            let productsCopy = [...products];

            // Filtra pelos produtos que correspondem à categoria e subcategoria

            productsCopy = productsCopy.filter((item) => item.category === category);


            productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);


            // Limita a 5 produtos relacionados
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products])


    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'PRODUTOS'} text2={'RELACIONADOS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.length > 0 ? (
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                ) : (
                    <p>Não há produtos relacionados para esta categoria e subcategoria.</p>
                )}
            </div>
        </div>
    )
}

export default RelatedProducts;