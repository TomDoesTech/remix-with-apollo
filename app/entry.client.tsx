import { ApolloProvider } from "@apollo/client";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { initApollo } from "./context/apollo";

function Client() {
  const client = initApollo(false);

  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  );
}

hydrate(<Client />, document);
