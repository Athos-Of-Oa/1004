let form = document.getElementById("profanityForm");
let users = [
    ['AthosOfOa', 0, false] , 
    ['c0ncreet', 2], false, 
    ['bees', 3, true]]; //List of users and how many strikes on their account
  const bannedList = ["apple", "orange", "banana", "apricot", "peach", "grape", "apples", "oranges", "bananas", "apricots", "peaches", "grapes"]; // Simulated Profanity
form.addEventListener("submit", function () 
{
  let textArea = document.getElementById("inspectPost");
  let uName = document.getElementById("inspectUser");
  const post = textArea.value.split(" "); // Inspected Post array
  let length = post.length;
  let allowed = true;
  for (var i = 0; i < length; i++) 
  {
    for (var j = 0; j < bannedList.length; j++) 
    {
      if (post[i] == bannedList[j]) 
      {
        allowed = false;
        post[i] = bannedList[j];
        break;
      }
    }
  }
  if (allowed == false) 
  {
    alert('A Banned word has been found, the user will have one(1) strike added to their account.');
    if (uName = users[0][0])
    {
      users[0][1] = users[0][1] + 1;
      if (users[0][1] >= 3)
      {
        users[0][2] = true;
        userS1 = document.getElementById("userS1").innerHTML = users[0][1];
        userB1 = document.getElementById("userB1").innerHTML = users[0][2];
      }
    }
  if (uName = users[1][0])
    {
      users[1][1] = users[1][1] + 1;
      if (users[1][1] >= 3)
      {
        users[1][2] = true;
          userS2 = document.getElementById("userS2").innerHTML = users[1][1];
          userB2 = document.getElementById("userB2").innerHTML = users[1][2];
      }
    }
  if (uName = users[2][0])
    {
      users[2][1] = users[2][1] + 1;
      if (users[2][1] >= 3)
      {
        users[2][2] = true;
          userS3 = document.getElementById("userS3").innerHTML = users[2][1];
          userB3 = document.getElementById("userB3").innerHTML = users[2][2];
      }
    }
  }
  else 
  {
    alert('no banned words were detected');
  }
});
