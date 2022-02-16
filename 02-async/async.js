const axios = require('axios')


const fetchData = async  (id)=>{
    const result = await axios.get(`http://localhost:3000/api/admin/getManager/${id}`)
    
    // console.log(result.data)
    return result;
}
// fetchData("6202d1552911c8db8d628464")
module.exports = fetchData

