// Your code here

//Map-Like Functions
function mapToNegativize(arr){
    return arr.map(x => x * (-1));
}

function mapToNoChange(arr){
    return arr.map(x => x);
}

function mapToDouble(arr){
    return arr.map(x => x * 2);
}

function mapToSquare(arr){
    return arr.map(x => x**2);
}

//Reduce-Like Functions

function reduceToTotal(arr, start){
    const total = arr.reduce((total, amount) => total + amount);
    const start_total = arr.reduce((total, amount) => total + amount, start);

    if(start){
        return start_total;
    } else{
        return total;
    }
}

function reduceToAllTrue(arr){
    return arr.reduce((acc, el) => {
        if(acc && Boolean(el) === true){
            return true;
        } else{
            return false;
        }
    });
}

function reduceToAnyTrue(arr){
    return arr.reduce((acc, el) => {
        if(acc || el === true){
            return true;
        } else{
            return false;
        }
    });
}

