function addRowLockOnFlights(id){
 return `SELECT * from flights WHERE flights.id=${id} FOR UPDATE`
}

module.exports ={
    addRowLockOnFlights
}