export const fetchQuizzes = (filter) => (
  $.ajax({
    method: "GET",
    url: "api/quizzes",
    data: filter
  })
)

export const fetchQuiz = (id) => (
  $.ajax({
    method: "GET", 
    url: `api/quizzes/${id}`
  })
)

export const createQuiz = quiz => {
  debugger;
  return ($.ajax({
    method: "POST", 
    url: "api/quizzes",
    data: { quiz }
  })
  )
}

export const updateQuiz = quiz => (
  $.ajax({
    method: "PATCH",
    url: `api/quizzes${quiz.id}`,
    data: { quiz }
  })
)

export const deleteQuiz = id => (
  $.ajax({
    method: "DELETE", 
    url: `api/quizzes/${id}`
  })
)