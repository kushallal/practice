const papers = ["Nepali Paper", "White Paper", "Blotting Paper"];
export const providePapers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(papers);
    }, 5000);
  });
};

export const getPapers = async () => {
  const paperName = await providePapers();
  return paperName;
};
