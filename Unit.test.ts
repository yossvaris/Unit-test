import { merge } from "./Unit_test"

describe('merge',() => {
    test('add collection1 and collection2', () =>{
        expect(merge([1,7,10],[0,4,5])).toEqual([0,1,4,5,7,10])
    })
})
