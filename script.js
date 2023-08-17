"use srict";
/*let arrA = ["me", "you", "they"];

console.log(arrA);

let [f, , b] = arrA;
console.log([f, b]);

[b, , f] = [f, , b];
console.log([f, b]);

let jgs = [...arrA, "mom", "dad"];
console.log(jgs);
console.log(...jgs);

const disp = document.querySelector(".window");

const menu = {
  softFood: "rice and beans",
  seaFood: "shrimp",
  stew: function (stew1, ...stew2) {
    return `your ${this.softFood} with ${stew1} and ${stew2}  will be delivered soon 👍 `;
  },
};

const enter = [
  //prompt("pls enter stew type"),
  //prompt("enter another if any🙌"),
  // prompt("enter another if any🙌"),
];

console.log(menu.stew(...enter));

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let [players1, players2] = game.players;
//console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;

const [gk2, ...fieldPlayers2] = players2;

//console.log(gk, ...fieldPlayers);
//console.log(gk2, fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const finalPlayers = [...players1, "Coutinho", "perisic", "Thiago"];
console.log(finalPlayers);

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

const printGoal = function ([...a]) {
  console.log(`${a} scored ${a.length} goals  `);
};
printGoal(game.scored);

const k = team1 > team2 || "team1 is likely to win the game";
console.log(k);

const myData = {
  myName: ["Uzoechi", "Malachy", "Uchenna"],
  dateOfBirth: 1996,
  sex: " male",
  occupation: ["frontend developer", "Engineer", "blogger"],
  maritalStatus: "single",
  education: {
    creche: 0,
    nursery: 1999,
    primary: 2002,
    secondary: 2008,
    university: 2015,
    nysc: 2022,
  },
  cgp: {
    year1: 4.2,
    year2: 4.1,
    year3: 3.9,
    year4: 4.7,
    year5: 5.0,
    cgpa: 4.38,
  },
};
// object constructor function
function myFlight(flightName, flightTime) {
  this.name = flightName;
  this.time = flightTime;

  this.schedule = function () {
    console.log(
      `I took ${this.name},by ${this.time} and it was a nice experience`
    );
  };
}

const flight2 = new myFlight("boeing748", "1:50PM");
const flight = new myFlight("boeing738", "11:35AM");
const flight3 = new myFlight("boeing745", "5:35PM");
console.log(flight.name, flight.time);
flight.schedule();
flight2.schedule();
flight3.schedule();

const month = ["jan", "feb", "mar", "april", "may"];

const work = [...myData.occupation];
for (const [hey, hi] of work.entries()) {
  console.log(`${hey + 1} : ${hi}`);
}

for (const [c, d, ...e] of myData.myName.entries()) {
  //console.log(`${c}:* ${d}  `);
}

//default parameters

const sales = [];

const evaStores = function (item, numItem = 12, price = numItem * 6) {
  const salesAccount = {
    item,
    numItem,
    price,
  };
  sales.push(salesAccount);
  //console.log(salesAccount);
  //console.log(sales);
};

evaStores("coca-cola");

//passing values and reference
const breakfast = "sandwich"; //value

const mealRoaster = {
  mon: "beans",
  sun: "rice",
  frequency: 2,
}; //reference

const mealTable = function (morning, night) {
  night.sun = night.sun + "  and stew";

  const dogFood = morning + " and butter";
  console.log(dogFood);
};

mealTable(breakfast, mealRoaster);
console.log(mealRoaster);
console.log(breakfast);
//call back functions

const reader = function (bks) {
  return bks * 40;
};

const multi = function (bks) {
  return bks + 30;
};

const trans = function (bks, fun) {
  return console.log(`the returned value is :${fun(bks)}`);
};

trans(20, multi);
trans(20, reader);

const greet = (hey) => (me) => console.log(`${hey} ${me}`);
greet("happy sunday")("world!");

const tax = (value) => (rate) => console.log(value + value * rate);
tax(1000)(0.2);
//or
const addTax = function (value) {
  return function (rate) {
    console.log(value + value * rate);
  };
};

const addVAT = addTax(1000);
addVAT(0.2);

const poll = {
  question: "what is your fav programming language?",
  options: ["0:javaScript", "1: Python", "2:Rust", "3: C++"],
  //answer: new Array(4).fill(0), or
  answer: [0, 0, 0, 0],
  registerNewAnswer() {
    const answerWindow = Number(
      prompt(
        `${poll.question}\n${poll.options.join(
          "\n"
        )}\n(enter option number here👇)`
      )
    );
    console.log(answerWindow);
    typeof answerWindow === "number" &&
      answerWindow < this.answer.length &&
      this.answer[answerWindow]++;

    console.log(this.answer);
  },
};
//poll.registerNewAnswer();

document
  .querySelector(".vote")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector(".vote").addEventListener("click", function () {
    header.style.color = "black";
  });
})();*/

