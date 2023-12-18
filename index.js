// code your solution here


const superbowlWin = arr => {
    let winningYear = arr.find(obj => obj.result === "W");

    if (winningYear){
        return winningYear.year;
    }else{
        return undefined;
    }
}

