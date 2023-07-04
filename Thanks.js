function submitVote() {
    var selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (selectedCandidate) {
      var candidateName = selectedCandidate.value;
  
      // Store the vote in local storage
      localStorage.setItem('votedCandidate', candidateName);
      document.getElementById('result').textContent = 'Congratulations! Your vote has been recorded successfully.';
    } else {
      document.getElementById('result').textContent = 'Please select a candidate.';
    }
  }
  