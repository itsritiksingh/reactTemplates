import React from "react";
import { AlertComponent } from "../layouts/AlertComponent/AlertComponent";

export function Alert() {
  return (
    <>
      <div className="main">
        <div className="container">
          <h1>Simple Alert</h1>
          <AlertComponent color="alert-primary">
            <div>
              <p>This is Primary alert</p>
            </div>
          </AlertComponent>
          <AlertComponent color="alert-success">
            <div>
              <p>This is Success alert</p>
            </div>
          </AlertComponent>
          <AlertComponent color="alert-danger">
            <div>
              <p>This is Danger alert</p>
            </div>
          </AlertComponent>
          <AlertComponent color="alert-warning">
            <div>
              <p>This is Warning alert</p>
            </div>
          </AlertComponent>
          <AlertComponent color="alert-info">
            <div>
              <p>This is Info alert</p>
            </div>
          </AlertComponent>
          <AlertComponent color="alert-light">
            <div>
              <p>This is Light alert</p>
            </div>
          </AlertComponent>
          <AlertComponent color="alert-dark">
            <div>
              <p>This is Dark alert</p>
            </div>
          </AlertComponent>
        </div>

        <div className="container">
          <h1>Additional Content</h1>
          <AlertComponent color="alert-dark">
            <div>
              <h4>This is alert with additional content</h4>
              <p>This box contains the content of alert.</p>
            </div>
          </AlertComponent>
        </div>
      </div>
    </>
  );
}
