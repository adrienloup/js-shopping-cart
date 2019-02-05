var ShoppingCart = (function() {

  var shoppingList = []

  function Item(name, price, count, stock) {
    this.name = name
    this.price = price
    this.count = count
    this.stock = stock
  }

  function save() {
    localStorage.setItem('ShoppingCart', JSON.stringify(shoppingList))
  }

  function load() {
    shoppingList = JSON.parse(localStorage.getItem('ShoppingCart')) || []
  }

  load()

  var _shoppingList = {}

  _shoppingList.add = function(name, price, count, stock) {
    for (let i in shoppingList) {
      if (shoppingList[i].name === name) {
        if (shoppingList[i].stock <= shoppingList[i].count) return
        shoppingList[i].count += count
        save()
        return
      }
    }
    let item = new Item(name, price, count, stock)
    shoppingList.push(item)
    save()
  }

  _shoppingList.remove = function(name) {
    for (let i in shoppingList) {
      if ( shoppingList[i].name === name) {
        shoppingList[i].count--
        if (shoppingList[i].count === 0) shoppingList.splice(i, 1)
        break
      }
    }
    save()
  }

  _shoppingList.removeAll = function(name) {
    for (let i in shoppingList) {
      if ( shoppingList[i].name === name) {
        shoppingList.splice(i, 1)
        break
      }
    }
    save()
  }

  _shoppingList.clear = function() {
    shoppingList = []
    save()
  }

  _shoppingList.cost = function() {
    let total = 0
    for (let i in shoppingList) {
      total += shoppingList[i].price * shoppingList[i].count
    }
    return total.toFixed(2)
  }

  _shoppingList.quantity = function() {
    let total = 0
    for (let i in shoppingList) {
      total += shoppingList[i].count
    }
    return total
  }

  _shoppingList.list = function() {
    let _list = []
    for (let i in shoppingList) {
      let list = shoppingList[i]
      let item = {}
      for (let j in list) {
        item[j] = list[j]
      }
      item.total = (list.price * list.count).toFixed(2)
      _list.push(item)
    }
    return _list
  }

  return _shoppingList

})()