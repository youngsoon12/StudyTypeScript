// const logMessage = (value:string|number) =>{
//   console.log(value);
// }

var seho : string | boolean | number;
function logMessage(value: string | number) {
  if(typeof value === 'number'){
    
  }
  if(typeof value === 'string'){
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name : string;
  skill : string;
}

interface Person{
  name: string;
  age: number;
}


function askSomeone(someone:Developer|Person ){
  // someone.name;
  // someone.skill;  유니온 연산자를 사용하더라도 공통된것에만 가능하다.
  // someone.age;
}

askSomeone({name: '디벨로퍼', skill:'웹 개발'});
askSomeone({name:'캡틴', age:100});

// function askSomeone(someone:Developer & Person ){
//   someone.name;
//   someone.skill;  
//   someone.age;
// }