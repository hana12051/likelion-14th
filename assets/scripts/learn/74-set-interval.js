;(() =>{

const cleanupId = setInterval(()=>{

  console.count('인터벌')
},3000)

setTimeout(() => {

  console.log('클린업')
  clearInterval(cleanupId)
},5000)


})