export const getMonthlyTransactions = async (date) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
    const response = await fetch(`/expenses?date=${date}`, requestOptions)
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