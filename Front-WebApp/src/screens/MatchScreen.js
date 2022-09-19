/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import logo from "../assets/logo.png";
import { AiFillPlusSquare } from "react-icons/ai";
import { Card } from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useHistory } from "react-router";
import "../App.css";

const matchScreen = () => {
  const history = useHistory();
  return (
    <div className="containerB">
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img src={logo} alt="logo" className="LogoA" />
        <div style={{ textAlign: "center", height: "500px" }}>
          <ButtonBase onClick={() => console.log("test")}>
            <AiFillPlusSquare
              size="50px"
              onClick={() => history.push("/home")}
            />
          </ButtonBase>
          <p>choisissez votre Match !</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            width: "50%",
            height: "52%",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 350,
            left: 380,
            bottom: "-20px",
            right: "-20px",
            overflow: "scroll",
            alignItems: "center",
            color: "black",
            borderRadius: "10px",
          }}
        >
          <Card
            style={{
              width: "32rem",
              borderStyle: "solid",
              height: "100px",
              margin: 20,
              backgroundColor: "#ffe4d0",
            }}
          >
            <ButtonBase
              style={{ width: "100%" }}
              onClick={() => history.push("/formulaireMatchAbonne")}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    color: " #f37011 ",
                    margin: 10,
                  }}
                >
                  SBIHI Hicham
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  23/08/2021 19h-20h
                </Card.Subtitle>
                <Card.Text>Terrain A</Card.Text>
              </Card.Body>
            </ButtonBase>
          </Card>

          <Card
            style={{
              width: "32rem",
              borderStyle: "solid",
              height: "100px",
              margin: 20,
              backgroundColor: "#ffe4d0",
            }}
          >
            <ButtonBase
              style={{ width: "100%" }}
              onClick={() => console.log("test")}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    color: " #f37011 ",
                    margin: 10,
                  }}
                >
                  SBIHI Hicham
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  23/08/2021 19h-20h
                </Card.Subtitle>
                <Card.Text>Terrain A</Card.Text>
              </Card.Body>
            </ButtonBase>
          </Card>

          <Card
            style={{
              width: "32rem",
              borderStyle: "solid",
              height: "100px",
              margin: 20,
              backgroundColor: "#ffe4d0",
            }}
          >
            <ButtonBase
              style={{ width: "100%" }}
              onClick={() => console.log("test")}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    color: " #f37011 ",
                    margin: 10,
                  }}
                >
                  SBIHI Hicham
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  23/08/2021 19h-20h
                </Card.Subtitle>
                <Card.Text>Terrain A</Card.Text>
              </Card.Body>
            </ButtonBase>
          </Card>

          <Card
            style={{
              width: "32rem",
              borderStyle: "solid",
              height: "100px",
              margin: 20,
              backgroundColor: "#ffe4d0",
            }}
          >
            <ButtonBase
              style={{ width: "100%" }}
              onClick={() => console.log("test")}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    color: " #f37011 ",
                    margin: 10,
                  }}
                >
                  SBIHI Hicham
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  23/08/2021 19h-20h
                </Card.Subtitle>
                <Card.Text>Terrain A</Card.Text>
              </Card.Body>
            </ButtonBase>
          </Card>

          <Card
            style={{
              width: "32rem",
              borderStyle: "solid",
              height: "100px",
              margin: 20,
              backgroundColor: "#ffe4d0",
            }}
          >
            <ButtonBase
              style={{ width: "100%" }}
              onClick={() => console.log("test")}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    color: " #f37011 ",
                    margin: 10,
                  }}
                >
                  SBIHI Hicham
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  23/08/2021 19h-20h
                </Card.Subtitle>
                <Card.Text>Terrain A</Card.Text>
              </Card.Body>
            </ButtonBase>
          </Card>

          <Card
            style={{
              width: "32rem",
              borderStyle: "solid",
              height: "100px",
              margin: 20,
              backgroundColor: "#ffe4d0",
            }}
          >
            <ButtonBase
              style={{ width: "100%" }}
              onClick={() => console.log("test")}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    color: " #f37011 ",
                    margin: 10,
                  }}
                >
                  SBIHI Hicham
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  23/08/2021 19h-20h
                </Card.Subtitle>
                <Card.Text>Terrain A</Card.Text>
              </Card.Body>
            </ButtonBase>
          </Card>

          <Card
            style={{
              width: "32rem",
              borderStyle: "solid",
              height: "100px",
              margin: 20,
              backgroundColor: "#ffe4d0",
            }}
          >
            <ButtonBase
              style={{ width: "100%" }}
              onClick={() => console.log("test")}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    color: " #f37011 ",
                    margin: 10,
                  }}
                >
                  SBIHI Hicham
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  23/08/2021 19h-20h
                </Card.Subtitle>
                <Card.Text>Terrain A</Card.Text>
              </Card.Body>
            </ButtonBase>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default matchScreen;
