import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { ImagePath } from "../../../assets/images";
import { style } from "../../../theming/style/style";
import { AppStringUtils } from "../../../utils";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { AuthApi } from "../../../api/auth";
import { actionLogin } from "../../../store/reducer/login";
import { RoutePath } from "../../../routes/route-path";
import CommonTextInput from "../../../components/common/text-input";
import AlertBox from "../../../components/common/alert-box";
import Spinners from "../../../components/common/spinner";

export default function ForgotPassword() {
  const t = AppStringUtils();

  const router = useNavigate();

  const validationSchema = yup.object({
    username: yup
      .string()
      .min(3, t.usernameminVal)
      .max(15, t.usernamemaxVal)
      .required(t.usernameVal),
    password: yup.string().min(8, t.passLengthVal).required(t.passwordVal),
  });

  let copy = new Date().getFullYear();

  const dispatch = useDispatch();
  const [errMessage, setErrMessage] = React.useState("");
  const [progress, setProgress] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      apiCallLogin(values);
      resetForm();
    },
  });

  const apiCallLogin = (info: any) => {
    setErrMessage("");
    setProgress(true);
    AuthApi.apiCallLogin(info)
      .then((res: any) => {
        setProgress(false);
        dispatch(actionLogin(res.data));
        router(RoutePath.dashboard, { replace: true });
      })
      .catch((err: any) => {
        setProgress(false);
        setErrMessage(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setErrMessage("");
    }, 3000);
  }, [errMessage]);

  const textFieldValue = [
    {
      controlId: "floatingInput1",
      inputType: "email",
      label: "Email",
      name: "email",
      value: formik.values.email,
      handleChange: formik.handleChange,
      touchedValue: formik.touched.email,
      errorsValue: formik.errors.email,
    }
  ];

  return (
    <div style={{ ...style.pageBanner }}>
      <div style={{ ...style.loginContainer }}>
        <div style={{ ...style.loginForm }}>
          <div className="position-fixed top-0">
            <img src={ImagePath.synLogo} width="200" />
          </div>
          <Container
            className="text-center p-3 fs-2 fw-bolder"
            style={{ ...style.commonColor }}
          ></Container>
          <form style={{ ...style.formStyle }} onSubmit={formik.handleSubmit}>
            {textFieldValue.map((item: any, index) => (
              <CommonTextInput textFieldValue={item} key={index} />
            ))}

            <Container>
              {errMessage.length > 0 && (
                <AlertBox message={errMessage} variant="danger" />
              )}
            </Container>

            <Container className="text-center">
              {progress && <Spinners isShow={progress} />}
            </Container>

            {!progress && (
              <button
                type="submit"
                className="form-control rounded-5 p-2"
                style={{ ...style.loginButton }}
              >
                Send OTP
              </button>
            )}
          </form>
        </div>
        <div style={{ ...style.logoForm, position: "absolute" }}>
          <img src={ImagePath.LogoSVG} />
        </div>
      </div>
    </div>
  );
}
