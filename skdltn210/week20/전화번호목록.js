function solution(phone_book) {
  let map = new Map();
  for (let phone of phone_book) {
    map.set(phone, true);
  }
  for (let phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      let sub = phone.substring(0, i);
      if (map.has(sub)) return false;
    }
  }
  return true;
}
