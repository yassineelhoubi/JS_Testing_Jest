const sum = require("./sum")

// it("should add 1 + 2 to equal 3", () => {
//     const result = sum(1, 2)
//     expect(result).toBe(3)
// })

describe("", () => {
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })
    /* {} !  */
    // it("object assignment", ()=>{
    //     const obj = {};
    //     expect(obj).toBe({})
    // })
    /*  */
    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({});
    })
})

describe("truthy or falsy", () => {
    it("null", () => {
        const n = null
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined()
    })
})

describe("numbers", () => {
    it("tow plus tow", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(4)
        expect(value).toBeLessThan(5)
        expect(value).toBeLessThanOrEqual(4)
    })
    it("adding floats", () => {
        const value = 0.1 + 0.3;
        expect(value).toBeCloseTo(0.39999)
    })
})

describe("string", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

describe("arrays", () => {
    const shoppingList = [
        "diapers", "Kleenex", "trash bags", "paper towels", "milk"
    ]
    expect(shoppingList).toContain('milk')
})
function compileAndroidCode() {
    throw new Error("you are using wrong JDK")
}

describe("exceptions", () => {
    it("compiling android goes as expected", ()=>{
        expect(()=> compileAndroidCode()).toThrow("you are using wrong JDK")
    })
})