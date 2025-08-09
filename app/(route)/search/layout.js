import React from 'react'
import CategoryList from './_components/CategoryList'

function layout({ children, params }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Category list */}
            <div className="order-1 md:order-none block col-span-1 md:col-span-1">
                <CategoryList />
            </div>

            {/* Main content */}
            <div className="order-2 col-span-1 md:col-span-3">
                {children}
            </div>
        </div>
    )
}

export default layout
