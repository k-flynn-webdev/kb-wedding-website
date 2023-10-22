import { useLoading, useError } from "@/composables/utils";
import { API_ROUTE } from "@/consts";
import { USER_ANOM } from "@/consts";
import type { User } from "lucia";

export const initUser = () => {
  return { ...USER_ANOM };
};

export const useUser = () => {
  const user = useState<User>("user", () => {
    return initUser();
  });

  return user;
};

export const useAuthenticatedUser = () => {
  const user = useUser();

  return computed(() => {
    const userValue = unref(user);
    if (!userValue) {
      throw createError(
        "useAuthenticatedUser() can only be used in protected pages"
      );
    }
    return userValue;
  });
};

// todo add as composeable
// const user = useUser();
// if (user.value) {
//   if (user.value.emailVerified) {
//     await navigateTo("/email-verification");
//   }
// }

export const useUserAuth = () => {
  const { pending, setPending, clearPending } = useLoading();
  const { error, setError, clearError } = useError();

  const user = useUser();

  const userForm = ref({ email: "", password: "" });

  const loginAPI = async () => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE("login"), {
      method: "POST",
      body: {
        email: userForm.value.email,
        password: userForm.value.password,
      },
      redirect: "manual",
    })
      .then(({ data }) => {
        user.value = data.value[0];
        // todo empty response, send something useful
      })
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const signUpAPI = async () => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE("signup"), {
      method: "POST",
      body: {
        email: userForm.value.email,
        password: userForm.value.password,
      },
      redirect: "manual",
    })
      .then(({ data }) => {
        user.value = data.value[0];
        // todo empty response, send something useful
      })
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const resetPasswordAPI = async () => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE("password-reset"), {
      method: "POST",
      body: {
        email: userForm.value.email,
      },
      redirect: "manual",
    })
      .then(({ data }) => {
        user.value = data.value[0];
        // todo empty response, send something useful
      })
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const signOutAPI = async () => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE("logout"), {
      method: "POST",
      redirect: "manual",
    })
      .then(({ data }) => {
        user.value = data.value[0];
        // todo empty response, send something useful
      })
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  return {
    pending,
    error,
    userForm,
    loginAPI,
    signUpAPI,
    signOutAPI,
    resetPasswordAPI,
  };
};
