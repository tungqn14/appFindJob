const typeTime = {
  1: 'Thời vụ',
  2: 'Cộng tác viên',
  3: 'Bán thời gian',
  4: 'Toàn thời gian',
};
const typeRank = {
  1: 'Cộng tác viên',
  2: 'Nhân viên',
  3: 'Quản lý dự án',
  4: 'Giám đốc kỹ thuật',
  5: 'Giám đốc bộ phận IT',
  6: 'Khác',
};
const typeScale = {
  1: '0-100',
  2: '100-200',
  3: '200-300',
  4: '300-400',
  5: '400-500',
  6: '>500',
};
var arrTypeTime = [];
function getTypeTime($arr) {
  arrValue.forEach(function (item, index) {
    if (typeTime.hasOwnProperty(item)) {
      arrTypeTime.push(typeTime[item]);
    }
  });
  return arrTypeTime;
}
var arrNewRank = [];
function getTypeRank(arrValue) {
  arrValue.forEach(function (item, index) {
    if (typeRank.hasOwnProperty(item)) {
      arrNewRank.push(typeRank[item]);
    }
  });
  return arrNewRank;
}
function getScale(key) {
  if (typeScale.hasOwnProperty(key)) {
    return typeScale[key];
  } // true
  return 'Null';
}
function formatMoney(value) {
  let val = (value / 1).toFixed(0).replace(',', ',');
  let res = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return res;
}

export {getScale, getTypeRank, getTypeTime, formatMoney};
