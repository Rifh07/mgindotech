import React, { useState, useEffect } from 'react'
import { API } from "../../config/api"

import Cards from "../../components/card"
import ReactLoading from 'react-loading'

function Home() {
    const [pictures, setPictures] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPictures();
    }, []);

    const getPictures = async () => {
        try {
            const pictures = await API.get('/')
            await setPictures(pictures.data)
            setLoading(false)
        } catch (error) {
          console.log(error)
        } 
      }
    return (
        <div className="row justify-content-center">
            {loading ? (
                <ReactLoading type="bars" color="blue" width={'5%'} />
            ) : (
                pictures.map((picture) => (
                <Cards picture={picture} key={picture.id} />
            )))}
        </div>
    )
}

export default Home
