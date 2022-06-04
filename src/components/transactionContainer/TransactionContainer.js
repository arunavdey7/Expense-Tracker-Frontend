import React from "react";
import Transaction from "../transaction/Transaction";
const TransactionContainer = (props) =>
{
    
    return(
        <>
            {
                props.txns.length === 0 ? <h2>No transactions</h2> :
                props.txns.map((transaction) => <Transaction {...transaction}/>)
            }
        </>
    )
}
export default TransactionContainer;