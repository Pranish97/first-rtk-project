import { useDeleteProductMutation } from "../app/service/dummyData"

const DeleteProduct = ({productId}) => {
    const [deleteProduct, {data, isError, isLoading}] = useDeleteProductMutation();

    if(isError){
        return <h1>Error Occured!!</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    const handleDeleteProduct = async() =>{
        try {
            await deleteProduct(productId)
        } catch (error) {
            console.log("Error Deleting Product:", error);
        }
    }

  return (
    <div>
        <h1>{data?.title ? `${data.title} successfully deleted`: ""}</h1>
        <button onClick={handleDeleteProduct} disabled={isLoading}>
            Delete Product
        </button>
    </div>
  )
}

export default DeleteProduct