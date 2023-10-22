import { useLoading, useError } from "@/composables/utils";
import { useUser } from "@/composables/auth";
import { API_ROUTE, API_GET_ALL_EVENT_RESOUCES, TYPE_VOTE } from "@/consts";

export const useVoteData = () => {
  const user = useUser();

  const { pending, setPending, clearPending } = useLoading();
  const { error, setError, clearError } = useError();

  const initVote = (): Array => {
    return [];
  };

  const voteData = useState<Array>("voteData", () => {
    return initVote();
  });

  const userVoteData = computed(
    (): Array =>
      voteData.value.filter((item) => item.user_id === user.value.userId)
  );

  const exUserVoteData = computed(
    (): Array =>
      voteData.value.filter(
        (item) => item.user_id !== user.value.userId && item.vote === true
      )
  );

  const totalVoteCount = computed(
    (): Array => voteData.value.filter((item) => item.vote === true).length
  );

  const getVoteLabelName = (vote): string =>
    vote.date_time_id ? `${vote.place_id}_${vote.date_time_id}` : vote.place_id;

  const voteTally = computed(
    (): Object =>
      voteData.value.reduce((acc, cur) => {
        const NAME_ID = getVoteLabelName(cur);

        if (!acc[NAME_ID])
          acc[NAME_ID] = {
            vote: 0,
            place_id: cur.place_id,
            date_time_id: cur.date_time_id,
          };

        if (cur.vote === true) acc[NAME_ID].vote += 1;

        return acc;
      }, {})
  );

  const placeDateVoteRatio = (place_id: string, date_time_id: string) =>
    computed((): Number => {
      const placeDateKey = getVoteLabelName({ place_id, date_time_id });
      const placeDateVote = voteTally.value[placeDateKey]
        ? voteTally.value[placeDateKey].vote
        : 0;
      return placeDateVote / totalVoteCount.value || 0;
    });

  const setVoteData = async (response: Array) => {
    response.forEach((item) => voteData.value.push(item));
  };

  const patchVoteData = async (response: Array) => {
    let updated = false;

    voteData.value = voteData.value.map((item) => {
      if (item.id === response[0].id) {
        updated = true;
        return { ...item, ...toValue(response[0]) };
      } else {
        return item;
      }
    });

    if (!updated) setVoteData(response);
  };

  const deleteVoteData = async (response: Object) => {
    voteData.value = voteData.value.filter((item) => item.id !== response.id);
  };

  const clearVoteData = () => {
    voteData.value = initVote();
  };

  const getVotesForPlace = (place_id: string, exclude: boolean): Array => {
    if (exclude) {
      return exUserVoteData.value.filter(
        (item) =>
          item.place_id === place_id && item.date_time_id === null && item.vote
      );
    } else {
      return userVoteData.value.filter(
        (item) => item.place_id === place_id && item.date_time_id === null
      );
    }
  };

  const getVotesForDate = (date_time_id: string, exclude: boolean): Array => {
    if (exclude) {
      return exUserVoteData.value.filter(
        (item) => item.date_time_id === date_time_id && item.vote
      );
    } else {
      return userVoteData.value.filter(
        (item) => item.date_time_id === date_time_id
      );
    }
  };

  const postVoteAPI = async (
    event_id: string,
    place_id: string,
    date_time_id: string,
    vote: Object
  ): Promise => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE(TYPE_VOTE, vote?.id), {
      method: vote?.id ? "PATCH" : "POST",
      body: { event_id, place_id, date_time_id, ...vote },
      watch: false,
    })
      .then(({ data }) => patchVoteData(data.value))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const getEventVotesAPI = async (event_id: string): Promise => {
    setPending();
    clearError();

    return await useFetch(API_GET_ALL_EVENT_RESOUCES(TYPE_VOTE, event_id), {
      method: "GET",
    })
      .then(({ data }) => {
        clearVoteData();
        setVoteData(data.value);
      })
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const getVoteAPI = async (vote_id: string): Promise => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE(TYPE_VOTE, vote_id), {
      method: "GET",
    })
      .then(({ data }) => setVoteData(data.value))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  return {
    pending,
    error,
    voteData,
    userVoteData,
    exUserVoteData,
    totalVoteCount,
    voteTally,
    placeDateVoteRatio,
    getVoteLabelName,
    getVotesForPlace,
    getVotesForDate,
    setVoteData,
    postVoteAPI,
    getEventVotesAPI,
    getVoteAPI,
  };
};
