import Spinners from "../../../components/common/spinner";
import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { style } from "../../../theming/style/style";
import { AppStringUtils } from "../../../utils";
import CommonTextInput from "../../../components/common/text-input";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { AuthApi } from "../../../api/auth";
import { ImagePath } from "../../../assets/images";
import { RoutePath } from "../../../routes/route-path";
import AlertBox from "../../../components/common/alert-box";
import * as yup from "yup";
import { actionReset } from "../../../store/reducer/reset";

export default function ForgotPassword() {
  const t = AppStringUtils();

  const router = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .min(13, t.emailminVal)
      .max(30, t.usernamemaxVal)
      .required(t.emailVal),
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
      email: "",
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      apiCallVerifyOtp(values);
      resetForm();
    },
  });

  const apiCallVerifyOtp = (info: any) => {
    setErrMessage("");
    setProgress(true);
    AuthApi.apiVerifyOtp(info)
      .then((res: any) => {
        setProgress(false);
        dispatch(actionReset(res.data));
        router(RoutePath.resetPassword, { replace: true });
      })
      .catch((err: any) => {
        setProgress(false);
        setErrMessage(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setErrMessage("");
    }, 2000);
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
    },
    {
      controlId: "floatingInput2",
      inputType: "password",
      label: "OTP*",
      name: "password",
      value: formik.values.otp,
      handleChange: formik.handleChange,
      touchedValue: formik.touched.otp,
      errorsValue: formik.errors.otp,
      iconsValue: showPassword,
      handleShowPassword: handleShowPassword,
    },
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
          >
            {t.resetPassword}
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
                Verify OTP
              </button>
            )}
          </form>
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
          <img src={ImagePath.LogoSVG} />
        </div>
      </div>
    </div>
  );
}
