
// css styles 
import styles from "../styles/home.module.css";


// render the filter bar
export default function FilterBar(props){
    const {price,setPrice,setCategory}=props;

    return(
        <div className={styles.filterBar}>
            <h1> FilterBar </h1>

            {/* price ranger and price slider  */}
            <div className={styles.priceRange}>
                {/* sub heading */}
                <span>Price</span>{` <= ${price}`}
                <br />
                {/* slider  */}
                <input type="range" 
                    min="100" 
                    max="50000" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} />
            </div>
                
                
            {/* sort item by category */}
            <div className={styles.categoryBox}>
                {/* sub heading */}
                <span>Category:</span>

                {/* radio buttons for differnet category */}
                <div className={styles.categoryItem}>
                    {/* men category */}
                    <div>
                    <input type="radio" 
                        id="men" 
                        value="men" 
                        name="category" 
                        onClick={()=>setCategory("men's clothing")}/>
                    <label htmlFor="men">Men</label>
                    </div>
                    {/* women category */}
                    <div>
                    <input type="radio" 
                        id="women" 
                        value="women" 
                        name="category"
                        onClick={()=>setCategory("women's clothing")}/>
                    <label htmlFor="women">Women</label>
                    </div>
                    {/* electronic */}
                    <div>
                    <input type="radio" 
                        id="electric" 
                        value="electric" 
                        name="category"
                        onClick={()=>setCategory("electronics")}/>
                    <label htmlFor="electric">Electronic</label>
                    </div>
                    {/* jewellery */}
                    <div>
                    <input type="radio" 
                        id="jewellery" 
                        value="jewellery" 
                        name="category"
                        onClick={()=>setCategory("jewelery")}/>
                    <label htmlFor="jewellery">Jewellery</label>
                    </div>
                    {/* none  */}
                    <div>
                    <input type="radio" 
                        id="none" 
                        value="none" 
                        name="category"
                        onClick={()=>setCategory("none")}/>
                    <label htmlFor="none">None</label>
                    </div>
                </div>

            </div>
            
        </div>
        
    )
}