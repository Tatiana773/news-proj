
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { selectNewsItems } from '../store/news/selectors'
import { selectCategories } from '../store/categories/selectors'
import moment from 'moment'


const NewsPage = () => {

    const [newsItem, setNewsItem] = useState({})
    const [createdTime, setCreatedTime] = useState("")
    const [category, setCategory] = useState({})

    const news = useSelector(selectNewsItems)
    const categories = useSelector(selectCategories)

    const {newsId} = useParams()

    useEffect(() => {
        if(!newsId)return
        const currentNews = news.find((i) => i.id === Number(newsId))
        setNewsItem(currentNews)
        setCreatedTime(moment(newsItem.timestamp).format("YYYY-MM-DD hh:mm"))
        const currentCategory = categories.find((i) => i.id === Number(currentNews.categoryId))
        setCategory(currentCategory)
    }, [news, newsId, setNewsItem, categories, setCategory, newsItem])

    return(

        <div>
            <h2>NewsPage</h2>
            <p>{createdTime}</p>
            <h1>{newsItem.title}</h1>
            <p>{newsItem.body}</p>
            <h3>{category.title}</h3>
        </div>
    )
}
export default NewsPage
