import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  withStyles,
  Avatar,
  Menu,
  MenuItem,
  SwipeableDrawer,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import AddUserMobile from "../AddUser/AddUserMobile";
import { deleteEmployee, getEmployees } from "../Api/api";
import image from "../HomePage/object.png";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function UserListMobile() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [state, setState] = React.useState(false);
  const [row, setRow] = React.useState();
  const [tabledata, setTabledata] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    getEmployees().then((res) => {
      const tempdata = res.data.map((item) => {
        return {
          id: `${item.empid}`,
          firstname: `${item.emp_first_name}`,
          lastname: `${item.emp_last_name}`,
          email: `${item.emp_email}`,
          phone: `${item.emp_phone}`,
        };
      });

      setTabledata(tempdata);
    });
  }, [render]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (row) => {
    setRow(row);
    setState(true);
  };

  const handleDelete = (id) => {
    deleteEmployee(id);
    setRender(!render);
  };

  const handleAdd = () => {
    navigate("/userHome/addUser");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    navigate("/");
  };

  const Editables = (row) => {
    return (
      <>
        <Button
          style={{
            marginRight: "10px",
            fontSize: "unset",
            fontWeight: "unset",
          }}
          variant='contained'
          onClick={() => handleEdit(row)}
          className={classes.button}
        >
          Edit
        </Button>
        <Button
          variant='contained'
          className={classes.button}
          onClick={() => handleDelete(row.row.phone)}
          style={{ fontSize: "unset", fontWeight: "unset" }}
        >
          Delete
        </Button>
      </>
    );
  };

  const columns = [
    { id: "firstname", label: " First Name", minWidth: 170 },
    { id: "lastname", label: " Last Name", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 200 },
    {
      id: "phone",
      label: "Phone Number",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "edit",
      label: "",
      minWidth: 200,
    },
  ];
  return (
    <div className={classes.parent}>
      <div className={classes.HeaderMobile}>
        <img
          src={image}
          alt='Company logo'
          style={{ height: "70%", marginLeft: "40px" }}
        ></img>
        <Avatar
          style={{ marginRight: "40px" }}
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
          onClick={handleClick}
        />
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>LogOut</MenuItem>
        </Menu>
      </div>
      <Typography variant='h4' style={{ marginBottom: "20px" }}>
        Welcome to EMS
      </Typography>
      <div className={classes.containerMobile}>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
                <StyledTableCell
                  key={"edit"}
                  style={{ minWidth: 200 }}
                ></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tabledata
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <StyledTableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <Editables row={row} />
                      </TableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component='div'
          count={tabledata.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <SwipeableDrawer
          anchor={"bottom"}
          open={state}
          onClose={toggleDrawer(false)}
        >
          <AddUserMobile edit={true} row={row} />
        </SwipeableDrawer>
        <Button
          style={{ margin: "40px", fontSize: "unset", fontWeight: "unset" }}
          variant='contained'
          onClick={handleAdd}
          className={classes.button}
        >
          Add New User
        </Button>
      </div>
    </div>
  );
}

export default UserListMobile;
