import React, { Fragment } from 'react'

export default function Item(props) {
    return (
        <Fragment>
            <div className="item">
                <img className='item__img' src={props.src} alt="" />
                <div className="item__title">
                    <p>{props.title}</p>
                    <p><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg></p>
                </div>
            </div>
        </Fragment>
    )
}
