import bankDetailsReducer from './bankDetails/bankDetailsSlice'
import loanReducer from './loan/loanSlice'
import personReducer from './person/personSlice'

export * from './bankDetails/bankDetailsSlice'
export * from './person/personSlice'
export * from './loan/loanSlice'

export {bankDetailsReducer, loanReducer, personReducer}