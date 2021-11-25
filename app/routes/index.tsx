import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import { gql, useQuery } from "@apollo/client";

const CHARACTERS_QUERY = gql`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        prev
        pages
        next
        count
      }
      results {
        type
        species
        name
        image
        id
      }
    }
  }
`;

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const { data } = useQuery(CHARACTERS_QUERY, {
    variables: {
      page: 1,
    },
  });

  return <div className="remix__page">{JSON.stringify(data)}</div>;
}
