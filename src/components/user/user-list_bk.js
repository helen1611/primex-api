import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { fetchUsers } from "../../actions";
import AddEditUser from "./add-edit-user";

const UserList = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    props.fetchUsers(props.users);
  }, []);

  return (
    <div className="user-block">
      <div className="user-block__name">
        <div className="name_cate">Master Record 1</div>
        <Button variant="primary" onClick={handleShow}>
          Add User
        </Button>
      </div>
      <div className="user-block__content">
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roles</th>
              <th>Organisation</th>
              <th>Organisation Features</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.roles}</td>
                <td>{user.organisation}</td>
                <td>{user.organisation_features}</td>
                <td>{user.country}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <AddEditUser
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.usersReducer.users };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
