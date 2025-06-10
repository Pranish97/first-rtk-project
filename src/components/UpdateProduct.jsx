import { useUpdateProductMutation } from "../app/service/dummyData"

const UpdateProduct = ({productId}) => {
    const [updateProduct, {data, isError, isLoading}] = useUpdateProductMutation();

    if(isError){ 
        return <h1>Error!!</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    const handleUpdateProduct = async() =>{
        try {
            const updateProductData = {
                title: "Title Updated",
            }

            await updateProduct({
                id: productId,
                updatedProduct: updateProductData,
            })
        } catch (error) {
            console.log("Error updating product:", error)
        }
    }

  return (
    <div>
        <h1>{data?.title}</h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>
            Update Product
        </button>
    </div>
  )
}

export default UpdateProduct