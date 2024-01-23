const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
  const maxMarks = 400;
  event.preventDefault();

  const formData = new FormData(calculateFormEl);

  const data = {};

  formData.forEach((value, key) => {
    data[key] = +value;
  });

  console.log(data)
  const totalMarks = (data.maths + data.science + data.hindi + data.english).toFixed(2);
  const percentage =   Math.round((totalMarks / maxMarks) * 100);
  resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
};
