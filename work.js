console.log("Welcome to Tic Tac Toe")
musics = new Audio("")
audioturn = new Audio('click.wav')
gameover = new Audio("")
turn = "X"
isgameover = false
//fn to change the turn
changeturn = () => {
    return turn === "X" ? "0" : "X"
}

//fn to check for a win
checkwin = () => {

    boxtext = document.getElementsByClassName('boxtext')

    wins = [
        [0, 1, 2, 0, 3.75, 0], [3, 4, 5, 0, 11.25, 0],
        [6, 7, 8, 0, 18.75, 0], [0, 3, 6, -7.5, 11.25, 90],
        [1, 4, 7, 0, 11.25, 90], [2, 5, 8, 7.5, 11.25, 90],
        [0, 4, 8, 0, 11.25, 45], [2, 4, 6, 0, 11.25, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) 
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector('.line').style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width="22.5vw"
        }
    })
}

//main game logic
boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') 
        {
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if (!isgameover) 
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    })
    turn = "X"
    isgameover= false
    document.querySelector('.line').style.width="0vw"
    document.getElementsByClassName("info")[0].innerText= "Turn for" + turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0vw"
})

