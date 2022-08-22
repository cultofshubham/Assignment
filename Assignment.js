function do_allocation(number_of_people, number_of_buses){
    var Total_bus_capacity = []

    for (var i = 0; i < number_of_people; i++) {
        var Bus_capacity = [1];
        while((sum(Bus_capacity) <= number_of_people) && (Bus_capacity.length < number_of_buses)){
        if(Bus_capacity.length>1)
            Current_bus_capacity = Bus_capacity[Bus_capacity.length - 1] + Bus_capacity[Bus_capacity.length - 2];
        else
            Current_bus_capacity = Bus_capacity[Bus_capacity.length - 1] + i;
    
        Bus_capacity.push(Current_bus_capacity);    
        }
        //console.log(Bus_capacity);
        if(sum(Bus_capacity)<= number_of_people){
            Total_bus_capacity = Bus_capacity;
        }
    }
    
    return Total_bus_capacity;
    
}
function sum(arr) {
    let sumofarr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumofarr = sumofarr + arr[i];
    }
    return sumofarr;
}