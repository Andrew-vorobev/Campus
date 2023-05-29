import React from "react";
import { RandomKey } from "../../utils/helpers";
import TableCell from "@mui/material/TableCell";
import { Checkbox, Chip } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import TableRow from "@mui/material/TableRow";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RatingUsersRowsTable(props) {
  const { name, rate, avatar_student, institut, profession } = props;
  return (
    <TableRow
      key={RandomKey()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Checkbox {...label} className="def-checkbox" />
      </TableCell>
      <TableCell align="left">
        <div className="d-flex justify-content-start align-items-center TitleName">
          <img
            src={avatar_student}
            alt="user avatar"
            className="rounded-circle me-2"
          />
          {name}
        </div>
      </TableCell>

      <TableCell align="left">
        <span className="Title2">{institut}</span>{" "}
      </TableCell>

      <TableCell align="left">
        <span className="Title2">{profession}</span>{" "}
      </TableCell>
      <TableCell align="left">
        <Chip label={rate} variant="outlined" className="status-block" />
      </TableCell>
      <TableCell align="center">
        <Dropdown>
          <Dropdown.Toggle variant="outline-light" className="nav-dropdown">
            <i className="fa-solid fa-ellipsis-vertical c-black fs-5" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Изменить</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Удалить</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </TableCell>
    </TableRow>
  );
}

export default RatingUsersRowsTable;
