import React, { useEffect, useState } from 'react';
import product_service from '../service/product_service';
import { useNavigate, useParams } from 'react-router-dom';


function EditProduct() {
  
   const {id}= useParams();


   useEffect(()=>{
    product_service.getProductById(id).then((res)=>{
      setProduct(res.data)
    }).catch((error)=>{
      console.log(error);
    })
   },[])

    const navigate= useNavigate();

   console.log(id);
  const[msg ,setMsg]= useState("");
  
  const[product , setProduct] = useState({
    id:"",
    productName:"",
    description : "",
    price :"",
    status : ""
  });
  const handelChange = (e)=>{
    const value = e.target.value;
    setProduct({...product,[e.target.name]:value})
  }


  const productUpdate = (e)=>{
    e.preventDefault();
    // console.log(product);
    product_service.editProduct(product).then((res)=>{
      console.log("Product Updated Successfully.......");
      setMsg("Product Updated Successfully.......");
      setProduct({
        productName:"",
        description : "",
        price :"",
        status : ""
      })
      navigate("/")
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div>
      <h1>Edit Product </h1>
      <div>
     

      <div className="container mt-3">
        <div className="row">
        <div className="col-md-6  offset-md-3">
            <div className="card">
                <div className="card-headrer fs-3 text-center">
                Edit Product 
                { msg && <p className='text-center text-danger'>{msg}</p>}
                </div>
                <div className="card-body">
                    <form onSubmit={(e)=>productUpdate(e)}>
                        <div className="mb-3">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" name='productName' id='productName' className='form-control' onChange={(e)=>handelChange(e)} value={product.productName}/>
                        </div>

                      
                        <div className="mb-3">
                        <label htmlFor="description">Product Description</label>
                        <input type="text" name='description' id='description' className='form-control' onChange={(e)=>handelChange(e)} value={product.description}/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="price">Product Price</label>
                        <input type="text" name='price' id='price' className='form-control'
                        onChange={(e)=>handelChange(e)} value={product.price}/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="status">Product Status</label>
                        <input type="text" name='status' id='status' className='form-control'
                        onChange={(e)=>handelChange(e)} value={product.status}/>
                        </div>

                        <button className='btn btn-primary col-md-12 mb-3' type='submit'>Update</button>
                    </form>
                </div>
            </div>
        </div>
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditProduct
