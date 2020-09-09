import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifexpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);



    return (
        <>
            <h2>GifexpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr/>

            

            <ol>
                {
                    categories.map( category => (
                    <GifGrid 
                    category={category} 
                    key={category}
                    />
                    ))
                }
            </ol>
        </>
    )
}
