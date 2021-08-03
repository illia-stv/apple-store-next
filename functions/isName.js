

export const isName = (str) => {
    const regexp = /^[A-Za-z0-9]{5,}$/

    if(str.split(' ').length > 1){
        return false
    } else {
        if(regexp.test(str)){
            return true
        } else {
            return false
        }
    }


}


