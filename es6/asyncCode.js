const section = document.getElementById('posts')


//===fetch data from api

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    //we get back a response object
    //then we use the .json method to access the data
    return res.json();
  })
  .then(data => {
    data.forEach(post => {//asigning for each data set
      const h3 = document.createElement('h3')
      h3.textContent = post.title //geting the data from api and now adding it as h1
      section.appendChild(h3)
    // console.log(data)
    //do anything the program needs
    })
  }) 
  .catch(err => console.log(err))

  