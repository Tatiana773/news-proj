import React, {useMemo} from 'react'
import NewsItem from "../NewsSet/NewsItem"

const NewsScope = ({title, news, category}) => {

    const itemsToDisplay = useMemo(() =>{
       return news.filter((i) =>Number(i.categoryId) === category) 
    }, [news, category])
   
    return (
        <div className="news-list">
            <h2>{title}</h2>
            <div >
                {
                    itemsToDisplay.map(item =>
                        <NewsItem
                            key={item.id}
                            item={item}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default NewsScope