/*const bankStatement = [25000, -4000, -10000, 5000, 2000];

bankStatement.forEach(function (alert, index, arr) {
  if (alert > 0) {
    console.log(`${index + 1}: your account has been credited with ${alert}`);
  } else {
    console.log(
      `${index + 1}: ${Math.abs(alert)} has been debited from your account`
    );
  }
});

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];
//console.log(kateData.splice(-2));
//console.log(kateData.splice(0, 1));

//console.log(kateData);

const checkDogs = function (jd, kd) {
  const jdcorrected = [...jd];
  jdcorrected.splice(0, 1);
  jdcorrected.splice(2);
  console.log(jdcorrected);
  const dogs = jdcorrected.concat(kd);
  //console.log(dogs);
  dogs.forEach(function (d, i) {
    if (d < 3) {
      console.log(`dog number${i + 1} is a puppy of ${d}yr(s) old`);
    } else {
      console.log(`dog number${i + 1} is an adult of ${d}yrs old`);
    }
  });
};
checkDogs(juliaData, kateData);*/

const account1 = {
  owner: "Uzoechi Malachy Uchenna ",
  movements: [200, 450, -400, 3000, -650, -130, 70, 13000],
  moveDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2023-01-08T09:15:04.904Z",
    "2023-04-11T10:17:24.185Z",
    "2023-07-06T14:11:59.604Z",
    "2023-08-15T17:01:17.194Z",
    "2023-08-15T23:36:17.929Z",
    "2023-08-16T10:51:36.790Z",
  ],

  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Uzoechi Loveth Ifunanya",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  moveDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2023-01-08T09:15:04.904Z",
    "2023-04-11T10:17:24.185Z",
    "2023-07-06T14:11:59.604Z",
    "2023-08-15T17:01:17.194Z",
    "2023-08-16T23:36:17.929Z",
    "2023-08-16T10:51:36.790Z",
  ],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Tabansi Celestina Ogbonne ",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  moveDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2023-01-08T09:15:04.904Z",
    "2023-04-11T10:17:24.185Z",
    "2023-07-06T14:11:59.604Z",
    "2023-08-15T17:01:17.194Z",
    "2023-08-16T23:36:17.929Z",
    "2023-08-16T10:51:36.790Z",
  ],

  interestRate: 0.7,
  pin: 3333,
};
//declaring html classes
const alertbtn = document.querySelector(".alert");
const dpBalance = document.querySelector(".Balance");

const timer = document.querySelector(".log-out");

const interest = document.querySelector(".interest");

const outgoing = document.querySelector(".outgoing");

const income = document.querySelector(".income");
const welcomeNote = document.querySelector(".welcome");
const logoutbtn = document.querySelector(".logout");
const loginbtn = document.querySelector(".btn-log");
const loginName = document.querySelector(".username-input");
const loginPin = document.querySelector(".pin-input");
const appSection = document.querySelector(".application");
const button = document.querySelector(".button");
const hidebtn = document.querySelector(".hide-btn");
const input = document.querySelector(".input");
const transferbtn = document.querySelector(".transfer-btn");
const loanbtn = document.querySelector(".loan");
const trasferTo = document.querySelector(".t1");
const amount = document.querySelector(".amt");
const loanAmount = document.querySelector(".t2");
const closeAcc = document.querySelector(".close-btn");
const closeInput = document.querySelector(".close-name");
const closePin = document.querySelector(".close-pin");
const date = document.querySelector(".time-now");
const moveTime = document.querySelector(".move-time");
date.textContent;
const users = [account1, account2, account3];

//making use of map
const userName = function (us) {
  us.forEach(function (user) {
    user.name = user.owner
      .toLowerCase()
      .split(" ")

      .map((use) => use[0])
      .join("");
  });
};
userName(users);
console.log(users);

//making use of filter
const creditAccount = function (credit) {
  credit.forEach(function (deposit) {
    deposit.creditAlert = deposit.movements.filter((dep) => dep > 0);
  });
};
creditAccount(users);
console.log(users);

const debitAccount = function (debit) {
  debit.forEach(function (withwdl) {
    withwdl.debitAlert = withwdl.movements.filter((dep) => dep < 0);
  });
};
debitAccount(users);

