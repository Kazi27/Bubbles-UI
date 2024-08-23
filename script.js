const bubbles = 10; //num of bubbles
let zoomedBubble = null;

for (let i = 0; i < bubbles; i++) 
{
    createBubble();
}

function createBubble() 
{
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    //random size
    const size = Math.random() * 60 + 40;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    //random position
    bubble.style.left = `${Math.random() * 100}vw`;

    //random duration
    const duration = Math.random() * 5 + 3;
    bubble.style.animation = `float ${duration}s ease-in infinite`;

    //text to the bubble
    bubble.innerText = "Intention # " + (Math.floor(Math.random() * 100) + 1);

    //event listener for clicking on the bubble doesnt work rn though
    bubble.addEventListener('click', function(event) {
        event.stopPropagation(); 
        if (zoomedBubble === bubble) 
        {
            bubble.classList.remove('zoomed');
            zoomedBubble = null;
        } 
        
        else 
        {
            if (zoomedBubble) {
                zoomedBubble.classList.remove('zoomed'); 
            }
            bubble.classList.add('zoomed');
            zoomedBubble = bubble;
        }
    });

    document.body.appendChild(bubble);
}

//doesnt work rn
document.body.addEventListener('click', function() {
    if (zoomedBubble) {
        zoomedBubble.classList.remove('zoomed');
        zoomedBubble = null;
    }
});
