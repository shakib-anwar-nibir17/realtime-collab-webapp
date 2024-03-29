"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorite } from "./empty-fav";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  console.log(orgId);
  const data = useQuery(api.boards.get, { orgId });
  console.log(data);

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorite />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }
  return <div>{JSON.stringify(data)}</div>;
};

export default BoardList;
