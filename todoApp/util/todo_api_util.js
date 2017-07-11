export const apiUtil = () => (
  $.ajax({
    method: "GET",
    url: "/api/todos",
    dataType: "json"
  })
);
