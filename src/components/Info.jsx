import React from 'react'

function Info({data}) {
    console.log(data);
  return (
    <div className='info'>
        <div>
            <p>IP ADDRESS</p>
            <h3>{data.ip}</h3>
        </div>
        <div>
            <p>LOCATION</p>
            <h3>{data.city}{data.code}</h3>
        </div>
        <div>
            <p>TIMEZONE</p>
            <h3>{data.timezone}</h3>
        </div>
        <div>
            <p>ISP</p>
            <h3>{data.org}</h3>
        </div>
    </div>
  )
}

export default Info