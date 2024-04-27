
# Odin Library

This project is a simple web application for managing a personal library. Users can add books with details such as title, author, number of pages, and whether the book has been read. The application allows users to toggle the read status of each book and remove books from the library.

## Features

- Add a book to the library with title, author, pages, and read status.
- Toggle the read status of a book.
- Delete a book from the library.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get a local copy up and running, follow these simple steps.

- Clone the repo
- git clone https://github.com/lolocompa/odin-library.git
- Open index.html in your browser.
## Usage
- To add a book, fill in the book's title, author, and number of pages in the form at the top of the page. If the book has been read, check the "read" checkbox. Then, click the "+" button to add the book to your library.

- The library is displayed below the form. Each book is represented as a card containing the book's details.

- To toggle the read status of a book, click the "read" or "unread" button on the book's card.

- To remove a book from the library, click the "delete" button on the book's card.

## Code Overview
- Key Functions
- Book: A constructor function for creating book objects. Book

- addBookToLibrary: Adds a new book to the library and updates the display. addBookToLibrary

- display_book: Returns the HTML structure for a book card based on the book's details. display_book

- Event Listeners
- A click event listener on the "add" button to trigger the addBookToLibrary function. submit

- Click event listeners for toggling the read status of a book and deleting a book from the library. document, document

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## License
Distributed under the MIT License. See LICENSE for more information.
