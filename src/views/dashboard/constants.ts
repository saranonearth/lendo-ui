enum Options {
    SUPPLY = 'supply',
    BORROW = 'borrow'
}
const SYSTEM_CARDS = [
    {
        icon: 'fas fa-arrow-circle-down fa-2x',
        label: 'Total Supply',
        value: '$12.92b'
    },
    {
        icon: 'fas fa-arrow-circle-up fa-2x',
        label: 'Total Borrow',
        value: '$10.62b'   
    },
    {
        icon: 'fas fa-hand-holding-usd fa-2x',
        label: 'TVL',
        value: '$11.13b'
    }
] as Array<{icon: string, label: string, value: string}>

export {
    Options,
    SYSTEM_CARDS
}