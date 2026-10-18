//Information om bokkorten
const books = [ 
    {
        id: 1, 
        title: "A Court Of Thorns And Roses",
        author: "Sarah J. Maas", 
        category: "Romantacy",
        description: "En jakt i skogen förändrar Feyres liv och för henne till en värld fylld av magi och faror. Där väntar en berättelse om kärlek, mod och en verklighet som utmanar allt hon trott sig veta.",
        image: "images/acotar-img.webp"
    },
    {
        id: 2,
        title: "Binding 13", 
        author: "Chloe Walsh",
        category: "Romance",
        description: "När blyga Shannon börjar på Tommen College hoppas hon på en nystart. Där möter hon rugbystjärnan Johnny, och en oväntad vänskap väcker nya känslor. En berättelse om första kärleken, tillit och ett förflutet som är svårt att lämna bakom sig.",
        image: "images/binding13-img.webp"
    },
    {
        id: 3,
        title: "Lights Out", 
        author: "Navessa Allen",
        category: "Dark romance",
        description: "När sjuksköterskan Aly kommer i kontakt med Josh, mannen bakom ett maskerat konto på nätet, tar hennes vardag en oväntad vändning. Deras växande relation präglas av hemligheter och stark attraktion. Lights Out blandar mörk romantik med spänning och humor.",
        image: "images/lightsout-img.webp"
    },
    {
        id: 4,
        title: "Threshing Day", 
        author: "Rebecca Yarros",
        category: "Fantasy",
        description: "Under den avgörande dagen då drakar väljer sina ryttare sätts mod och överlevnadsinstinkt på prov. Threshing Day samlar tretton berättelser från världen i Fourth Wing, med karaktärerna och deras drakar i centrum.",
        image: "images/threshingday-img.webp"
    },
    {
        id: 5,
        title: "Flock", 
        author: "Kate Stewart",
        category: "Romance",
        description: "När nittonåriga Cecelia flyttar till småstaden Triple Falls räknar hon med att stanna i ett år. Men mötet med Sean och hans gåtfulla vän Dominic drar in henne i en gemenskap där egna regler och hemligheter styr.",
        image: "images/flock-img.webp"
    },
    {
        id: 6,
        title: "The Housemaid", 
        author: "Freida McFadden",
        category: "Deckare",
        description: "När Millie får arbete som hembiträde hos den välbärgade familjen Winchester ser hon en chans att börja om. Men bakom hemmets välordnade fasad finns märkliga beteenden och farliga hemligheter.",
        image: "images/thehousemaid-img.webp"
    }
];

//Hamburgaremenyn
const nav = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open")
})



//Hitta katalogens behållare i DOM
//1, kan ej ändra värdet ->. 2, valt namn för js. 3. webbsidans dokument. 4. hittar id i html som nämns i ().
const bookCatalog = document.getElementById("book-catalog");


//Skapar en funktion som bygger ett bokkort
//1, visar att det är en funktion??. 2, detta är funktionens namn. 3, namn på bokobjektet som funktionen får när den används. 
function createBookCard(book) {

//Skapar ett tomt div-element. Ger nya diven en klass så att css kan styla den
    const card = document.createElement("div");
    card.classList.add("book-card");

//Skapar en div för knapparna i bokkorten så att de hänger ihop så att jag kan placera dem tillsammans
const bookcardButtons = document.createElement("div");
    bookcardButtons.classList.add("bookcard-buttons");

//Skapar ett bild-element. Hämtar bilden från bokobjektet och sätter den som en src. Sätter en alt text på bilden. 
    const image = document.createElement("img");
    image.setAttribute("src", book.image);
    image.setAttribute("alt", "Bokomslag till " + book.title);

//Skapar tom h3. Sedan fyller med text, titel på bok.
    const title = document.createElement("h3");
    title.textContent = book.title;

//Skapar tomt p. Sedan fyller med text, författaren av bok. Hämtar författaren i bokobjektet.
    const author = document.createElement("p");
    author.textContent = "Författare: " + book.author;

//Skapar tomt p. Sedan fyller med text, genre på bok. Hämtar genre i bokobjektet. 
    const category = document.createElement("p");
    category.textContent = "Genre: " + book.category;

//Skapar tomt p. Sedan fyller med text, beskrivning av bok. 
    const description = document.createElement("p");
    description.textContent = book.description;

//Ger beskrivningen en klass, för att dölja den
description.classList.add("hidden");


//Skapa "Visa mer"-knappen. ge text och css-klass
const button = document.createElement("button");
button.textContent = "Visa mer";
button.classList.add("button-3");

//Lyssnar efter att man klickar på button
button.addEventListener("click", function () {

//Växla mellan att visa och dölja beskrivningen
    description.classList.toggle("hidden");

//Ändra knappens text
    if (button.textContent === "Visa mer") {
        button.textContent = "Visa mindre";
    } else {
        button.textContent = "Visa mer";
    }
});


//Skapa "Ta bort"-knappen. Ge text och css-klass
const deleteButton = document.createElement("button")
deleteButton.textContent = "Ta bort";
deleteButton.classList.add("button-3");

//Måste ha denna så att det kan hända något när jag trycker på knappen
deleteButton.addEventListener("click", function () {
    const position = books.indexOf(book);
    books.splice(position, 1);
    card.remove()

    console.log()

})



//Lägg bilden och texterna i bokkortet. i den ordningen
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(category);
    card.appendChild(description);
    bookcardButtons.appendChild(button);
    bookcardButtons.appendChild(deleteButton);

//Lägg knapparnas div i bokkortet
card.appendChild(bookcardButtons);

//Skicka tillbaka färdigt bokkort
    return card;
}



