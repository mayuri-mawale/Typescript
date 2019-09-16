var map = new Map();
map.set('1', 'abhishek');
map.set(1, 'www.javatpoint.com');
map.set(true, 'bool1');
map.set('2', 'ajay');
console.log("Value1= " + map.get(1));
console.log("Value2= " + map.get('1'));
console.log("Key is Present= " + map.has(3));
console.log("Size= " + map.size);
console.log("Delete value= " + map["delete"](1));
console.log("New Size= " + map.size);
console.log("\n Keys in maps are...");
for (var _i = 0, _a = map.keys(); _i < _a.length; _i++) {
    var k = _a[_i];
    console.log("keys=" + k);
}
console.log("\n values in maps are...");
for (var _b = 0, _c = map.values(); _b < _c.length; _b++) {
    var v = _c[_b];
    console.log("Values=" + v);
}
