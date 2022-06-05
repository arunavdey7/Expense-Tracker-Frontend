export const getMonthlyExpenditure = async (date) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
    const response = await fetch(`http://ec2-54-196-230-223.compute-1.amazonaws.com:8000?date=${date}`, requestOptions)
    const {
        success,
        total_expenditure
    } = await response.json()
    if(success)
    {
        return {
            success,
            total_expenditure
        }
    }
    return {
        success
    }
}
export const getMonthlyTransactions = async (date) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
    const response = await fetch(`http://ec2-54-196-230-223.compute-1.amazonaws.com:8000/expenses?date=${date}`, requestOptions)
    const {
        success,
        transactions,
        total_expenditure
    } = await response.json()
    if(success)
    {
        return {
            success,
            transactions,
            total_expenditure
        }
    }
    return {
        success
    }
}