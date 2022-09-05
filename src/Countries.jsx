import React from 'react'

function Countries() {
    const [countries,setcountries] = React.useState([])

    function getCountries(){
        fetch('https://restcountries.com/v2/all')
        .then((res)=>res.json())
        .then(data=>{setcountries(data)})
    }
  return (
    <div className='betterview'>
        <h1>Countries</h1>
        <button onClick={getCountries}>GetCountries</button>

        <ul style={{display:'flex','flexWrap':'wrap'}}>
            {
                countries && countries.map((c)=>{
                    return (<li style={{width:'100px'}} data-testid="country">
                                {c.name}
                            </li>)
                })
            }
        </ul>
    </div>
  )
}

export default Countries