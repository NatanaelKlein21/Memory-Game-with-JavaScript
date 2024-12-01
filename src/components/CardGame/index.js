import "./style.css";

function CardGame(icon = "shell-logo", alt= "Logo da Alura") {
    return  `
    <article class="card-game">
        <img src="images/${icon}.png" alt="${alt}">
    </article>
    `;
}

export default CardGame;