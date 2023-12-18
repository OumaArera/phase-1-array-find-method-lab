// code your solution here


const superbowlWin = record => {
    let winningYear = record.find(obj => obj.result === "W");

    if (winningYear){
        return winningYear.year;
    }else{
        return undefined;
    }
}

