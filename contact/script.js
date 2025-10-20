let error = [];

function handleSubmit(e) {
  e.preventDefault();

  const name = document.querySelector("input[name='name']");
  const email = document.querySelector("input[name='email']");
  const subject = document.querySelector("input[name='subject']");
  const message = document.querySelector("textarea[name='message']");

  const fields = [name, email, subject, message];

  const checkMail = (string) =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(string);

  try {
    fields.forEach((field) => {
      const name = field.getAttribute("name");
      if (!field.value || field.value.trim() === "" || field.value.length < 1) {
        field.style.borderColor = "red";
        const small = field.previousElementSibling;

        small.innerHTML = `Please fill in the <strong>${name.toUpperCase()}</strong> field`;
        small.style.display = "block";

        error.push(name);
        const newError = [...new Set(error)];

        error = newError;
      } else {
        field.style.borderColor = "#1074e6";
        const small = field.previousElementSibling;

        small.style.display = "none";

        const newError = error.filter((err) => err !== name);
        error = newError;
      }

      if (field.getAttribute("name") === "email" && field.value.length) {
        if (!checkMail(field.value)) {
          field.style.borderColor = "red";
          const small = field.previousElementSibling;

          small.innerHTML = "Invalid email";
          small.style.display = "block";

          error.push(name);
          const newError = [...new Set(error)];

          error = newError;
        } else {
          field.style.borderColor = "#1074e6";
          const small = field.previousElementSibling;

          small.style.display = "none";

          const newError = error.filter((err) => err !== name);
          error = newError;
        }
      }

      if (field.getAttribute("name") === "message" && field.value.length < 10) {
        if (!checkMail(field.value)) {
          field.style.borderColor = "red";
          const small = field.previousElementSibling;

          small.innerHTML = "Message must be greater than 10 characters";
          small.style.display = "block";

          error.push(name);
          const newError = [...new Set(error)];

          error = newError;
        } else {
          field.style.borderColor = "#1074e6";
          const small = field.previousElementSibling;

          small.style.display = "none";

          const newError = error.filter((err) => err !== name);
          error = newError;
        }
      }
    });

    if (!error.length) {
      document.querySelector("small.success").style.display = "block";
    } else document.querySelector("small.success").style.display = "none";
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("form").addEventListener("submit", handleSubmit);
