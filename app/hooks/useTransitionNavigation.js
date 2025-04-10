import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTransitionStore } from "../lib/transitionStore"; // adjust the import as needed

export function useTransitionNavigation() {
  const router = useRouter();
  const destination = useTransitionStore((state) => state.destination);
  const clearDestination = useTransitionStore(
    (state) => state.clearDestination
  );
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    if (destination) {
      setShouldExit(true);
    }
  }, [destination]);

  const handleExitComplete = () => {
    if (destination) {
      router.push(destination);
      clearDestination();
    }
  };

  return { shouldExit, handleExitComplete };
}
