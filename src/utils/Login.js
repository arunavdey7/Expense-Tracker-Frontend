export const login = async (data) => {
    var requestData = data
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(requestData),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://54.196.230.223:8080/login", requestOptions)
    const {
        success
    } = await response.json()
    if(success)
    {
        return true
    }
    return false
}