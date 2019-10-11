export const fetchQuizzes = (quizzes) => (
  $.ajax({
    method: "GET",
    url: "api/quizzes",
    data: {quizzes}
  })
)