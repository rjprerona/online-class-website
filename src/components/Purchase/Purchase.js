import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Purchase.css'

const Purchase = () => {
    const [course, setCourse] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        console.log('Course Added', course);
        const newCart = [...cart, course];
        setCart(newCart);

    }

    useEffect (() =>{
        setCourse(data);
    }, [])

    return (
        <div className="purchase-container">
            <div className="course-container">

                 {
                    course.map(course => <Course
                        handleAddCourse={handleAddCourse}
                         course = {course}>

                         </Course>)
                  }

            </div>
            
              <div className="cart-container">
                  <Cart cart={cart}></Cart>
              </div>

        </div>
    );
};

export default Purchase;