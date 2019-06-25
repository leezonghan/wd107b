function degree(score)
{
    if(score >= 90) return "'A'";
    else if(score >= 80) return "'B'";
    else if(score >= 70) return "'C'";
    else return "'D'";
}
var score = 80;
console.log("degree(" +score + ") = > " +degree(score));
