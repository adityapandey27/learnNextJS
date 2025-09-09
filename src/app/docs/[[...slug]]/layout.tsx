import React from "react";

export default function ProductDetail({children,}:{children:React.ReactNode}){
    return(
        <>{children}
        <h2> Inside the product id layout component</h2>
        </>
    )
}