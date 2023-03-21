import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories(categories => [...categories, newCategory]);

    }


    return (
        <>
            <div className="container">

                <h1 className="text-center" >GifExpertApp</h1>


                <AddCategory onNewCategory={onAddCategory} />
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </div>
        </>
    )
}
