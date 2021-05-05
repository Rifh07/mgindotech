import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function Cards({picture}) {
    const history = useHistory();
    const { id, title, thumbnailUrl } = picture

    const detailPicture = () => {
        history.push(`/${id}/details`)
    }
    return (
        <Card className="col-md-2 m-1 p-3 cursor" onClick={detailPicture}>
            <Card.Img variant="top" src={thumbnailUrl} />
            <Card.Body>
                <h6>{title}</h6>
            </Card.Body>
        </Card>
    )
}

export default Cards
