import React from 'react'
import { useGetproductByIdQuery } from '../app/service/dummyData'

const SpecificProduct = () => {
    const {data, isError, isLoading} = useGetproductByIdQuery(2)

    if(isError) {
        return <h1>Error Occured!!</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>{data?.brand}</h1>
        <h1>{data?.category}</h1>
        <h1>{data?.description}</h1>
    </div>
  )
}

export default SpecificProduct