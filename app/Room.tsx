"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider publicApiKey={"pk_prod_WtY1lQwZzXrZWWQpGRJ_IXTr7x2hwZzP-o9XWjLOJo22oe1Qy3F1r_5QZU0s3hpf"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Work-Site-Fetching…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
