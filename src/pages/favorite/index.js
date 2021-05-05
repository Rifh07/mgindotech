import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from "../../context/globalContext"
import CardFavorite from "../../components/cardFavorite"
import ReactLoading from 'react-loading'

function Favorite() {
    const [state] = useContext(AppContext);
    const [pictures, setPictures] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPictures();
    }, []);

    const getPictures = async () => {
        try {
            const pictures = state.pictures
            await setPictures(pictures)
            setLoading(false)
        } catch (error) {
          console.log(error)
        } 
      }
    return (
        <div className="row justify-content-center">
            {loading ? (
                <ReactLoading type="bars" color="blue" width={'5%'} />
            )  : pictures ? (
                
                    pictures.map((picture) => (
                        <CardFavorite picture={picture} key={picture.id} />
                    ))
                ) : (
                    <h4>Is Empty</h4>
                ) 
            }
        </div>
    )
}

export default Favorite
