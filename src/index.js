module.exports = function toReadable (number) {

    let result = '';

    if (number == 0) {
        return result = 'zero'
    }

    if (number >= 100) {
        if (number >= 100 && number < 200) {
            result = 'one hundred';
        }
        if (number >= 200 && number < 300) {
            result = 'two hundred';
        }
        if (number >= 300 && number < 400) {
            result = 'three hundred';
        }
        if (number >= 400 && number < 500) {
            result = 'four hundred';
        }
        if (number >= 500 && number < 600) {
            result = 'five hundred';
        }
        if (number >= 600 && number < 700) {
            result = 'six hundred';
        }
        if (number >= 700 && number < 800) {
            result = 'seven hundred';
        }
        if (number >= 800 && number < 900) {
            result = 'eight hundred';
        }
        if (number >= 900 && number < 1000) {
            result = 'nine hundred';
        }

        if (number % 100 >= 20) {
            if (number % 100 >= 20 && number % 100 < 30) {
                result = `${result} twenty`;
            }
            if (number % 100 >= 30 && number % 100 < 40) {
                result = `${result} thirty`;
            }
            if (number % 100 >= 40 && number % 100 < 50) {
                result = `${result} forty`;
            }
            if (number % 100 >= 50 && number % 100 < 60) {
                result = `${result} fifty`;
            }
            if (number % 100 >= 60 && number % 100 < 70) {
                result = `${result} sixty`;
            }
            if (number % 100 >= 70 && number % 100 < 80) {
                result = `${result} seventy`;
            }
            if (number % 100 >= 80 && number % 100 < 90) {
                result = `${result} eighty`;
            }
            if (number % 100 >= 90 && number % 100 < 100) {
                result = `${result} ninety`;
            }
        }

        if (number % 100 >= 10 && number % 100 < 20) {
            if (number % 100 == 10) {
                result = `${result} ten`;
            }
            if (number % 10 == 1) {
                result = `${result} eleven`;
            }
            if (number % 10 == 2) {
                result = `${result} twelve`;
            }
            if (number % 10 == 3) {
                result = `${result} thirteen`;
            }
            if (number % 10 == 4) {
                result = `${result} fourteen`;
            }
            if (number % 10 == 5) {
                result = `${result} fifteen`;
            }
            if (number % 10 == 6) {
                result = `${result} sixteen`;
            }
            if (number % 10 == 7) {
                result = `${result} seventeen`;
            }
            if (number % 10 == 8) {
                result = `${result} eighteen`;
            }
            if (number % 10 == 9) {
                result = `${result} nineteen`;
            }
        }

        if (number % 10 > 0 && number % 10 < 10 && (number % 100 < 10 || number % 100 >= 20) ) {
            if (number % 10 == 1) {
                result = `${result} one`;
            }
            if (number % 10 == 2) {
                result = `${result} two`;
            }
            if (number % 10 == 3) {
                result = `${result} three`;
            }
            if (number % 10 == 4) {
                result = `${result} four`;
            }
            if (number % 10 == 5) {
                result = `${result} five`;
            }
            if (number % 10 == 6) {
                result = `${result} six`;
            }
            if (number % 10 == 7) {
                result = `${result} seven`;
            }
            if (number % 10 == 8) {
                result = `${result} eight`;
            }
            if (number % 10 == 9) {
                result = `${result} nine`;
            }
        }
    } else if (number > 10 && number < 20) {
        if (number % 10 == 1) {
            result = 'eleven';
        }
        if (number % 10 == 2) {
            result = 'twelve';
        }
        if (number % 10 == 3) {
            result = 'thirteen';
        }
        if (number % 10 == 4) {
            result = 'fourteen';
        }
        if (number % 10 == 5) {
            result = 'fifteen';
        }
        if (number % 10 == 6) {
            result = 'sixteen';
        }
        if (number % 10 == 7) {
            result = 'seventeen';
        }
        if (number % 10 == 8) {
            result = 'eighteen';
        }
        if (number % 10 == 9) {
            result = 'nineteen';
        }
    }

    if (number >= 20 && number < 100) {
        if (number / 10 >= 2 && number / 10 < 3) {
            result = 'twenty';
        }
        if (number / 10 >= 3 && number / 10 < 4) {
            result = 'thirty';
        }
        if (number / 10 >= 4 && number / 10 < 5) {
            result = 'forty';
        }
        if (number / 10 >= 5 && number / 10 < 6) {
            result = 'fifty';
        }
        if (number / 10 >= 6 && number / 10 < 7) {
            result = 'sixty';
        }
        if (number / 10 >= 7 && number / 10 < 8) {
            result = 'seventy';
        }
        if (number / 10 >= 8 && number / 10 < 9) {
            result = 'eighty';
        }
        if (number / 10 >= 9 && number / 10 < 10) {
            result = 'ninety';
        }

        if (number % 10 > 0) {
            if (number %10 == 1) {
                result = `${result} one`;
            }
            if (number %10 == 2) {
                result = `${result} two`;
            }
            if (number %10 == 3) {
                result = `${result} three`;
            }
            if (number %10 == 4) {
                result = `${result} four`;
            }
            if (number %10 == 5) {
                result = `${result} five`;
            }
            if (number %10 == 6) {
                result = `${result} six`;
            }
            if (number %10 == 7) {
                result = `${result} seven`;
            }
            if (number %10 == 8) {
                result = `${result} eight`;
            }
            if (number %10 == 9) {
                result = `${result} nine`;
            }
            if (number %10 == 10) {
                result = `${result} ten`;
            }
        }
    } else if (number > 0 && number <= 10) {
        if (number == 1) {
            result = 'one';
        }
        if (number == 2) {
            result = 'two';
        }
        if (number == 3) {
            result = 'three';
        }
        if (number == 4) {
            result = 'four';
        }
        if (number == 5) {
            result = 'five';
        }
        if (number == 6) {
            result = 'six';
        }
        if (number == 7) {
            result = 'seven';
        }
        if (number == 8) {
            result = 'eight';
        }
        if (number == 9) {
            result = 'nine';
        }
        if (number == 10) {
            result = 'ten';
        }
    }

    if (number < 0) {
        result = `minus ${result}`;
    }
  return result;
}
