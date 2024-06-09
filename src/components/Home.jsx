import React, { useEffect, useState } from 'react'
import product_service from '../service/product_service';
import { Link } from 'react-router-dom';


function Home() {
  const[msg,setMsg]=useState("");
  const [productList,setProductList] = useState([]);
  useEffect(()=> init(),[]);

  const init = ()=>{
    product_service.getAllProduct().then((res)=>{
      console.log(res.data);
      setProductList(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const deleteProduct = (id)=>{
product_service.deleteProduct(id)
.then((res)=>{
  setMsg("Deleted Successfully......");
  init();
})
.catch((error)=>{
  console.log(error);
  console.log("error occurred")
})


  }

  return (
    <div>
      <h1>Home Page</h1>
      {msg && <p className='text-center text-danger'>{msg}</p>}

      <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl no</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {productList.map((p,num)=>(

    <tr>
      <th scope="row">{num+1}</th>
      <td>{p.productName}</td>
      <td>{p.description}</td>
      <td>{p.price}</td>
      <td>{p.status}</td>
      <td>
        <Link className="btn btn-sm btn-primary" to={'editProduct/'+p.id}>Edit</Link>
        <button className="btn btn-sm btn-primary" onClick={()=>deleteProduct(p.id)} >Delete</button>
      </td>
    </tr>
         
        ))}
  </tbody>
</table>

    </div>
  )
}

export default Home
