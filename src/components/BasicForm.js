import useForm from "../hooks/form-hook";

const BasicForm = (props) => {
  const validateName = (nameVal) => nameVal.trim().length !== 0;
  const {
    value: fNameValue,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    changeInputHandler: fNameChangeHandler,
    blurInputHandler: fNameBlurHandler,
    rest: resetFName,
  } = useForm(validateName);

  const {
    value: lNameValue,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    changeInputHandler: lNameChangeHandler,
    blurInputHandler: lNameBlurHandler,
    rest: resetLName,
  } = useForm(validateName);

  const validateEmail = (val) => val.includes("@");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeInputHandler: emailChangeHandler,
    blurInputHandler: emailBlurHandler,
    rest: resetEmail,
  } = useForm(validateEmail);

  let formIsValid = false;
  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log("Submit Handler triggered!!");

    //  Send to the server
    console.log(fNameValue);
    console.log(lNameValue);
    console.log(emailValue);

    // Reset inputs
    resetFName();
    resetLName();
    resetEmail();
  };

  const fNameInputClasses = fNameHasError
    ? "form-control invalid"
    : "form-control";

  const lNameInputClasses = lNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <div className={fNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={fNameValue}
          />
          {fNameHasError && <p className="error-text">Invalid name input.</p>}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={lNameValue}
          />
          {lNameHasError && <p className="error-text">Invalid name input.</p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && <p className="error-text">Invalid Email address</p>}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
