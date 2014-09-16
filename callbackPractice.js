/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(arr, callback) {
  callback(arr[0]);
}
first(names, function(firstName){
  console.log('The first name in names is ', firstName);
});

var last = function(arr, callback) {
  callback(arr[arr.length-1]);
}
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

var contains = function(arr, item, callback) {
  callback(arr.indexOf(item) > -1);
}

contains(names, 'Colt', function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});

var uniq = function (arr, callback){
  var uniqArr = [];
  for(var i=0; i < arr.length; i++) {
    if(arr.indexOf(arr[i], i+1) === -1) {
      uniqArr.push(arr[i]);
    }
  }
  callback(uniqArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

var each = function(arr, callback) {
  for (var i=0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function(list, id, callback) {
  for(var i=0; i < list.length; i++) {
    var user = list[i];
    if (user['id'] === id) {
      callback(user);
      break;
    }
  }
}
getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});







