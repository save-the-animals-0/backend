# Backend project for "Save The Animals" build week

# by Alyssa Hatfield

> Backend is hosted at: https://protected-temple-41202.herokuapp.com/

# Campaign routes:

    .get    ("/")                  **fetches all**
    .post   ("/campaigns")         **creates**
    .get    ("/campaigns/current") **grabs current**
    .get    ("/campaigns/:id")     **fetches by id**
    .put    ("/campaigns/:id")     **updates**
    .delete ("/:id")               **removes**

# Campaign table takes in the following fields:

      campaignName
      fundingGoal
      deadline
      location
      urgencyLevel
      species
      description

# User routes:

## Without verifications:

    .post ("/user/auth")           **Authenticates User**
    .post ("/user/register")       **Registers User**

## With verifications:

    .get ("/user/organizations")   **Fetches Organizations**
    .get ("/user/supporters")      **Fetches Supporters**
    .get ("/user/current")         **Fetches Current**
    .get ("/user/:id")             **Grabs user by ID**
    .put ("/user/:id")             **Updates user by ID**
    .delete ("/user/:id")          **Removes a user**


# User table takes in the following fields:

     email
     password
     name
     isOrg: { type: Boolean}
