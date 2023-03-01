import React from 'react'
import Menu from './component/Menu'
import Item from './component/Item'
export default function Section() {
    return (
        <div className='section'>
            <div className="container">
                <Menu></Menu>
                <div className="list__item">
                    <Item src="https://tekup.vn/wp-content/uploads/2022/09/image-1.png" title="TOI 3D Customize E-commerce"></Item>
                    <Item src="https://tekup.vn/wp-content/uploads/2022/09/image.png" title="E-learning – Internal training platform"></Item>
                    <Item src="https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png" title="Summer 21 Cosmetic E-commerce Platform"></Item>
                    <Item src="https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png" title="Kiva – Ambition to digital transformation in the brokerage assiduity"></Item>
                    <Item src="https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png" title="Boxgo – Professional Warehouse Management"></Item>
                </div>
            </div>
        </div>
    )
}
