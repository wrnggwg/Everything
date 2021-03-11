const user = {
    name: "John",
    years: 30
  };

const {name,years:age,isAdmin = false}=user;

alert('name:'+name);
alert('age:'+age);
alert('isAdmin:'+isAdmin);