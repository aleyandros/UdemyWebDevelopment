const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const client = require("@mailchimp/mailchimp_marketing");

const app = express();

//Permite visualizar los campos cuando post
app.use(bodyParser.urlencoded({ extended: true }));

//Cargar CSS e imagenes
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

client.setConfig({
  apiKey: "a48bed760d4fd4efc856bf867c4de67b-us21",
  server: "us21",
});

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  // const data = {
  //   members: [
  //     {
  //       email_address: email,
  //       status: "subscribed",
  //       merge_fields: { FNAME: firstName, LNAME: lastName },
  //     },
  //   ],
  // };

  //const jsonData = JSON.stringify(data);

  const run = async () => {
    const response = await client.lists.batchListMembers("f82b786589", {
      members: [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: { FNAME: firstName, LNAME: lastName },
        },
      ],
    });
    res.sendFile(__dirname + "/success.html");
    //console.log(response);
  };

  //console.log(run);
  // if (response.statusCode === 200) {
  //   res.sendFile(__dirname + "/success.html");
  // } else {
  //   res.sendFile(__dirname + "/failure.html");
  // }

  run().catch((e) => res.sendFile(__dirname + "/failure.html"));
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

const portHeroku = process.env.PORT;
const port = 3000;
app.listen(portHeroku || port, () => {
  console.log(`Server is running on port ${port}`);
});

//a48bed760d4fd4efc856bf867c4de67b-us21
//f82b786589
