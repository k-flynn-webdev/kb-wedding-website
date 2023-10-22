import { useEventData } from "@/composables/event";
import { usePlaceData } from "@/composables/place";
import { useDateTimeData } from "@/composables/date-time";
import { useVoteData } from "@/composables/vote";

export const useInitEvent = () => {
  const { createEventAPI, getEventAPI } = useEventData();
  const { getEventPlacesAPI } = usePlaceData();
  const { getEventDateTimesAPI } = useDateTimeData();
  const { getEventVotesAPI } = useVoteData();

  const route = useRoute();

  const init = () => {
    if (!!route?.params?.id) {
      getEventAPI(route.params.id);
      getEventPlacesAPI(route.params.id);
      getEventDateTimesAPI(route.params.id);
      getEventVotesAPI(route.params.id);
    } else {
      createEventAPI();
    }
  };

  init();
};
