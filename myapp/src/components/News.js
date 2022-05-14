import React from "react";
// import { getProducts } from "../helper/getProducts";
import { Newsitem } from "./Newsitem";
import { useState, useEffect } from "react";
export const News = () => {

    var requestOptions = {
        method: "GET",
    };

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts().then((data) => {
            if (data.error) {
                setError(data.error);
                console.log(error);
            } else {
                setProducts(data.articles);
            }
        });
    };
    useEffect(() => {
        loadAllProducts();
    }, []);

    const [Pagenum, setPagenum] = useState(1);
    const handlePrevious = () => {
        setPagenum(Pagenum - 1);
    }
    const handleNext = () => {
        // setPagenum(Pagenum+1);
        console.log(Pagenum);
    }

    const getProducts = () => {
        let API = `https://newsapi.org/v2/everything?q=football&apiKey=a6bc6e06db53418ba33c9f6c27098880`;
        // console.log(API);
        return fetch(`${API}`, requestOptions)
            .then((response) => {
                console.log("api hiited");
                return response.json();
            })
            .catch((err) => console.log(err));
    };
    const newsitem = () => {
        // console.log(products);
        return products.map((article) => {

            return (<div className="col-3" key={article.url}>
                <Newsitem title={article.title} desc={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
            </div>);
        });
    };

    return (
        <div className="container my-3">
            <h1>Top Headlines</h1>
            <div className="row">
                {newsitem()}
            </div>
            <div className="container d-flex justify-content-between">
                <button onClick={handlePrevious} type="button" className="btn btn-primary">Previous</button>
                <button onClick={handleNext} type="button" className="btn btn-primary">Next</button>
            </div>
        </div>
    );
};
