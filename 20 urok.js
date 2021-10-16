const options={
   name: 'andrey',
   age: 25,
   count: 'armenia',
   city: 'Erevan',
   phone: 2547856961,
   email: {
      user: 'Audo',
      login: 'parol',
   }
};

console.log(Object.keys(options).length); 

const {user,login}= options.email;
console.log(login);
          //Object.keys()отображает ключи объекта в массиве,а length количество элементов 