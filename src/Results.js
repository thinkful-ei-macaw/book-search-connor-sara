import React, { Component } from 'react'

class Results extends Component {
  
  static defaultProps = {
    books: []
  }
  

   /*
   if (books.totalItems === 0){
     let bookInfo = "Sorry, we couldn't find anything"
   }
   */

  render() {
    let books = this.props.books

    const findPrice = (saleInfo) => { 
      return(
      (saleInfo.saleability === "FOR_SALE") ?
          `${saleInfo.listPrice.amount} $ {saleInfo.listPrice.currencyCode}` : 'Free'
      )     
    }

    let bookInfo = books.map(item => {
       return (

         <li key={item.id}>
          <h1>{item.volumeInfo.title}</h1>
          <p>{item.volumeInfo.authors && item.volumeInfo.authors.join(', ')}</p>
          <p>Price:  
          {findPrice(item.saleInfo)}</p>
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