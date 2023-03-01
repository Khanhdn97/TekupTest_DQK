import React from 'react'
import { Fragment } from 'react'

export default function Menu() {
    return (
        <Fragment>
            <div className="main__menu">
                <a href="#" className='menu__child actived'>ALL</a>
                <a href="#" className='menu__child'>Manpower Supply</a>
                <a href="#" className='menu__child'>Mobile App / Website</a>
                <a href="#" className='menu__child'>UI/UX Design</a>
            </div>
        </Fragment>
    )
}
