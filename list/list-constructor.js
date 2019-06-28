'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

//Removes the first index of an array and returns it
List.prototype.shift= function(){
  let returnValue = this.data[0];
  delete this.data[0];
  return returnValue;
};


//adds something to the beginning of an array and returns the new length

List.prototype.unshift = function(item){
  this.length++;
  for(let i=1; i< this.length; i++){
    let temp = this.data[this.length-i];
    this.data[this.length] = temp;
  }
  this.data[0] = item;
  return this.length;
};

module.exports = List;
