class Car {
    constructor(brand, model, year) {
      this.brand = brand
      this.model = model
      this.year = year
    }
    static yearsSinceProduction(car) {
      let now = new Date()
      let currentYear = now.getFullYear()
      let pYearsAgo = currentYear - car.year
  
      return `Автомобиль ${car.model} был произведен ${pYearsAgo} лет назад.`
    }
  }
  
  const myCar = new Car('Lada', 'Vesta', 2015)
  console.log(Car.yearsSinceProduction(myCar))