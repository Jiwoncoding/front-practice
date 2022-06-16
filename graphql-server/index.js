// ApolloServer는 GraphQL 서버 인스턴스를 만들어주는 생성자
// gql은 자바스크립트로 GraphQL 스키마를 정의하기 위해 사용되는 템플릿 리터럴 태그
const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
// typeDefs 변수에 gql을 이용하여 GraphQL 스키마 타입을 정의
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
// resolvers 변수에 GraphQL 스키마를 통해 제공할 데이털르 정의하는 함수를 담은 객체 할당
const resolvers = {
  Query: {
    hello: () => 'world',
}
};

// typeDefs와 resolvers를 ApolloServer 생성자에 넘겨 
// GraphQL 서버 인스턴스를 생성하고 그 서버를 시작해주는 코드
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});