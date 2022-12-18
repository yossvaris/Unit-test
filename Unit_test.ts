export function merge(collection_1: number[],collection_2: number[]): number[]{
    let len: number = 0
    let merge_arr: number[] = []

    // check length
    if(collection_1.length <= collection_2.length){
        len = collection_1.length
    }
    else{
        len = collection_2.length
    }
    
    // loop for implement
    let ind_col_1: number = 0
    let ind_col_2: number = 0
    while(true){
        if(ind_col_1 === collection_1.length && ind_col_2 === collection_2.length){
            return merge_arr
        }
        else if(ind_col_1 === collection_1.length){
            merge_arr.push(collection_2[ind_col_2])
            ind_col_2++
        }
        else if(ind_col_2 === collection_2.length){
            merge_arr.push(collection_1[ind_col_1])
            ind_col_1++
        }
        else if(collection_1[ind_col_1] <= collection_2[ind_col_2]){
            merge_arr.push(collection_1[ind_col_1])
            ind_col_1++
        }
        else{
            merge_arr.push(collection_2[ind_col_2])
            ind_col_2++
        }
    }
}
