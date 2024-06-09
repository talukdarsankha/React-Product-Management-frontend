import axios from "axios";

const API_URl= "http://localhost:8080"

class ProductService {

    saveProduct(product){
        return axios.post(API_URl+"/saveProduct",product);
    }

    getAllProduct(){
        return axios.get(API_URl+"/");
    }

    getProductById(id){
        return axios.get(API_URl+"/"+id);
    }

    deleteProduct(id){
return axios.delete(API_URl+"/deleteProduct/"+id);
    }

    editProduct(product){
        return axios.put(API_URl+"/editProduct/"+product.id,product)
    }

}

export default new ProductService;