function submitVote() {
    var selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (selectedCandidate) {
      var candidateName = selectedCandidate.value;
  
      // Store the vote in local storage
      //localStorage.setItem('votedCandidate', candidateName);
      // Step 1: Retrieve the value from local storage
      var key = candidateName;
      var value = localStorage.getItem(key);

      // Step 2: Convert the retrieved value to a number
      var numericValue = parseFloat(value);

      // Step 3: Increase the numeric value
      var increasedValue = numericValue + 1;

      // Step 4: Store the updated value back into local storage
      localStorage.setItem(key, increasedValue.toString());      

      document.getElementById('result').textContent = 'Congratulations! Your vote has been recorded successfully.';
    } else {
      document.getElementById('result').textContent = 'Please select a candidate.';
    }
  }
  
  

  function initializeVotes() {
    localStorage.setItem('total_votes', '986');    
    localStorage.setItem('candidate1', '245');
    localStorage.setItem('candidate2', '121');
    localStorage.setItem('candidate3', '59');
    localStorage.setItem('candidate4', '341');
    localStorage.setItem('candidate5', '189');
  }

  //window.onload = initializeVotes;