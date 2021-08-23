import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Select from "react-select";

import { fetchOrganisations, fetchCountries } from "../../actions";

const AddUserSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // roles: Yup.string().required('Required'),
  // organisation: Yup.string().required("Required"),
  // country: Yup.string().required('Required'),
});

const AddEditUser = (props) => {
  const [organisationsFeather, setOrganisationsFeather ] = useState([]);
  const handleChange = (e) => {
    setOrganisationsFeather(e.value)
  }

  useEffect(() => {
    props.fetchOrganisations(props.organisations);
    props.fetchCountries(props.countries);
  }, []);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: "",
            email: "",
            roles: "",
            organisation: "",
            organisationFeatures: "",
            country: "",
          }}
          validationSchema={AddUserSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            console.log('organisationsFeather:', organisationsFeather);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Helen"
                  className="form-control"
                />
                {errors.name && touched.name ? (
                  <div className="error">{errors.name}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="helen@gmail.com"
                  type="email"
                  className="form-control"
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="roles">Roles</label>
                <Field as="select" id="roles" name="roles" className="form-control" >
                  <option value="owner">Owner 1</option>
                  <option value="other">Other</option>
                </Field> 
                {errors.roles && touched.roles ? (
                  <div className="error">{errors.roles}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="organisation">Organisation</label>
                <Field
                  id="organisation"
                  name="organisation"
                  placeholder="Premium Meat Co."
                  className="form-control"
                />
                {errors.name && touched.name ? (
                  <div className="error">{errors.name}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="organisationFeatures">
                  Organisation Features
                </label>
                <Select
                  id="organisationFeatures"
                  name="organisationFeatures"
                  isMulti
                  options={props.organisations}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <Field as="select" id="country" name="country" className="form-control" >
                  {props.countries.map((country, index) => (
                    <option key={country.id} value={country.value}>{country.label}</option>
                  ))}
                </Field> 
                {/* <FormSelect size="lg" id="country" name="country">
                  {props.countries.map((country, index) => (
                    <option value={country.value}>{country.label}</option>
                  ))}
                </FormSelect> */}
                {errors.country && touched.country ? (
                  <div className="error">{errors.country}</div>
                ) : null}
              </div>

              <div className="cta">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    organisations: state.organisationsReducer.organisations,
    countries: state.countriesReducer.countries,
  };
};

export default connect(mapStateToProps, { fetchOrganisations, fetchCountries })(
  AddEditUser
);
