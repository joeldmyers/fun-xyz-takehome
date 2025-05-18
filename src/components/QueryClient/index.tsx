"use client";

import { FC, PropsWithChildren } from "react";
import {
  QueryClient as ReactQueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new ReactQueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 5000,
      staleTime: 500,
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export const QueryClient: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
