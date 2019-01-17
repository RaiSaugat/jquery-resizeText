# jquery-resizeText
This is a simple jquery plugin for dynamic font-size according to text-length

## Html Structure

    <div>
      <p>Hello World</p>
    </div>
    
## jQuery syntax
    
    $('p').resizeText(); // default height of parent will be 80px;
    
    $('p').resizeText({height: 20 }); // parent height will be 20px
    
## Css Style
   
 Opacity of value 1 should be given to the target element since there would be a slight flickering of text font-size when the page refresh.
    
    p {
      opacity: 1;
      margin: 0;
     }
