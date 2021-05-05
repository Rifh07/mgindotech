import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { API } from "../../config/api"
import ReactLoading from 'react-loading'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons"
import { AppContext } from "../../context/globalContext"

function Detail() {
    const [state, dispatch] = useContext(AppContext);
    const [picturess, setPictures] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const gambar = state.pictures

    useEffect(() => {
        getPictures()
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

    const favorite = async () => {
        dispatch({
            type: "favorite",
            payload: findPicture,
        })
    }

    const unFavorite = async () => {
        dispatch({
            type: "un-favorite",
            payload: findPicture,
        })
    }

    const findPicture = picturess.find(picture => picture.id == id)
    const findGambar = gambar.find(gambar => gambar.id == id)
    
    return (
        <div className="row justify-content-center">
            {loading ? (
                <ReactLoading type="bars" color="blue" width={'5%'} />
            ) : (
                <Card className="col-md-6 m-1 p-5">
                    <Card.Img className="mb-3" variant="top" src={findPicture.url} />
                    <Card.Body>
                        <h6 className="mt-3 mb-3">{findPicture.title} </h6>
                        {findGambar ? (
                            <Button variant="dark" className="pl-3 pr-3" onClick={unFavorite}> 
                                Un-Favorite  <FontAwesomeIcon icon={faHeartBroken} className="ml-2" />
                            </Button>
                            
                        ) : (
                            <Button variant="dark" className="pl-3 pr-3" onClick={favorite}> 
                                Favorite  <FontAwesomeIcon icon={faHeart} className="ml-2" />
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default Detail
