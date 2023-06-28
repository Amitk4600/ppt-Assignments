/* 

Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
*/

function attendMeeting(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][i]) {
            return false
        }
    }
    return true;
}

console.log(attendMeeting([[0,30],[5,10],[15,20]]));