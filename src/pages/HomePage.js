import React,{useEffect, useState} from "react";
import TransactionContainer from "../components/transactionContainer/TransactionContainer";
import { getMonthlyExpenditure, getMonthlyTransactions } from "../utils/Expenses";
import { login } from "../utils/Login";
import './styles.css'
const HomePage = () =>
{
    const [loginStatus, setLoginStatus] = useState(false);
    const [expenditure, setExpenditure] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [date, setDate] = useState('')
    const [data, setData] = useState({
        username:'',
        password:''
    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    
    useEffect(() => {
        async function fetchMyAPI() {
          var {
              success,
              total_expenditure
          } = await getMonthlyExpenditure(date.replace('/','-'))
          if(success)
            setExpenditure(total_expenditure)
        }
        async function fetchMyAPI2() {
            var {
                success,
                transactions
            } = await getMonthlyTransactions(date.replace('/','-'))
            if(success)
              setTransactions(transactions)
          }
        fetchMyAPI()
        fetchMyAPI2()
      }, [date])
    
    const handleDateChange = e => {
        setDate(e.target.value)
    }


    const handleLogin = async () =>
    {
        var status = await login(data)
        if(status)
            setLoginStatus(true)
    }
    console.info(transactions)
    return(
        <>
            <h1 id= "heading">Expense Tracker</h1>
            {
                loginStatus ?
                <div>
                    <label>Select a date</label>
                    <input type="date" onChange={handleDateChange}></input>
                    <br/>
                    <h3>Total Expenditure Rs.{expenditure}
                    </h3>
                    <br/>
                    <TransactionContainer txns = {transactions}/>
                </div>
                : 
                <div className="input_container">
                    <div>
                        <label>Username</label>
                        <input name='username' value={data.username || ''} onChange={handleChange} type="text" ></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input name='password' value={data.password || ''} onChange={handleChange} type="password"></input>
                    </div>
                    <div>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </div> 
            }
        </>
    )
}
export default HomePage;