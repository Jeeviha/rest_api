import React, { useState } from 'react'

const Product = () => {

        const Category=[
            {id:1,name:"Vegetables"},
            {id:2,name:"Fruits"},
            {id:3,name:"Spices"},
            // {"id":4,"name":"Chips"},
            // {"id":5,"name":"Biscuits"}
        ];
        const Products=[
            {id:1,cat_id:1,name:"Tomato"},
            {id:2,cat_id:1,name:"Potato"},
            {id:3,cat_id:1,name:"Raddish"},
            {id:4,cat_id:2,name:"Apple"},
            {id:5,cat_id:2,name:"Mango"},
            {id:6,cat_id:2,name:"Pineapple"},
            {id:7,cat_id:3,name:"Chilli"},
            {id:8,cat_id:3,name:"Cloves"},
            {id:9,cat_id:3,name:"Card"}
        ];
        const [SelectedCategory,SetSelectedCategory]=useState("")
        // const [SelectedProduct,SetSelectedProduct]=useState("")

        const CategoryChange=(e)=>{
            console.log("CategoryChange",e.target.value);
                SetSelectedCategory(e.target.value)
            }
        let FilteredProducts=Products.filter(i=>
                    i.cat_id==SelectedCategory
                );
  return (
    <div>
      {/* <form method="post"> */}
        <label>Category:</label>
        <select name="category" id="category" onChange={CategoryChange}>
            <option value="">Select a Category</option>
            {Category.map(i=>
            
                <option value={i.id}>{i.name}</option>
            )
            }
        </select>
        <label>Product:</label>
        <select name="product" id="product">
        <option value="">Products</option>
        {
            FilteredProducts.map(i=>
                <option value={i.name}>{i.name}</option>   
                )
        }
        </select>
    </div>
  )
}

export default Product
