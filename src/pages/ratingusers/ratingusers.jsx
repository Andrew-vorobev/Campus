import React from "react";
import "./ratingusers.css";
import MainTemplate from "../../features/main-template/main-template";
import Fade from "react-reveal/Fade";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, TableHead } from "@mui/material";
import RatingUsersRowsTable from "./ratingusers-rows-table";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

/**
 * This page for Rating users
 * @returns {JSX.Element}
 * @constructor
 */

const students = [
  {
    id: 1,
    avatar_student: require("../../assets/images/students/image(1).png"),
    name: "Дружинин Андрей",
    institut: "УрФУ",
    profession: "Дизайнер",
    rate: 9177,
  },
  {
    id: 2,
    avatar_student: require("../../assets/images/students/image(2).png"),
    name: "Александр Васильев",
    institut: "УрФУ",
    profession: "Аналитик",
    rate: 3064,
  },
  {
    id: 3,
    avatar_student: require("../../assets/images/students/image(3).png"),
    name: "Руслан Закиров",
    institut: "УрФУ",
    profession: "Backend-разработчик",
    rate: 9195,
  },
  {
    id: 4,
    avatar_student: require("../../assets/images/students/image(4).png"),
    name: "Андрей Воробьев",
    institut: "УрФУ",
    profession: "Frontend-разработчик",
    rate: 3128,
  },
  {
    id: 5,
    avatar_student: require("../../assets/images/students/image(5).png"),
    name: "Алексей Якубов",
    institut: "УрФУ",
    profession: "Product Manager",
    rate: 9892,
  },
  {
    id: 6,
    avatar_student: require("../../assets/images/students/image(6).png"),
    name: "Екатерина Лейвикова",
    institut: "УрГПУ",
    profession: "Менеджер",
    rate: 9012,
  },
  {
    id: 7,
    avatar_student: require("../../assets/images/students/image(6).png"),
    name: "Анна Смекалкина",
    institut: "УрГЭУ-СИНХ",
    profession: "Бизнес-аналитик",
    rate: 9011,
  },
  {
    id: 7,
    avatar_student: require("../../assets/images/students/image(6).png"),
    name: "Иван Иванов",
    institut: "РГППУ",
    profession: "Шахтер",
    rate: 9015,
  },
  {
    id: 7,
    avatar_student: require("../../assets/images/students/image(6).png"),
    name: "Михаил Барабанов",
    institut: "УрФУ",
    profession: "SEO-специалист",
    rate: 9243,
  },
  {
    id: 8,
    avatar_student: require("../../assets/images/students/image(6).png"),
    name: "Георгий Дмиитриченко",
    institut: "УрГУПС",
    profession: "Адвокат",
    rate: 5143,
  },
];

function RatingUsers() {
  return (
    <MainTemplate>
      <Fade>
        <div className="def-content mb-5">
          <h3 className="content-title mb-5">Рейтинг участников</h3>
          <TableContainer component={Paper} className="shadow-none">
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <Checkbox {...label} className="def-checkbox" />
                  </TableCell>
                  <TableCell>
                    <div className="head mt-3">
                      <b>Студент</b>
                      <input type="text" placeholder="Поиск" />
                    </div>
                  </TableCell>
                  <TableCell align="center" className="flex-wrap">
                    <div className="head2 mt-4">
                      <div className="content1">
                        <b>ВУЗ</b>
                        <div className="icons">
                          <i className="fa-solid fa-caret-up"></i>
                          <i className="fa-solid fa-caret-down"></i>
                        </div>
                      </div>
                      <div className="content2">
                        <span>Все</span>
                        <i className="fa-regular fa-chevron-down c-black" />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center" className="flex-wrap">
                    <div className="head2 mt-4">
                      <div className="content1">
                        <b>Профессия</b>
                        <div className="icons">
                          <i className="fa-solid fa-caret-up"></i>
                          <i className="fa-solid fa-caret-down"></i>
                        </div>
                      </div>
                      <div className="content2">
                        <span>Все</span>
                        <i className="fa-regular fa-chevron-down c-black" />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className="head mt-3">
                      <b>Рейтинг</b>
                      <input type="text" placeholder="Поиск" />
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <b>Действия</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/*{Array.from({ length: 10 }).map(() => (*/}
                {/*  <RatingUsersRowsTable key={RandomKey()} />*/}
                {/*))}*/}
                {students.map((item, index) => (
                  <RatingUsersRowsTable key={index} {...item} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Fade>
    </MainTemplate>
  );
}

export default RatingUsers;