//1, visar att det är en funktion??. 2, detta är funktionens namn. 3, namn på bokobjektet som funktionen får när den används. 
function renderBooks(bookList) {

//Töm katalogen så gamla kort inte ligger kvar, "" tom text
    bookCatalog.textContent = "";

//1, en loop. 2, () vilka värden loppen ska gå igenom. 3, skapar variabel som heter book. 4, hämtar värde från lista, en i taget. 5, boklistan som funktionen tar emot.
    for (const book of bookList) {

//Bygg ett kort för aktuell bok och spara i card
        const card = createBookCard(book);

//Lägg färdiga bokkortet sist i katalogen på sidan, i html-behållare
        bookCatalog.appendChild(card);
    }
}

//Så man kan se bokkorten på hemsidan, yey! 1, visar en lista med böcker
renderBooks(books);




//Hitta dropbox och sparar det
const genreFilter = document.querySelector("#genre-filter");

//Kör nedanstående js när genreFilter lyssnar på att valet ändras
genreFilter.addEventListener("change", function () {

//Tar upp vilken genre användaren har valt och sparar
    const selectedGenre = genreFilter.value;
//Om den valda genre är exakt lika med all, om ja så visas alla om nej så går den vidare till else??
    if (selectedGenre === "all") {
//Här visar den alla böcker om det blev true
        renderBooks(books);

    } else {
//Skapa en tom lista för böcker som vald genrern
        const filteredBooks = [];

//Går igenom boklistan en i taget
        for (const book of books) {

//Kontrollera om bokens genre matchar vald genre, då lägg till den så att den syns. Och gör det med nya böcker som läggs till
            if (book.category === selectedGenre || book.category.includes(selectedGenre)) {
                filteredBooks.push(book);
            }
        }

//Visa bara böckerna som är valda
        renderBooks(filteredBooks);
    }
});




//Hitta formulär i DOM
const bookForm = document.querySelector("#book-form");

//Lyssna efter att formuläret skickas
bookForm.addEventListener("submit", (event) =>  {

//stoppa sidan från att laddas om
event.preventDefault();

//Samla in formulärets innehåll, vid submit
    const formData = new FormData(bookForm)

//Hämta värdena 
    const title = formData.get("title")
    const author = formData.get("author")
    const description = formData.get("description")
    const image = formData.get("image")

//Hämta markerade genre och spara i lista
    const genre = formData.getAll("genre");

    
//Vänste är egenskapens namn och häger är variabel med text från formulär
    const newBook = {
        title: title,
        author: author,
        description: description,
        image: image,
        category: genre
    };
//Lägg det nya bokobjektet sist i books-arrayen
books.push(newBook);
    
//Ändra filtret till Alla genrer
genreFilter.value = "all";
    
//Visar alla böcker, inklusive den nya
renderBooks(books);
    
//Rensa formuläret när man trycker på submit
bookForm.reset();
    
});

//Skriv ut värdena i konsoll
console.log(title);
console.log(author);
console.log(description);
console.log(image);
console.log(genre);

//Visa det nya bokobjektet i konsolen
console.log(newBook);