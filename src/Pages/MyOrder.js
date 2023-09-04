import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { db } from "../FireBaseDB/firebaseInit";
import { collection, getDocs } from "firebase/firestore";
import Loader from '../Components/Loader';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const userUID = useSelector((state) => state.userReducer.userUID);
  // const loading = useSelector(state => state.myCartReducer.loading);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch user's orders from Firestore
    const fetchOrders = async () => {
      setLoading(true);
      if (userUID) {
        const ordersRef = collection(db, "User", userUID, "MyOrders");
        const snapshot = await getDocs(ordersRef);
        setLoading(false);
        const ordersData = [];

        snapshot.forEach((doc) => {
          ordersData.push(doc.data());
        });

        // setOrders(ordersData);
        setOrders(ordersData.sort((a, b) => b.purchaseDate.localeCompare(a.purchaseDate)));
        // console.log(ordersData);
      }
    };

    fetchOrders();
  }, [userUID]);

  const calculateTotalPrice = (itemsList) => {
    return itemsList.reduce((total, item) => total + item.price * item.qty + 70, 0).toFixed(2); // 70 rupees for shipping charges
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
      {loading ? (
        <Loader />
      ) : orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faShoppingBag} className="text-red-500 mr-2" />
                <span className="text-lg ">Order Date: <span className="text-red-500">{order.purchaseDate}</span></span>
              </div>
              <ul className="list-none">
                {order.itemsList.map((item, i) => (
                  <li className="mb-2" key={i}>
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={`${item.title}`} className="w-16 h-16 object-cover" />
                      <div>
                        <p className=" ">{item.title}</p>
                        <p>Qty: <span className="text-red-500 font-semibold">{item.qty}</span></p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold mt-4">Purchased Amount:<span className="text-red-500"> &#x20B9; {calculateTotalPrice(order.itemsList)}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
