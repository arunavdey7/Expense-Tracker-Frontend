import React from "react";
const Transaction = ({
    Amount,
    Type
}) =>
{
    return(
        <>
            <h3>Rs.{Amount} Type: {Type}</h3>
        </>
    )
}
export default Transaction;