const allBooks = [];

const book1 = {
    title: 'Harry Potter',
    author: 'J.K Rowling',
    image: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    alreadyRead: false
}

const book2 = {
    title: 'Tom Sawyer',
    author: 'Tolien',
    image: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    alreadyRead: true
}
allBooks.push(book1, book2)
console.log('allBooks', allBooks);

let htmlString = '';
for (const book of allBooks) {
    const rowString = `
    <tr class='${book.alreadyRead ? 'is-read' : ''}'>
        <td>${book.title} written ${book.author}</td>
        <td>
        <img src='${book.image}'/>
        </td>
        <td>${book.alreadyRead}</td>
    </tr>
   
    `
    htmlString = htmlString + rowString
}

const table = document.createElement('table')
table.innerHTML = `
<thead>
    <tr>
        <th colspan='3'>My Book List</th>
    </tr>
</thead>
<tbody>
  ${htmlString}
</tbody>
`
const bookListDiv = document.querySelector('.list-books');
bookListDiv.appendChild(table);
