import React from 'react'

function Article({title,date="January 1, 1970",preview,minutes}) {
  
  const setEmoji=()=>{
    
    let output="";
   if(minutes<30){
      const min=minutes;
     while(minutes>0){
       output+="☕️ "
       
       minutes-=5;
     }
     output+=min;
     }
     else {
      while(minutes>0){
        output+="🍱"

        minutes-=10;
      }
     }
     return output;
   }



  return (
    <article>
      <h3>{title}</h3>
      <small> {date+" . " + setEmoji() +" min read"}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
