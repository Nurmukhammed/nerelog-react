import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { deepOrange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import LazyLoad from "react-lazyload";

const Spinner = () => (
  <div className="loading" style={{ textAlign: "center" }}>
    <svg
      width="70"
      height="70"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#5821d8"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

const CardList = ({ ...props }: any) => {
  return (
    <div className="list-container">
      <Box sx={{ width: "100%" }}>
        {props.locs.slice(0, 50).map((data: any) => (
          <React.Fragment key={data.id}>
            <LazyLoad height={250} overflow={true} placeholder={<Spinner />}>
              {props.clients.map((client: any) => (
                <React.Fragment key={client.id}>
                  <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                      <Grid item xs sx={{ display: "flex" }}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>
                          {client.name.substring(0, 1)}
                        </Avatar>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ marginLeft: "20px" }}
                          onClick={() => props.setValue(client)}
                        >
                          {client.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography gutterBottom component="div">
                          {data.price} KZT
                        </Typography>
                      </Grid>
                      <Grid item sx={{ marginLeft: "60px", marginTop: "15px" }}>
                        <Typography color="text.secondary" variant="body2">
                          Тип заявки:
                          {data.type === "delivery"
                            ? " Доставка"
                            : data.type === "pickup"
                            ? " Забор"
                            : ""}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider variant="middle" />
                </React.Fragment>
              ))}
            </LazyLoad>
          </React.Fragment>
        ))}
      </Box>
    </div>
  );
};

export default CardList;
