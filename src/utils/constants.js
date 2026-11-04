export const Netflix_Logo =
  "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg";

export const USER_AVATAR = "https://img.icons8.com/nolan/1200/user-default.jpg";

export const Netflix_Background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const NowPlayingMovies_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const PopularMovies_API_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TopRatedMovies_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UpcomingMovies_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const Img_Poster_Path = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
];

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
