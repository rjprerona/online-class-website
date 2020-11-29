import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Course.css';

const Course = (props) => {
    const {about, picture, name, price} = props.course
    return (
        <div className='course'>
            <img src={picture} alt=""/>
             <h3>{about}</h3>
               <p style={{color: 'gray'}}><small>{name}</small></p>
                 <h4>${price}</h4>
                 <button className="btn-style" onClick={() => props.handleAddCourse(props.course)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
        </div>
    );
};

export default Course;