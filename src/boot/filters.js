


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

const UNITS = ['B', 'kB', 'Mb', 'Gb'];



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


export const sizeHuman = size => {
  // Ref : https://github.com/sindresorhus/pretty-bytes
  size = Number.parseFloat(size)
  if (!Number.isFinite(size)) 
		throw new TypeError(`Expected a finite number, got ${typeof size}: ${size}`)

	const neg = size < 0;

	if (neg) 
		size = -size;
	
	if (size < 1) 
		return (neg ? '-' : '') + size + ' B';
	
	const exponent = Math.min(Math.floor(Math.log10(size) / 3), UNITS.length - 1);
	const sizeStr = Number((size / Math.pow(1000, exponent)).toPrecision(3));
	const unit = UNITS[exponent];

	return (neg ? '-' : '') + sizeStr + ' ' + unit;
}