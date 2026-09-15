import { ROUTES } from "@/constants/routes";
import { useRouter } from "expo-router";
import { useCallback } from "react";

// Closes a sheet safely: goes back when there is history, otherwise
// (deep link, web refresh) replaces with Home instead of doing nothing.
export function useDismiss() {
  const router = useRouter();
  return useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace(ROUTES.home);
    }
  }, [router]);
}
