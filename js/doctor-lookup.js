
export class DoctorLookup {
  issue(issue) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=47.6064, -122.3327,100&skip=0&limit=100&user_key=${apiKey}`)
    .then(function (response) {
      let doctors = response.data;
      if (typeof doctors[0] !== 'undefined') {
        doctors.forEach(function (doctor) {
          $('#results').append(
            `<li>
                <span class='card-title'>${doctor.profile.first_name} ${doctor.profile.last_name}</span>
                <p>${doctor.practices[0].visit_address.street}</p>
                <p>${doctor.practices[0].visit_address.city},${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
                <p>${doctor.practices[0].phones[0].number}</p>
                <a href=${doctor.practices[0].website}>Doctors Website</a>
            </li>`);
        });
      } else {
        $('#results').append(`<li>unable to find a doctor that can care for your issue</li>`);
      }
    }).fail(function (error) {
      $('#results').append(`There was an error processing your request: ${error.responseText}.`);
    });
  }

  doctorName(name) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.6064, -122.3327,100&skip=0&limit=40&user_key=${apiKey}`)
    .then(function (response) {
      let doctors = response.data;
      if (typeof doctors[0] !== 'undefined') {
        doctors.forEach(function (doctor) {
          $('#results').append(
            `<li>
              <span class='card-title'>${doctor.profile.first_name} ${doctor.profile.last_name}</span>
              <p>${doctor.practices[0].visit_address.street}</p>
              <p>${doctor.practices[0].visit_address.city},${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
              <p>${doctor.practices[0].phones[0].number}</p>
              <a href=${doctor.practices[0].website}>Doctors Website</a>
            </li>`);
        });
      } else {
        $('#results').append(`<li>Sorry, cannot find any doctors with that name</li>`);
      }
    }).fail(function (error) {
      $('#results').append(`There was an error processing your request: ${error.responseText}.`);
    });
  }
}
