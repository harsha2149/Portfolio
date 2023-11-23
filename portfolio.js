// const CardContainer = document.getElementById("WIKcardsContainer");

// // Example usage
// const frontendCard = newCard("Frontend", ["HTML", "CSS", "JavaScript", "Dart"]);
// const backendCard = newCard("Backend", ["Firebase"]);

// // Append the card containers to the main container
// CardContainer.appendChild(frontendCard);
// CardContainer.appendChild(backendCard);

// function newCard(cardName, skills) {
//     // Create new elements for the card
//     const cardContainer = document.createElement("div");
//     const card = document.createElement("div");
//     const cardNameElement = document.createElement("h2");
//     const skillsElement = document.createElement("div");

//     // Set content for the elements
//     cardNameElement.textContent = cardName;
//     skills.forEach(skill => {
//         const skillItem = document.createElement("p");
//         const skillLink = document.createElement("a");
//         skillLink.href = ""; // Add your href here
//         skillLink.textContent = skill;
//         skillLink.classList.add("s");
//         skillItem.appendChild(skillLink);
//         skillsElement.appendChild(skillItem);
//     });

//     // Append elements to the card
//     card.appendChild(cardNameElement);
//     card.appendChild(skillsElement);

//     // Add a class to the card for styling
//     card.classList.add("WIKcard");

//     // Append the card to the card container
//     cardContainer.appendChild(card);

//     // Add a class to the card container for additional styling
//     cardContainer.classList.add("WIKcardContainer");

//     return cardContainer; // Return the created card container
// }
