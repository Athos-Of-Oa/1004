let form = document.getElementById("profanityForm");
form.addEventListener("submit", function () 
{
  let textArea = document.getElementById("inspectPost");
  let uName = document.getElementById("inspectUser");
  const post = textArea.value.split(" "); // Inspected Post array
  let length = post.length;
  const users = [
    ['AthosOfOa', 0] , 
    ['c0ncreet', 2], 
    ['bees', 3]]; //List of users and how many strikes on their account
  const banned = ["apple", "orange", "banana", "apricot", "peach", "grape", "apples", "oranges", "bananas", "apricots", "peaches", "grapes"]; // Simulated Profanity
  let allowed = true;
  for (var i = 0; i< users.length; i++)
  {
    if (uName = users[0][i])
    {
      
    }
  }
  for (var i = 0; i < length; i++) 
  {
    for (var j = 0; j < banned.length; j++) 
    {
      if (post[i] == banned[j]) 
      {
        allowed = false;
        post[i] = banned[j];
        break;
      }
    }
  }
  if (allowed == false) 
  {
    alert('A Banned word has been found, the user will have one(1) strike added to their account.');
    
  }
  else 
  {
    alert('no banned words were detected');
  }
});
