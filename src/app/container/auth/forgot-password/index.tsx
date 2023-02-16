import React from "react";
import { Container } from "react-bootstrap";
import { ImagePath } from "../../../assets/images";
import { style } from "../../../theming/style/style";

export default function ForgotPassword() {
  return (
    <div style={{ ...style.pageBanner }}>
      <div style={{ ...style.loginContainer }}>
        <div className="position-fixed top-0">
          <img src={ImagePath.synLogo} width="250" />
        </div>
        <Container
          className="text-center p-3 fs-2 fw-bolder"
          style={{ ...style.commonColor }}
        >
          {/* {t.login} */}
        </Container>
        
        <div style={{ ...style.logoForm, position: "absolute" }}>
          <img src={ImagePath.LogoSVG} />
        </div>
      </div>
    </div>
  );
}
