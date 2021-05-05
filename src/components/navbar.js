import React from 'react'
import { NavDropdown, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons"

function navbar() {
    return (
        <div className="m-5">
            <div className="inline-block">
                <Link to="/" as={Link} className="none-decoration inline">
                    <h4 className="c-grey"> Image Sharing App</h4>
                </Link>
            </div>
                <NavDropdown className="c-grey float-right" title={ <FontAwesomeIcon icon={faUser} className="mr-4 c-grey" /> } >
                    <Dropdown.Item className="c-grey" to="/favorite" as={Link}>
                    <FontAwesomeIcon icon={faHeart} className="ml-4 mr-4" />
                        Favorite
                    </Dropdown.Item>
                </NavDropdown>
        </div>
    )
}

export default navbar
