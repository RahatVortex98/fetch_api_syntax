//  Basic syntax for fetch api

// fetch ('URL').then(response =>{
//      handle response data
// }).catch(err =>{
//      handle error
// }


// json syntax

// fetch('URL').then(response =>{
//     response.json();

// })
// .then(json =>{

//     console.log(JSON)
// });


// GET method JSON syntax

// function getdata(){

//     fetch('http://api.github.com/orgs/nodejs ').then(response =>{
//         return response.json();
// }).then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// })
// }
// getdata();

//GET method XML syntax

// function getdata(){
//     url=" getdata.txt";
//     fetch(url).then(response =>{
//         return response.text();
//     }).then(data=>{
//         console.log(data);
//     }).catch(err =>{
//         console.log(err);
//     })
// }
//     getdata();

// POST method syntax
// let data = {
//     first_name: "John",
//     last_name: "Anderton",
//     job_title: "Software engineer"
// }

// const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json' // 'content-type' should be 'Content-Type'
//     }
// }

// fetch('url', options)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

