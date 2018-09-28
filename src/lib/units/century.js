import { addFormatToken } from '../format/format';
import { addUnitAlias } from './aliases';
import { addUnitPriority } from './priorities';
import { addRegexToken, match1 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { YEAR } from './constants';
import toInt from '../utils/to-int';

// FORMATTING

addFormatToken('c', 0, 'Qo', 'century');

// ALIASES

addUnitAlias('century', 'c');

// PRIORITY

addUnitPriority('century', 0);

// PARSING

addRegexToken('c', match1);
addParseToken('c', function (input, array) {
    array[YEAR] = toInt(toString(input)[0] + toString(input)[1]) + 1;
});

// MOMENTS

export function getSetCentury (input) {
    return input == null ? Math.ceil((toInt(toString(this.year())[0] + toString(this.year())[1]) + 1)) : Math.ceil((toInt(toString(this.year())[0] + toString(this.year())[1]) + 1));
}
