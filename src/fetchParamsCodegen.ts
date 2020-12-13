
export const queryParams = function () {
  let token = (typeof window !== 'undefined')//Check if on browser
    ? localStorage.getItem("lior")! : ""; //Try to get it from localStorage

  return {
    endpoint: process.env.NEXT_PUBLIC_SCHEMA_PATH || "http://localhost:8080/v1/graphqllll",
    fetchParams: {
      headers: { token }
    }
  }
}();