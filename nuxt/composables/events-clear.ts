import { useEventData } from "@/composables/event";
import { usePlaceData } from "@/composables/place";
import { useDateTimeData } from "@/composables/date-time";

export const useClearEvent = () => {
  const { clearEventData } = useEventData();
  const { clearPlaceData } = usePlaceData();
  const { clearDateTimeData } = useDateTimeData();

  clearEventData();
  clearPlaceData();
  clearDateTimeData();
};
