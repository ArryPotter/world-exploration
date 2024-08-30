import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from './schema.js'
import db from './_db.js'

const resolvers = {
    Query: {
        games(){
            return db.games
        },
        game(_, args){
            return db.games.find((data) => data.id === args.id )
        },
            authors(){
            return db.authors
        },
        author(_, args){
            return db.authors.find((data) => data.id === args.id )
        },
        reviews(){
            return db.reviews
        },
        review(_, args){
            return db.reviews.find((data) => data.id === args.id )
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,    
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log(`server ready at: ${url}`);