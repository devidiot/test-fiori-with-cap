using { sap.capire.bookshop as my } from '../db/schema';

service CatalogService @(path:'/browse') {

  @odata.draft.enabled
  entity Books as SELECT from my.Books {
    *,
    author.name as authorName,
    genre.name as genreName
  } excluding { createdBy, modifiedBy };

  @requires: 'authenticated-user'
  action submitOrder (book: Books:ID, quantity: Integer);

}