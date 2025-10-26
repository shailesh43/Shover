import { useCallback } from "react";

export function useTriggerCmdK() {
  const triggerCmdK = useCallback(() => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: navigator.platform.includes("Mac"),
      ctrlKey: !navigator.platform.includes("Mac"),
      bubbles: true,
    });
    document.dispatchEvent(event);
  }, []);

  return triggerCmdK;
}
