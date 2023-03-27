import {
  Avatar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getEmployees } from "../Api/api";
import EditUser from "../EditUser/EditUser";
import { useStyles } from "./style";
import image from "../HomePage/object.png";
import CloseIcon from "@material-ui/icons/Close";

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

function UserListTable() {
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
          className={classes.button}
          style={{ marginRight: "10px" }}
          variant='contained'
          onClick={() => handleEdit(row)}
        >
          Edit
        </Button>
        <Button
          variant='contained'
          className={classes.button}
          onClick={() => handleDelete(row.row.phone)}
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
  ];
  return (
    <div className={classes.parent}>
      <div className={classes.Header}>
        <img
          src={image}
          alt='Company logo'
          style={{ height: "70%", marginLeft: "105px" }}
        ></img>
        <Avatar
          style={{ marginRight: "105px" }}
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
      <Typography variant='h3' style={{ marginBottom: "25px" }}>
        Welcome to Employee Management System
      </Typography>
      <div className={classes.container}>
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
        <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
          <IconButton
            style={{ alignSelf: "end" }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>

          <EditUser
            row={row}
            setRender={setRender}
            render={render}
            toggleDrawer={toggleDrawer}
          />
        </Drawer>
        <Button
          style={{ margin: "40px" }}
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

export default UserListTable;
