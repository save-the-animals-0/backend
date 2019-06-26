# Backend project for "Save The Animals" build week

# by Alyssa Hatfield

> Backend is hosted at: https://protected-temple-41202.herokuapp.com/

# Campaign routes:

    .get    ("/", getAll)
    .post   ("/campaigns")  **creates**
    .get    ("/campaigns/current") **grabs current**
    .get    ("/campaigns/:id") **fetches by id**
    .put    ("/campaigns/:id") **updates**
    .delete ("/:id") **removes**

# User routes:

## Without verifications:

    .post ("/user/auth")
    .post ("/user/register")

## With verifications:

    .get ("/user/organizations")
    .get ("/user/supporters")
    .get ("/user/current")
    .get ("/user/:id")
    .put ("/user/:id")
    .delete ("/user/:id")
