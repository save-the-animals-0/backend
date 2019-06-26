# Backend project for "Save The Animals" build week

# by Alyssa Hatfield

> Backend is hosted at: https://protected-temple-41202.herokuapp.com/

# Campaign routes:

    .get("/", getAll)
    .post("/", create)
    .get("/current", getCurrent)
    .get("/:id", getById)
    .put("/:id", update)
    .delete("/:id", _delete)

# User routes:

## Without verifications:

    .post("/auth")
    .post("/register")

## With verifications:

    .get ("/organizations")
    .get ("/supporters")
    .get ("/current")
    .get ("/:id")
    .put ("/:id")
    .delete ("/:id")
