$(document).ready(function ()
{
	$(".player-element-div").on("click", function ()
	{
		$(this).addClass("selectedElement");
		$(".player-element-div:not(.selectedElement)").css("opacity", "10%");
		$("#instruction").css("opacity", "10%");
		$("#result").css("opacity", "100%");
		startGame(this);
	});
});

function startGame(selectedElement) {
	let id = $(selectedElement).attr("id");
	let chosenElement = id.split("-")[2];
	
	let elements = ["scissor", "rock", "paper"];
	let computerElement = elements[Math.floor(Math.random() * ((elements.length - 1) + 1))];
	
	let winner = whoWins(chosenElement, computerElement);
	let winnerText;
	switch (winner) {
		case "computer": winnerText="Computer won this game"; break;
		case "player": winnerText="Congrats, you beat the computer"; break;
		default: winnerText="That's a tie"; break;
	}
	$("#computer-element-caption").html("Computer chose: " + computerElement);
	$("#whoWins").html(winnerText);

	window.setTimeout(function (selectElement)
	{
		reset(selectedElement);
	}, 5000);
}

function whoWins(chosenElement, computerElement) {
	if (chosenElement === computerElement) {
		return -1;
	} else if (chosenElement === "scissor") {
		if (computerElement === "rock") {
			return "computer";
		} else if (computerElement === "paper") {
			return "player";
		}
	} else if (chosenElement === "rock") {
		if (computerElement === "paper") {
			return "computer";
		} else if (computerElement === "scissor") {
			return "player";
		}
	} else if (chosenElement === "paper") {
		if (computerElement === "scissor") {
			return "computer";
		} else if (computerElement === "rock") {
			return "player";
		}
	}
}

function reset(selectedElement) {
	$(selectedElement).removeClass("selectedElement");
	$(".player-element-div").css("opacity", "100%");
	$("#instruction").css("opacity", "100%");
	$("#result").css("opacity", "10%");
	
}