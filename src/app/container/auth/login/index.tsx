import React, { useEffect } from "react";
import Spinners from "../../../components/common/spinner";
import { Container } from "react-bootstrap";
import { AuthApi } from "../../../api/auth";
import { CommonColors, style } from "../../../theming/style/style";
import { Link } from "react-router-dom";
import { AppStringUtils } from "../../../utils";
import * as yup from "yup";
import { useFormik } from "formik";
import { ImagePath } from "../../../assets/images";
import { useDispatch } from "react-redux";
import { actionLogin } from "../../../store/reducer/login";
import CommonTextInput from "../../../components/common/text-input";
import { useNavigate } from "react-router";
import AlertBox from "../../../components/common/alert-box";
import { RoutePath } from "../../../routes/route-path";

export default function Login() {
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
  const [showPassword, setPassword] = React.useState(false);
  const [progress, setProgress] = React.useState(false);

  const handleShowPassword = () => {
    setPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
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
      inputType: "text",
      label: "Username",
      name: "username",
      value: formik.values.username,
      handleChange: formik.handleChange,
      touchedValue: formik.touched.username,
      errorsValue: formik.errors.username,
    },
    {
      controlId: "floatingInput2",
      inputType: "password",
      label: "Password",
      name: "password",
      value: formik.values.password,
      handleChange: formik.handleChange,
      touchedValue: formik.touched.password,
      errorsValue: formik.errors.password,
      iconsValue: showPassword,
      passwordIcon: "basic-addon2",
      handleShowPassword: handleShowPassword,
    },
  ];

  return (
    <>
      <div style={{ ...style.pageBanner }}>
        <div style={{ ...style.loginContainer }}>
          <div style={{ ...style.loginForm }}>
            <div className="position-fixed top-0">
              <img src={ImagePath.synLogo} alt={t.imgAlternative} width="250" />
            </div>

            <Container
              className="text-center p-3 fs-2 fw-bolder"
              style={{ ...style.commonColor }}
            >
              {t.login}
            </Container>

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
                  Login
                </button>
              )}
            </form>

            <Container
              className="text-center mt-3"
              style={{ ...CommonColors.firstCommon }}
            >
              <Link
                to={RoutePath.forgotPassword}
                style={{ ...style.linkForgot }}
              >
                {t.fogotPassText}
              </Link>
            </Container>

            <Container className="text-center mt-5">
              <Container style={{ ...style.textColorCommon }}>
                {t.synText}
              </Container>
              <Container style={{ ...style.textColorCommon }}>
                {`Copyright © ${copy}`}{" "}
                <span style={{ ...style.synTech }}>{t.synTech}</span>{" "}
                {t.allRightsText}
              </Container>
            </Container>
          </div>

          <div style={{ ...style.logoForm, position: "absolute" }}>
            <img src={ImagePath.LogoSVG} alt={t.imgAlternative} />
          </div>
        </div>
      </div>
    </>
  );
}
