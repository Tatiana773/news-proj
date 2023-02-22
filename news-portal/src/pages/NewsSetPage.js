import React from 'react'
import {Grid} from '@mui/material'
import NewsScope from '../components/NewsSet/NewsScope'
import CategoriesList from '../components/Categories/CategoriesList'
import { useSelector } from 'react-redux'
import { selectNewsItems } from '../store/news/selectors'
import { selectCategories } from '../store/categories/selectors'

const NewsSetPage = () =>{

    const news = useSelector(selectNewsItems);
    const categories = useSelector(selectCategories);

    return(
        <Grid
            lg={10}
            md={9}
            sm={8}
            xs={12}
            item
        >
            <h1>News Set</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, deleniti dicta dignissimos
                distinctio dolor ducimus eaque itaque officia perspiciatis quibusdam quidem quisquam sequi suscipit?
                Error id illo incidunt natus ullam.</p>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <div>
                    {categories.map(item =>
                    <NewsScope
                        key={item.id}
                        title={item.title}
                        news={news}
                        category = {item.id}
                    />)}
                </div>
                <div>
                    <CategoriesList
                        items={categories}
                    />
                </div>
            </Grid>

        </Grid>

    )
}
export default NewsSetPage