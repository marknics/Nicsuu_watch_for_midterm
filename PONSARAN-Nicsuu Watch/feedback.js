document.getElementById("checkout").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const emailForm = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      feedback: document.getElementById("feedback").value,
    };
  
    try {
      const response = await fetch("https://hook.eu2.make.com/xffcexef4pt2wi23hyohtqxviq9jr8t7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailForm),
      });
  
      const data = await response.text();
      console.log(data);
      alert("Successfully sent your message!");
    } catch (err) {
      alert("Something went wrong, please try again.");
      console.error(err);
    }
  
    console.log(emailForm);
  });
  