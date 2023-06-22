

function getCalendarItems (){
    // Client credentials
    var key = '202';
    var secret = '38fb15417a6373b9fea95df8624de9b0';

    // Call the API
    // This is a POST request, because we need the API to generate a new token for us
    fetch('https://api2.libcal.com/1.1/oauth/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(resp => {

        // Return the response as JSON
        return resp.json();

    })
    .then(data => {

        // Log the API data
        console.log('token', data);

        // Return a second API call
        // This one uses the token we received for authentication
        return fetch('https://api2.libcal.com/1.1/events?cal_id=8606&limit=3', {
            headers: {
                'Authorization': data.token_type + ' ' + data.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

    })
    .then(resp => {

        // Return the API response as JSON
        return resp.json();

    })
    .then(data => {

        let dateOptions = {month: 'long', day: 'numeric' };
        let timeOptions = {hour: 'numeric', minute: 'numeric', hour12: true };
        let output = '';
            console.log(data.events);
            data.events.forEach(event => {

            // format date time
            startDate = Date.parse(event.start);
            startObject = new Date(startDate);
            humanStart = startObject.toLocaleString('en-US', dateOptions);

            startTime = Date.parse(event.start);
            startTimeObject = new Date(startTime);
            humanStartTime = startTimeObject.toLocaleTimeString('en-US', timeOptions);
            //console.log(humanStartTime);


                       output+=`
                       <div style="margin: 10px 10px 10px 10px; width: 400px" class="mb-3 card d-flex flex-row" style="width: 18rem;">
                            <div style="" class="card-body">
                                <h5 class="p-2 card-title">${event.title}</h5>
                                <h6 class="p-2 card-subtitle mb-2 text-muted">${humanStart} ${humanStartTime}</h6>
                                <a href="${event.url.public}" class="p-2" style="color: #c84392;">Go to Event</a>
                                <p class="p-2 card-text">${event.description}</p>
                            </div>
                        </div>
                       `;
          });

          document.getElementById('output').innerHTML = output;

    })
    .catch(err => {

        // Log any errors
        console.log('something went wrong', err);
        

});
}
