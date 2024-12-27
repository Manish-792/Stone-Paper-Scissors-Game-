


const game_logic = ["stone","paper","scissors"];
const game_content = document.querySelector(".game_content");
const startGame = document.querySelector("#start");
const result = document.querySelector(".result");
const container = document.querySelector(".container");

function checkWinner(player1,player2)
{
    
    if(player1 === player2)
    {
        //game draw
        result.innerHTML = "Match is draw";
    }
    else if(game_logic[player1] === "stone" && game_logic[player2] === "paper")
    {
        result.innerHTML = "Player2 Wins";
    }
    else if(game_logic[player1] === "stone" && game_logic[player2] === "scissors")
    {
        result.innerHTML = "player1 Wins";
    }
    else if(game_logic[player1] === "paper" && game_logic[player2] === "stone")
    {
        result.innerHTML = "player1 Wins";
    }
    else if(game_logic[player1] === "paper" && game_logic[player2] === "scissors")
    {
        result.innerHTML = "player2 Wins";
    }
    else if(game_logic[player1] === "scissors" && game_logic[player2] === "paper")
    {
        result.innerHTML = "player1 Wins";
    }
    else if(game_logic[player1] === "scissors" && game_logic[player2] === "stone")
    {
        result.innerHTML = "player2 Wins";
    }

}
function endGame()
{
    const newGame = document.createElement('button');
    newGame.className = "gameButton";
    newGame.innerHTML = "New Game";
    container.appendChild(newGame);

    newGame.addEventListener('click',()=>{

        result.innerHTML = "";
        const p1 = document.getElementById("1");
        p1.innerHTML = "Player1";
        const p2 = document.getElementById("2");
        p2.innerHTML = "player2";
        // p1.removeChild(img);
        startGame.addEventListener('click',logic);
        container.removeChild(newGame);

    })
    
    
}
// const img = document.createElement('img');
function logic()
{
        let player1,player2;
    
        player1 = Math.floor(Math.random()*3);
        const p1 = document.getElementById("1");
        console.log(player1);
        // if(game_logic[player1] === "stone")
        // {
            
        //     img.src = "./stone.jpg";
        //     p1.appendChild(img);
        // }
        // else if(game_logic[player1] === "paper")
        // {
        //     // const img = document.createElement('img');
        //     img.src = "./paper.jpeg";
        //     p1.appendChild(img);
        // }
        // else if(game_logic[player1] === "scissors"])
        // {
        //     // const img = document.createElement('img');
        //     img.src = "./scissors.png";
        //     p1.appendChild(img);
        // }
    
        p1.innerHTML = `${game_logic[player1]}`;
    
        player2 = Math.floor(Math.random()*3);
        const p2 = document.getElementById("2");
        p2.innerHTML = `${game_logic[player2]}`;
        console.log(player2);
    
        checkWinner(player1,player2);
        startGame.removeEventListener('click',logic);
        endGame();
}
startGame.addEventListener('click',logic);

