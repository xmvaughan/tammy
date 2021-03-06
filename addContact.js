const {google} = require('googleapis');
const privatekey = require('./../private/tammy196.json');

const client = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ['https://www.googleapis.com/auth/contacts']
);

const service = google.people({version: 'v1', auth: client});
service.people.createContact({
    resource:
    { names:
      [
	  {
	      displayName : "NewPerson",
	      familyName: "Person",
	      givenName: "New",
	      middleName: "J"
	  }
      ],
      phoneNumbers :
      [
	  {
	      canonicalForm : "+18573158026",
	      value : "+1-857-315-8026"
	  }
      ]
    }
}, (err, res) => {
    console.log("We're in the callback");
    if (err) {
	console.log("Error section of callback" + err);
	return;
    }
    console.log("The result:" + res);
});
