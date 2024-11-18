<<<<<<< HEAD
$(document).ready(function() { 
	app.init();
});

class App {
	// Definiuje wszystkie możliwe kombinacje wygranej w grze.
	winningVariants = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	// Metoda do inicjalizacji gry.
	init() {
		$(".cell").on("click", this.cellClick);
		$("#restart-game").on("click", () => this.restartGame());
	}

	 // Obsługuje zdarzenia kliknięcia w komórki.
	cellClick = (e) => {
		this.playernTurn(e.target);
	}

	 // Inicjalizuje nową grę.
	initGame() {
		this.currentPlayer = "X";  						// Czyści zawartość każdej komórki w siatce.

		$(".cell").each(function() {
			$(this).html("");
		});
	}

	playernTurn(el) {
		if ($(el).html() == "X" || $(el).html() == "O") return;
		$(el).html(this.currentPlayer);

		this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";

		this.checkWinner();
	}

	// Sprawdza zwycięską kombinację po każdym ruchu.
	checkWinner() {
		for (let i = 0; i < this.winningVariants.length; i++) {
			const variant = this.winningVariants[i];
			const a = this.getCellValue(variant[0]);
			const b = this.getCellValue(variant[1]);
			const c = this.getCellValue(variant[2]);


			// Jeśli któraś z komórek jest pusta, przechodzi do następnej kombinacji.
			if (a == "" || b == "" || c == "") continue;


			 // Jeśli wszystkie trzy komórki mają tę samą wartość, mamy zwycięzcę.
			if (a == b && b == c) {
				console.log("Zwycięzca: " + a);
				this.setWinner(" - zwyciężył: " + a);
				this.restartGame();
			}
		}
	}

	restartGame() {
		this.initGame();
	}

    // Aktualizuje wyświetlacz, aby pokazać nazwisko zwycięzcy.	
	setWinner(str) {
		$("#winner").html(str);
	}

	// Zwraca wartość konkretnej komórki na podstawie jej indeksu.
	getCellValue(index) {
		return $(`.cell[data-index='${index}']`).html();
	}
}

// Tworzy instancję klasy App, aby uruchomić grę.
const app = new App();
=======
$(document).ready(function() { 
	app.init();
});

class App {
	// Definiuje wszystkie możliwe kombinacje wygranej w grze.
	winningVariants = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	// Metoda do inicjalizacji gry.
	init() {
		$(".cell").on("click", this.cellClick);
		$("#restart-game").on("click", () => this.restartGame());
	}

	 // Obsługuje zdarzenia kliknięcia w komórki.
	cellClick = (e) => {
		this.playernTurn(e.target);
	}

	 // Inicjalizuje nową grę.
	initGame() {
		this.currentPlayer = "X";  						// Czyści zawartość każdej komórki w siatce.

		$(".cell").each(function() {
			$(this).html("");
		});
	}

	playernTurn(el) {
		if ($(el).html() == "X" || $(el).html() == "O") return;
		$(el).html(this.currentPlayer);

		this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";

		this.checkWinner();
	}

	// Sprawdza zwycięską kombinację po każdym ruchu.
	checkWinner() {
		for (let i = 0; i < this.winningVariants.length; i++) {
			const variant = this.winningVariants[i];
			const a = this.getCellValue(variant[0]);
			const b = this.getCellValue(variant[1]);
			const c = this.getCellValue(variant[2]);


			// Jeśli któraś z komórek jest pusta, przechodzi do następnej kombinacji.
			if (a == "" || b == "" || c == "") continue;


			 // Jeśli wszystkie trzy komórki mają tę samą wartość, mamy zwycięzcę.
			if (a == b && b == c) {
				console.log("Zwycięzca: " + a);
				this.setWinner(" - zwyciężył: " + a);
				this.restartGame();
			}
		}
	}

	restartGame() {
		this.initGame();
	}

    // Aktualizuje wyświetlacz, aby pokazać nazwisko zwycięzcy.	
	setWinner(str) {
		$("#winner").html(str);
	}

	// Zwraca wartość konkretnej komórki na podstawie jej indeksu.
	getCellValue(index) {
		return $(`.cell[data-index='${index}']`).html();
	}
}

// Tworzy instancję klasy App, aby uruchomić grę.
const app = new App();
>>>>>>> 828cdcc3924a158c06e5ec21d5f055f236d5cb91
