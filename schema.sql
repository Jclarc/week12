CREATE SCHEMA `bamazon` ;

USE `bamazon` ;

CREATE TABLE `bamazon`.`products` (
  `ItemID` INT NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(45) NOT NULL,
  `DepartmentName` VARCHAR(45) NOT NULL,
  `Price` DECIMAL(10,2) NOT NULL,
  `Stock_Quantity` INT NOT NULL,
  PRIMARY KEY (`ItemID`),
  UNIQUE INDEX `ItemID_UNIQUE` (`ItemID` ASC));

INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Playstation`, `Gaming`, 300.00, 48);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Lipitor`, `Pharmaceutical`, 89.99, 1700);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Corolla`, `Automotive`, 25000.00, 0);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Star Wars`, `Movies/Media`, 19.99, 10);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Ipad`, `Electronics`, 499.95, 20);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Mario Bros. franchise`, `Gaming`, 79.99, 12);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Michael Jackson's Thriller`, `Movies/Media`,29.99, 6);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Harry Potter`, `Movies/Media`, 29.99, 6);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Iphone`, `Electronics`, 799.99, 9);
INSERT INTO `bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES (`Rukik's Cube`, `Toys`, 10.00, 73);