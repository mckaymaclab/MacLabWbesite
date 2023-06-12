

function getLabHours (){
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
debugger
        // Log the API data
        console.log('token', data);

        // Return a second API call
        // This one uses the token we received for authentication
        return fetch('https://api2.libcal.com/1.1/hours/7593', {
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


        let labHours = '';
            console.log(data[0].dates);

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
            if(dd<10) 
            {
                dd='0'+dd;
            } 

            if(mm<10) 
            {
                mm='0'+mm;
            } 
            today = yyyy+'-'+mm+'-'+dd;

            var status = data[0].dates[today].status;
            var openTime = data[0].dates[today].hours[0].from;
            var closeTime = data[0].dates[today].hours[0].to;
            console.log(openTime, closeTime, status);

            if (status=='open') {
                labHours+=`<p>Today's Hours: ${openTime} to ${closeTime}</p>`
            }
            else {
                labHours+=`Lab Closed</p>`
            }

          document.getElementById('labHours').innerHTML = labHours;

    })
    .catch(err => {

        // Log any errors
        console.log('something went wrong', err);     

});
}
