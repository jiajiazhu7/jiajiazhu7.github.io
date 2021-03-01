function showSymbols() { 
    let msg = document.getElementById('msg'); 
  
    //loop to generate emojis 
    for (let i = 128000; i <= 128100; i++) { 
        
        msg.innerHTML = msg.innerHTML  + ' &#' + i + '; - ' + i ;  
      
        }
        
} 