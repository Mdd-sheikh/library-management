import React from 'react'
import './Books.css'
import { classic_books, modernbook } from '../../../../assets/Assests'


const Books = () => {


    const bookhandler = (id) => {
        const res = classic_books.filter((_, index) => index === id)
        if (res) {
            return
            setTimeout(() => {

            }, 3000)
        }
    }
    return (
        <div className='book-nav'>
            <div className="books-container">
                <div className="books">
                    <div className="one-container">
                        <h1>Classical Book</h1>
                        <div className="section-one-book">

                            {classic_books.map((item, index) => {
                                return (
                                    <>

                                        <div className="classic-books" key={index}>
                                            <div className="image">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="read-btn">
                                                <button>read</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="container-two">
                        <h1>Modern Book</h1>
                        <div className="section-two-book">
                            {modernbook.map((item, index) => {
                                return (
                                    <>
                                        <div className="classic-books" key={index}>
                                            <div className="image">
                                                <img src={item.image} alt="" />
                                            </div>

                                            <div className="read-btn">
                                                <button>Read</button>
                                            </div>

                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                    <div className="section-three-book">
                        <div className="section-three-book-container-one"></div>
                        <div className="section-three-book-container-two"></div>
                        <div className="section-three-book-container-three"></div>
                        <div className="section-three-book-container-four"></div>
                    </div>
                    <div className="section-four-book">
                        <div className="section-four-book-container-one"></div>
                        <div className="section-four-book-container-two"></div>
                        <div className="section-four-book-container-three"></div>
                        <div className="section-four-book-container-four"></div>
                    </div>
                    <div className="section-five-book">
                        <div className="section-five-book-container-one"></div>
                        <div className="section-five-book-container-two"></div>
                        <div className="section-five-book-container-three"></div>
                        <div className="section-five-book-container-four"></div>
                    </div>
                    <div className="section-six-book">
                        <div className="section-six-book-container-one"></div>
                        <div className="section-six-book-container-two"></div>
                        <div className="section-six-book-container-three"></div>
                        <div className="section-six-book-container-four"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books