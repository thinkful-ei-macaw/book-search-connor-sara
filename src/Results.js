import React, { Component } from 'react'

class Results extends Component {

   

  render() {
    let books = this.props.books
    // let price = ''
    // if(books.saleInfo.saleability === "FOR_SALE"){
    //   price = `{books.saleInfo.listPrice.amount} {books.saleInfo.listPrice.currencyCode}`}
    // else {price = 'free'}
    
     let bookInfo = books.map(item => {
       return (
         <li key={item.id}>
          <h1>{item.volumeInfo.title}</h1>
          <p>{item.volumeInfo.authors && item.volumeInfo.authors.join(', ')}</p>
          <p>Price: {item.saleInfo.saleability === "FOR_SALE" ? 
          `${item.saleInfo.listPrice.amount} ${item.saleInfo.listPrice.currencyCode}` : 'Free'}</p>
          <p>{item.volumeInfo.description}</p>
          <img src={item.volumeInfo.imageLinks.thumbnail} alt="book-cover" title={item.volumeInfo.title} />
        </li>
       )
    })


  // let result= <li>{title}{desc}{img}</li>
    return(
      <div>
        {bookInfo}
      </div>
    )
  }
}

export default Results