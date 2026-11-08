// 1. Library array och running-status
const library = [];
let running = true;

// 2. addBook() – frågar efter detaljer och lägger till
function addBook() {
    const title = prompt("Enter the video game title:");
    if (!title) return;

    const developer = prompt("Enter the developer / studio:");
    if (!developer) return;

    const newGame = {
        title: title,
        author: developer,
        isRead: false
    };

    library.push(newGame);
    alert(`"${title}" by ${developer} added to your game library!`);
}

function listBooks() {
    if (library.length === 0) {
        console.log("Your game library is currently empty.");
        alert("Your game library is currently empty.");
        return;
    }

    let output = "=== 🎮 YOUR GAME LIBRARY ===\n\n";
    library.forEach((game, index) => {
        const status = game.isRead ? "Completed ✅" : "Unplayed / In Progress 🕹️";
        output += `${index + 1}. "${game.title}" (Dev: ${game.author}) — [${status}]\n`;
    });

    console.log(output); // Prints cleanly to the console for your teacher's code check
    alert(output);       // Pops up on screen so you can see it instantly
}

// 4. markAsRead(title) – markerar som klar
function markAsRead(title) {
    if (!title) return;

    const foundGame = library.find(game => game.title.toLowerCase() === title.toLowerCase());

    if (foundGame) {
        foundGame.isRead = true;
        alert(`Success! "${foundGame.title}" marked as completed.`);
    } else {
        alert(`Could not find a game named "${title}".`);
    }
}

// --- Meny-loopen ---
while (running) {
    const choice = prompt(`
🎮 Game Library Tracker
1. Add Game
2. List Games
3. Mark Game as Completed
4. Exit
Enter your choice:`);

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            listBooks();
            break;
        case "3":
            const title = prompt("Enter the title of the game to mark as completed:");
            markAsRead(title);
            break;
        case "4":
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice. Please enter a number between 1 and 4.");
    }
}