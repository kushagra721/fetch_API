
const button = document.getElementById('btn');

// Add an onClick listener to the button
button.addEventListener('click', () => {
  // Start the promise chain
  PromiseAPI1()
    .then((result) => {
      //console.log(result);
      if (result) {
        return PromiseAPI2();
      }
    })
    .then((result) => {
      if (result) {
        return PromiseAPI3();
      }
    })
    .then((result) => {
      if (result) {
        console.log('Promise chain completed successfully');
      }
    })
    .catch((error) => {
      console.log('Promise chain failed with error:', error);
    });
});

function PromiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/posts')
        .then((response) =>{ 
          //console.log(response);
          return  response.json();
          
        })
        .then((objectdata) => {
          let tabledata="";
         
          objectdata.posts.map((values)=>{
            tabledata+=`<tr>
            <th >${values.id}</th>
            <td>${values.title}</td>
            <td>${values.body}</td>
            <td>${values.userId}</td>
            <td>${values.tags}</td>
          </tr>`
          })
          document.getElementById("table_body").innerHTML=tabledata;

         
          

          
          resolve(true);
        })
        .catch((error) => {
          // Reject the promise
          reject(error);
        });
    }, 1000);
  });
}


function PromiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/products')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let tabledata1="";
          data.products.map((values)=>{
            tabledata1+=`<tr>
            <th >${values.id}</th>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td>${values.discountPercentage}</td>
            <td>${values.rating}</td>
            <td>${values.category}</td>
            <td> <img  src="${values.thumbnail}"></img> </td>
            

          </tr>`
          });
          document.getElementById("table_body1").innerHTML=tabledata1;
          
          resolve(true);
        })
        .catch((error) => {
          // Reject the promise
          reject(error);
        });
    }, 2000);
  });
}

function PromiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/todos')
        .then((response) =>{
           return response.json()
        })
        .then((data1) => {
          let tabledata2="";
          data1.todos.map((values)=>{
            tabledata2+=`<tr>
            <td >${values.id}</td>
            <td>${values.todo}</td>
            <td>${values.completed}</td>
            <td>${values.userId}</td>
          </tr>`
          });
          document.getElementById("table_body2").innerHTML=tabledata2;
          
          resolve(true);
        })
        .catch((error) => {
          // Reject the promise
          reject(error);
        });
    }, 3000);
  });
}