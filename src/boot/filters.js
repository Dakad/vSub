


// -------------------------------------------------------------------
// Dependencies

// Import

// Built-in

// Mine
const MIN = 60
const HOUR = MIN * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const MONTH = DAY * 30
const YEAR = DAY * 365




// -------------------------------------------------------------------
// Properties


const pluralize = (time, label) => `${time} ${label}${(time >= 1) ? 's' : ''}`



// -------------------------------------------------------------------
// Exports

export const timeAgo = dte => {
  if(!(dte instanceof Date)) dte = new Date(dte)
  const ago = (Date.now() - dte.getTime()) / 1000
  // ~~ Bitwise Operation : Make int positive
  if (ago < MIN) {
    return pluralize(~~(ago), ' sec')
  } else if (ago < HOUR) {
    return pluralize(~~(ago / MIN), ' min')
  } else if (ago < DAY) {
    return pluralize(~~(ago / HOUR), ' hour')
  } else if (ago < WEEK) {
    return pluralize(~~(ago / DAY), ' day')
  } else if (ago < MONTH) {
    return pluralize(~~(ago / WEEK), ' week')
  } else {
    return pluralize(~~(ago / YEAR), ' year')
  }
}