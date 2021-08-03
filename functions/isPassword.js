

export const isPassword = (str) => {
    const regexpBigLetter = /[A-Z]/
    const regexpSmallLetter = /[a-z]/
    const regexpNumber = /[0-9]/
    const regexp = /^[A-Za-z0-9]{8,}$/


    if(str.split(' ').length > 1){
        return false
    } else {
        if(regexpBigLetter.test(str) && regexpSmallLetter.test(str) && regexpNumber.test(str) && regexp.test(str)){
            return true
        } else {
            return false
        }
    }


}


