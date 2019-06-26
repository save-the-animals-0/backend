# Backend project for "Save The Animals" build week

# by Alyssa Hatfield

> Backend is hosted at: https://protected-temple-41202.herokuapp.com/

# Campaign routes:

    .get    ("/campaigns")         **fetches all**
    .post   ("/campaigns")         **creates**
    .get    ("/campaigns/current") **grabs current via params.id**
    .get    ("/campaigns/:id")     **fetches by campaign id**
    .put    ("/campaigns/:id")     **updates**
    .delete ("/campaigns/:id")     **removes**

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

    .post ("/users/auth")           **Authenticates User**
    .post ("/users/register")       **Registers User**

## With verifications:

    .get ("/users/organizations")   **Fetches Organizations**
    .get ("/users/supporters")      **Fetches Supporters**
    .get ("/users/current")         **Fetches Current**
    .get ("/users/:id")             **Grabs user by ID**
    .put ("/users/:id")             **Updates user by ID**
    .delete ("/users/:id")          **Removes a user**


# User table takes in the following fields:

     email
     password
     name
     isOrg: { type: Boolean}
