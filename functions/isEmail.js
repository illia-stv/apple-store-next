

export const isEmail = (str) => {
    const regexp = /^[a-zA-Z0-9\\.]+@[a-zA-Z0-9\\.]+\.com$/

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