const accountBalance = function (bal) {
  bal.balance = bal.movements.reduce((accum, move) => accum + move, 0);

  dpBalance.textContent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(bal.balance);
};
//setting up date and time
const calDate = function (now) {
  const calDaysPass = (dt1, dt2) =>
    Math.round(Math.abs((dt1 - dt2) / (1000 * 60 * 60 * 24)));
  const dpDays = calDaysPass(new Date(), now);
  console.log(dpDays, "[[[[");
  if (dpDays === 0) return "Today";
  if (dpDays === 1) return "Yesterday";
  if (dpDays <= 7) {
    return `${dpDays} days ago`;
  } else {
    return new Intl.DateTimeFormat("en-UK").format(now);
  }
};
//set timeout to log user out
let time;
const setTimer = function () {
  let timeOut = 300;

  const timeIntv = () => {
    let mins = `${Math.trunc(timeOut / 60)}`.padStart(2, 0);

    let secs = `${timeOut % 60}`.padStart(2, 0);
    timer.textContent = mins + ":" + secs;
    if (timeOut === 0) {
      appSection.style.opacity = 0;
      welcomeNote.textContent = `log in to get started 👉`;
      welcomeNote.style.opacity = 1;
      welcomeNote.style.color = "red";
      button.style.opacity = 1;
      clearInterval(time);
    }

    timeOut--;
  };
  timeIntv();
  const time = setInterval(timeIntv, 1000);
  return time;
};

const dpTransaction = function (moves) {
  alertbtn.innerHTML = "";
  moves.movements.forEach(function (move, i) {
    const alert = move > 0 ? "credit" : "debit";
    const dat = new Date(moves.moveDates[i]);
    const dpDate = calDate(dat);
    const formatNum = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(move);
    const html = `<div class="alert p-0 .col-6 bg-dark col1 ">
   <label class="${alert}-btn ${alert}-btn">${
      i + 1
    }---${alert}</label><div class="move-date">${dpDate}</div>
      <div class="display ${alert}">${formatNum}</div>
      </div>
`;
    alertbtn.insertAdjacentHTML("afterbegin", html);
  });
}; // <div class="col-6 bg-dark col1">
const calInterest = function (int) {
  int.interest = int.creditAlert
    .map((cr) => (cr * int.interestRate) / 100)
    .filter((cr) => cr >= 1)
    .reduce((acc, cr) => acc + cr, 0);
  interest.textContent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(int.interest);
};

const dpsummary = function (int) {
  const debit1 = int.debitAlert.reduce((acc, cr) => acc + cr, 0);
  outgoing.textContent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(debit1);
  const sumcredit1 = int.creditAlert.reduce((acc, cr) => acc + cr, 0);
  income.textContent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(sumcredit1);
};

//user interface
let currentUser;

const timeNow = new Date();
const sec = timeNow.getSeconds();
const min = timeNow.getMinutes();
const hr = timeNow.getHours();
const day = timeNow.getDay();
const dte = `${timeNow.getDate()}`.padStart(2, 0);
const mnth = `${timeNow.getMonth()}`.padStart(2, 0);
const yr = timeNow.getFullYear();
const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
// global ISO date
const dateTime = setInterval(
  () =>
    (date.textContent = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(new Date())),
  1000
);

const display = function (dp) {
  dpTransaction(dp);
  accountBalance(dp);
  dpsummary(dp);
  calInterest(dp);
};

loginbtn.addEventListener("click", function (s) {
  s.preventDefault();
  currentUser = users.find((ca) => ca.name === loginName.value);
  console.log(currentUser);
  if (currentUser?.pin === Number(loginPin.value)) {
    appSection.style.opacity = 100;
    button.style.opacity = 0;
    hidebtn.style.opacity = 1;
    welcomeNote.textContent = `Hello ${
      currentUser.owner.split(" ")[1]
    },welcome!🎉`;
    welcomeNote.style.opacity = 1;
    welcomeNote.style.color = "black";
    display(currentUser);
    loginPin.value = "";
    loginName.value = "";
    if (time) clearInterval(time);
    time = setTimer();
  }
});

logoutbtn.addEventListener("click", function () {
  appSection.style.opacity = 0;
  button.style.opacity = 100;
  hidebtn.style.opacity = 0;

  welcomeNote.textContent = `log in to get started 👉`;
  welcomeNote.style.opacity = 1;
  welcomeNote.style.color = "red";
});

transferbtn.addEventListener("click", function (s) {
  s.preventDefault();

  const receiver = users.find((ca) => ca.name === trasferTo.value);
  const amountOut = Number(amount.value);
  //console.log(currentUser, "rb");

  if (
    amountOut > 0 &&
    amountOut <= currentUser.balance &&
    receiver?.name !== currentUser.name
  ) {
    setTimeout(() => {
      receiver.movements.push(amountOut);
      currentUser.movements.push(-amountOut);
      currentUser.moveDates.push(new Date());
      receiver.moveDates.push(new Date());

      display(currentUser);
      trasferTo.value = "";
      amount.value = "";
    }, 2000);
  }
  clearInterval(time);
  time = setTimer();
});

