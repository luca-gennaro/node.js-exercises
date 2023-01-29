import session from "express-session"

export function initSessionMiddleware() {
    return session({
        secret: "0284411b5bd09ce1ac04baa01e7a04fa1b4f255310b20e3cba5b87d035dcb485",
        resave: false,
        saveUninitialized: false
    })
}