const axios = require('axios')


const fetchData = async (id) => {
    const result = await axios.get(`http://localhost:3000/api/admin/getManager/${id}`)

    console.log(result.data)
    return result;
}

const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }
}

it("mock callback", () => {
    const mockCallback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    // [call1, call2]
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(42);
    expect(mockCallback.mock.results[1].value).toBe(43);

})

it("mock return", () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("Hello");

    const results = mock();
    const results2 = mock();
    const results3 = mock();

    expect(results).toBe(true)
    expect(results2).toBe(false)
    expect(results3).toBe("Hello")
})

it("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            msg: "Hello world!"
        }
    })
    const results = await fetchData(1)
    expect(results.data.msg).toBe("Hello world!")
})