const fetchReport = ({ widget_page_id }) => {
  fetch(
    `https://demo2019.tapclicks.com/server/api/dash/${widget_page_id}?all=true`,
    {
      headers: {
        Cookie: "adminhtml=7gl7n2o8guc2fpm45e71mfmnbu",
      },
      method: "GET",
    }
  );
};
