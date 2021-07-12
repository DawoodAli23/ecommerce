use ecommerce;


CREATE TABLE product(
	ID int primary key auto_increment,
    productName varchar(50) not null,
    productDetail varchar(500) not null,
    productListingPrice float not null,
    productRetailPrice float not null,
    productCategoryID    

);