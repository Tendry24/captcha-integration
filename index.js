
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const N = parseInt(document.getElementById('numberInput').value);
    const outputDiv = document.getElementById('output');
    const form = document.getElementById('numberForm');
    form.style.display = 'none';
    outputDiv.innerHTML = ''; 
    let count = 0;
     function makeRequest() {
        if (count < N) {
            fetch('https://api.prod.jcloudify.com/whoami')
                .then(response => {
                    if (response.status === 403) {
                        outputDiv.innerHTML += `${count + 1}. Forbidden<br>`;
                        count++;
                        setTimeout(makeRequest, 1000);
                    } else if (response.status === 200) {
                       
                    } else {
                        
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
     makeRequest();
});