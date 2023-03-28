const companies = [
    { name:"company one", category:"Finance", start: 1981, end:2003},
    { name:"company two", category:"Retail", start: 1992, end:2008},
    { name:"company three", category:"Auto", start: 1999, end:2007},
    { name:"company four", category:"Retail", start: 1989, end:2010},
    { name:"company five", category:"Technology", start: 2009, end:2014},
    { name:"company six", category:"Finance", start: 1987, end:2010},
    { name:"company seven", category:"Auto", start: 1986, end:1996},
    { name:"company eight", category:"Technology", start: 2011, end:2016},
    { name:"company nine", category:"Retail", start: 1981, end:1989},
];

const ages =[33, 12,20, 16, 5, 54,21,44,61,13,15,45,25,64,32];

/* for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}
 */
/* companies.forEach(function(company){
    console.log(company.name);
}) */

/* let canDrink = [];
for (let i = 0; i < ages.length; i++){
    if(ages[i]>=21){
        canDrink.push(ages[i]);
    }
} 

console.log(canDrink); */

/* const canDrink = ages.filter(function(age){
if(age >= 21){
    return true;
}
}); */
/* 
const canDrink = ages.filter(age => age>=21);
console.log(canDrink);
 */

/* const retailCompanies = companies.filter(function(company){
if(company.category === 'Retail'){
    return true;
}
}); */

/* const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies); */

/* const lastedTenYears = companies.filter (company => (company.end - company.start >= 10));

console.log(lastedTenYears); */


/* const companyNames = companies.map(function(company){
return company.name;
}); */
/*  const testMap = companies.map(company=> `${company.name}[${company.start} - ${company.end}]`);
console.log(testMap); */
/* 
const ageMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
console.log(ageMap); */

/* const sorted = companies.sort(function(c1, c2){
if (c1.start > c2.start){
    return 1;
}else{
    return -1;
}
}); */
/*  const sorted = companies.sort((a,b)=>(a.start > b.start ? 1 : -1));
console.log(sorted); */

/* let ageSum = 0;
for(let i=0; i< ages.length; i++){
    ageSum += ages[i];
}  */
/* const ageSum = ages.reduce((total, age) => total + age , 0);
console.log(ageSum); */