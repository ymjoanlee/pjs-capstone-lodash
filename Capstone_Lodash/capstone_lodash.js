const _ = {
  clamp(num, lowLimit, upperLimit) {
    if (num < lowLimit) {
      return lowLimit;
    } else if (num > upperLimit) {
      return upperLimit;
    } else {
      return num;
    }
  },

  inRange(num, start, end) {
    if (end == undefined) {
      end = start;
      start = 0;
    } else if (start > end) {
      start = [end, end = start][0];
    }

    if (start < num && num < end) {
      return true;
    } else {
      return false;
    }
  },

  words(str) {
    let strSplit = str.split(' ');
    return strSplit;
  },

  pad(str, lgth) {
    let totalPadLength = lgth - str.length;
    if (totalPadLength < 0) {
       return str;
     } else {
       return ' '.repeat(Math.floor(totalPadLength/2)) + str + ' '.repeat(Math.ceil(totalPadLength/2));
     }
  },

  has(obj, key) {
    if (obj[key] == undefined) {
      return false;
    } else {
      return true;
    }
  },

  invert(obj) {
    for (let key in obj) {
      obj[obj[key]] = key;
      delete obj[key];
      return obj;
    }
  },

 findKey(obj, predicate) {
   for (let key in obj) {
     val = obj[key]
     if (predicate(val)) {
       return key;
     }
   }
   return undefined;
 },

 drop(array, num) {
   if (num == undefined) {
     return array.slice(1);
   } else {
     return array.slice(num);
   }
 },

 dropWhile(array, predicate) {
   let dropIndex =
   array.findIndex(value => predicate(value, array.indexOf(value), array) == false);
   return array.slice(dropIndex);
 },

 chunk(array, size) {
   let newArray = [];
   if (size == undefined) {
     return [array];
   } else {
     let arrayLength = array.length;
     let startIndex = 0;
     let endIndex = size;
     do {
       newArray.push(array.slice(startIndex,endIndex))
       startIndex += size;
       endIndex += size;
     } while (startIndex < arrayLength);
     return newArray;
   }
 }
}

// Do not write or modify code below this line.
module.exports = _;
