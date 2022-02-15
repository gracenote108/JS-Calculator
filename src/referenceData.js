const numbers = {
    'zero': 0,
    'one':  1,
    'two':  2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven':7,
    'eight':8,
    'nine':9,
}

const mathSymbols = {
    'plus':'+',
    'minus':'-',
    'multiply':'*',
    'divide':'/',
}

const parenSyms = {
    'lparen': {name: 'lparen', sym: '('},
    'rparen': {name: 'rparen', sym: ')'},
}

const displayCntrls = {
    'backspace':'CE',
    'clear':'C',
    'equal':'=',
}

const symType = {
    'initial':'INIT',
    'number': 'NUMBER',
    'mathSymbol':'MATHSYMBOL',
    'displayCntrl':'DISPLAYCNTRL',
    'lparen': 'LPAREN',
    'rparen':'RPAREN'
}

export {
    numbers,
    mathSymbols,
    displayCntrls,
    symType,
    parenSyms
}