import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from './containers/PokeminsContainer'
function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/'
  });

  return (
<ApolloProvider client={client}>
    <main>
      <PokemonsContainer />
    </main>

</ApolloProvider>
  );
}

export default App;
