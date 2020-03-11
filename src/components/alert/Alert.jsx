import React, { useEffect, useState } from "react";
import { AlertComponent } from "../layouts/AlertComponent/AlertComponent";
import {RoundOutline} from '../layouts/Buttons/RoundOutline/RoundOutline';
export function Alert() {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    document.getElementById("button").addEventListener("click", () => {
      setAlert(true);
      setTimeout(() => setAlert(false),1000);
    });
  }, []);

  return (
    <>
      {alert ? (
        <div className="container" style={{transition: 'all ease 500s'  }}>
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
      ) : null}
      <RoundOutline type="primary" value="Show ALL Alerts" id="button"/>
    </>
  );
}
