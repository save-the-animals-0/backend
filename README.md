# Backend Project for "Save The Animals" Build Week

# By Alyssa Hatfield

> Backend is hosted at: https://protected-temple-41202.herokuapp.com/

# Campaign Routes:

    .get    ("/campaigns")         - Fetches all campaigns
    .post   ("/campaigns")         - Creates a campaign
    .get    ("/campaigns/current") - Grabs current campaign via params id
    .get    ("/campaigns/:id")     - Fetches by campaign id
    .put    ("/campaigns/:id")     - Updates a campaign
    .delete ("/campaigns/:id")     - Removes a campaign

# Campaign table takes in the following fields:

      campaignName
      fundingGoal
      fundingRaised
      deadline
      location
      urgencyLevel
      species
      description

# Campaign POST Template:

``` 
 {   
    "campaignName": "Save the Whales",
	"fundingGoal": 10000,
    "fundingRaised": 5000,
	"deadline": "1.20.2020",
	"location": "Japan",
	"urgencyLevel": "High",
	"species": "whale",
	"description": "Preserve and protect the ocean and its inhabitants."
 }
```
# User Routes:

> Set the header Authorization as "`Bearer <token>`" before calling the routes of User.

## Without Verifications:

    .post ("/users/auth")            - Authenticates User
    .post ("/users/register")        - Registers User

## With Verifications:

    .get ("/users/organizations")    - Fetches Organizations
    .get ("/users/supporters")       - Fetches Supporters
    .get ("/users/current")          - Fetches Current
    .get ("/users/:id")              - Grabs user by ID
    .put ("/users/:id")              - Updates user by ID
    .delete ("/users/:id")           - Removes a user


# User table takes in the following fields:

     email
     password
     name
     isOrg: { type: Boolean}

# User POST template

>Supporter
```
{
	"email": "fff@fff.com",
	"password": "fff",
	"name": "Jane",
	"isOrg": false,
}
```
>Organization

```
{
	"email": "fff@fff.com",
	"password": "fff",
	"name": "ASPCA",
	"isOrg": true,
}
```

# Image Upload Routes (Stretch Goal):

    .get    ("/uploads")          - Grabs images
    .post   ("/uploads")          - Uploads an image
    .delete ("/uploads/:id")      - Deletes an image by ID