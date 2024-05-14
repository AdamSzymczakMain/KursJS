// Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

// {S:888, A:888, B:888, C:888, D:888, X:888}
// Grading rules:

// Grade S: Full marks(score=100)
// Grade A: score<100 and score>=90
// Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)
// Example
// countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
// countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
// countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}

function countGrade(scores) {
  let score = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 100) score.S = score.S + 1;
    else if ((scores[i] < 100) & (scores[i] >= 90)) score.A = score.A + 1;
    else if ((scores[i] < 90) & (scores[i] >= 80)) score.B = score.B + 1;
    else if ((scores[i] < 80) & (scores[i] >= 60)) score.C = score.C + 1;
    else if ((scores[i] < 60) & (scores[i] >= 0)) score.D = score.D + 1;
    else if (scores[i] === -1) score.X = score.X + 1;
  }
}

countGrade([50, 60, 70, 80, 90, 100]);
countGrade([65, 75, , 85, 85, 95, 100, 100]);
countGrade([-1, -1, -1, -1, -1, -1]);
