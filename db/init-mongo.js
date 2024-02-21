db.getSiblingDB("books").createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [
            {
                role: "readWrite",
                db: "books"
            }
        ]
    }
);
