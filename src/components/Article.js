import React from 'react'

function Article({preview,date="January 1, 1970",title,minutes}) {

    function toRead(){
        if(minutes<=5){
            return <small>☕️ {minutes} minutes to read</small>
        } else if(minutes<=10){
            return <small>☕️☕️ {minutes} minutes to read</small>
        } else {
            return <small> too long to read</small>
        }
       
        
    }

  return (

    <article >

     <h3>{title}</h3>
     <small>{date}</small>
     {toRead(minutes)}
     <p>{preview}</p>

    </article>
  )
}

export default Article

// function Article(post) {
//     return (
  
//       <article key={post.id}>
  
//        <h3>{post.title}</h3>
//        <small>{post.date}</small>
//        <p>{post.review}</p>
  
//       </article>
//     )
//   }
  
//   export default Article