loanbtn.addEventListener("click", function (t) {
  t.preventDefault();
  const loan = Number(loanAmount.value);
  if (loan > 0 && currentUser.movements.some((cur) => cur > loan / 10)) {
    setTimeout(function () {
      currentUser.movements.push(loan);
      currentUser.moveDates.push(new Date());
      display(currentUser);
      loanAmount.value = "";
      clearInterval(time);
      time = setTimer();
    }, 4000);
  }
  clearInterval(time);
  time = setTimer();
});

closeAcc.addEventListener("click", function (t) {
  t.preventDefault();
  const pin = Number(closePin.value);
  const current = users.findIndex((cu) => cu.name === closeInput.value);
  if (currentUser.pin === pin) {
    console.log(users.splice(current, 1));
    appSection.style.opacity = 0;
    welcomeNote.style.opacity = 0;
    button.style.opacity = 100;
  }
});
const dogAge2 = [16, -6, 10, -5, 6, -1, 4];

dogAge2.sort((a, b) => (a > b ? 1 : -1));
console.log("sort", dogAge2);

/*const ob1 = {
  a: 1,
  b: 2,
};
const ob2 = {
  a: 3,
  b: 4,
};
const coll = [ob1, ob2];
const i = coll[0];
console.log(i, "index ");

console.log(coll.splice(0, 1)); //ob1
console.log(coll); //ob2*/

//code challenge
/*const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

const calAvgDogAge = function (dogAge) {
  const humanAge = dogAge
    .map((ca) => (ca < 2 ? ca * 2 : 16 + ca * 4))
    .filter((dg) => dg >= 18)
    .reduce((acc, av, i, arr) => (acc + av) / arr.length, 0);

  return humanAge;
};

//const adultDog = humanAge;
//console.log(adultDog);

//const averageAge =
//adultDog;
//const averageAge =adultDog.reduce((acc, av,i,arr) => (acc + av)/arr.length, 0),

//const averageAge = sumAge / adultDog.length;
//console.log(averageAge);
//return averageAge;
const age1 = calAvgDogAge(dogAge1);
const age2 = calAvgDogAge(dogAge2);
//console.log(age1, age2);
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
const calcPortion = function (portion) {
  portion.forEach((cur) => (cur.recPortion = cur.weight * 0.75 * 28));
};
calcPortion(dogs);
console.log(dogs);
for (let dog of dogs) {
  if (dog.owners.includes("Sarah")) {
    console.log`yes it's`;
  }
}
//or
const SarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
if (
  SarahsDog.curFood > SarahsDog.recPortion * 0.9 &&
  SarahsDog.curFood < SarahsDog.recPortion * 1.1
) {
  console.log(`eating okay`);
} else if (SarahsDog.curFood > SarahsDog.recPortion) {
  console.log(`eating too much`);
} else if (SarahsDog.curFood < SarahsDog.recPortion) {
  console.log(`eating too little`);
}

console.log(dogs);

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recPortion * 1.1)
  .flatMap((dog) => dog.owners)

  .join(" and ");
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recPortion * 0.9)
  .flatMap((dog) => dog.owners)

  .join(" and ");

console.log(ownersEatTooLittle);

console.log(
  `${ownersEatTooMuch}'s dogs eat too much!, ${ownersEatTooLittle}'s dogs eat too little`
);
const exact = dogs.some((dog) => dog.curFood === dog.recPortion);

console.log(exact);
const okay = dogs.filter(
  (dogs) =>
    dogs.curFood > dogs.recPortion * 0.9 && dogs.curFood < dogs.recPortion * 1.1
);

console.log(okay);

const sortDogs = dogs
  .slice()
  .map((m) => m.recPortion)
  .sort((m, s) => (m > s ? 1 : -1));

console.log(sortDogs);
let d4 = "2023-07-12T10:51:36.790Z";
let d3 = new Date();
const c1 = Math.round(Math.abs((new Date(d4) - d3) / (1000 * 60 * 60 * 24)));
console.log(c1);

const daysPassed = (date1, date2) => {
  return Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));
};

const dpPassDays = daysPassed(new Date(), new Date(d4));

console.log(dpPassDays, "dt");

/*const dt = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const yr = now.getFullYear();
    const min = `${now.getMinutes()}`.padStart(2, 0);
    const hr = `${now.getHours()}`.padStart(2, 0);
    return `${yr} / ${month} / ${dt} / ${hr}:${min} `;
  };*/
