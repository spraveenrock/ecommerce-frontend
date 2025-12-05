import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        console.log('API URL:', process.env.REACT_APP_API_URL);
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res => {
            console.log('Response:', res);
            return res.json();
        })
        .then(res => {
            console.log('Data:', res);
            setProducts(res.products);
        })
        .catch(err => console.log('Error:', err));
    },[searchParams])
    return <Fragment>

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard product={product}/>)}
        </div>
        </section>

    </Fragment>
}