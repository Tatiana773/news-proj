import React from 'react'
import CategoryItem from "../Categories/CategoryItem"

const CategoriesList = ({items}) => {

    return (
        <div className="news-list">
            <div >
                <h2>Категорії:</h2>
                {
                    items.map(item =>
                        <CategoryItem
                            key={item.id}
                            item={item}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default CategoriesList