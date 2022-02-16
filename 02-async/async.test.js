const fetchData = require('./async')

// it("should return correct todo" , ()=>{
//     const todo = fetchData("6202d1552911c8db8d628464")
//     expect(todo.username).toBe("5sqcsdc")
// })


it("should return correct todo" , ()=>{
    fetchData("6202d1552911c8db8d628464").then((res)=>{
        expect(res.data.message.username).toBe("5sqcsdc")
    })
})


it("should return correct todo" ,async ()=>{
    const todo = await fetchData("6202d1552911c8db8d628464")
    expect(todo.data.message.username).toBe("5sqcsdc")
})