import  { useEffect } from 'react';
import ItemCard from './ItemCard';
// import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAndStore } from '../ReduxToolKit/productReducer';

function MainContent() {
    // const [products, setproducts] = useState([]);
    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products")
    //         .then(res => {
    //             console.log(res.data);
    //             setproducts(res.data);
    //             // console.log(products);
    //         })
    // }, []);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAndStore()); // Dispatch the action
    }, [dispatch]);

    // Retrieve products from the Redux store
    const products = useSelector(state => state.products.products);
    return (
        <div className="flex flex-wrap p-0 md:p-6 w-full p-1">
            {products.map((product) => (
                <ItemCard key={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image} />
            ))}

        </div>
    )
}

export default MainContent;