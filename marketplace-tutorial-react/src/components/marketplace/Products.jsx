import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Loader from "../utils/Loader";
import {NotificationError, NotificationSuccess} from "../utils/Notifications";
import {buyProductAction, createProductAction, deleteProductAction, getProductsAction,} from "../../utils/marketplace";
import PropTypes from "prop-types";
import {Row} from "react-bootstrap";
//...
const Products = ({address, fetchBalance}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const getProducts = async () => {
        setLoading(true);
        getProductsAction()
            .then(products => {
                if (products) {
                    setProducts(products);
                }
            })
            .catch(error => {
                console.log(error);
            })
            .finally(_ => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);
    
	const createProduct = async (data) => {
	    setLoading(true);
	    createProductAction(address, data)
	        .then(() => {
	            toast(<NotificationSuccess text="Product added successfully."/>);
	            getProducts();
	            fetchBalance(address);
	        })
	        .catch(error => {
	            console.log(error);
	            toast(<NotificationError text="Failed to create a product."/>);
	            setLoading(false);
	        })
	};