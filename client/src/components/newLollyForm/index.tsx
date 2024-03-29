import React, { FC, useState } from "react";
import { navigate } from "gatsby";
import { API } from "aws-amplify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Lolly from "../lolly";
import { createLolly } from "../../graphql/mutations";
import {
  CreateLollyMutation,
  CreateLollyMutationVariables,
  NewLollyInput,
} from "../../graphql/api";

/**
 * A form to create a new lolly for a recipient from a sender with a custom message.
 */
const NewLollyForm: FC = () => {
  const [isCreating, setIsCreating] = useState(false);

  const initialValues: NewLollyInput = {
    topColor: "#cd2753",
    middleColor: "#d5cfd1",
    bottomColor: "#5ba3da",
    recipientName: "",
    message: "",
    sendersName: "",
  };

  const validationSchema = Yup.object().shape({
    topColor: Yup.string().required().default(initialValues.topColor),
    middleColor: Yup.string().required().default(initialValues.middleColor),
    bottomColor: Yup.string().required().default(initialValues.bottomColor),
    recipientName: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    sendersName: Yup.string().required("Required"),
  });

  const onSubmit = async (values: NewLollyInput) => {
    setIsCreating(true);
    try {
      const variables: CreateLollyMutationVariables = { newLolly: values };
      const response = (await API.graphql({
        query: createLolly,
        variables,
      })) as { data: CreateLollyMutation };

      setIsCreating(false);
      navigate(`/lolly/${response.data.createLolly.id}`);
    } catch (err) {
      console.log("Error creating new lolly: ", err);
      setIsCreating(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form name="new-lolly">
          <div className="lolly">
            <div className="giftLolly">
              <Lolly
                topColor={values.topColor}
                middleColor={values.middleColor}
                bottomColor={values.bottomColor}
              />
            </div>
            <div className="flavours">
              <label htmlFor="topColor" className="pickerLabel">
                <Field
                  as="input"
                  type="color"
                  className="colourpicker"
                  id="topColor"
                  name="topColor"
                />
              </label>{" "}
              <label htmlFor="middleColor" className="pickerLabel">
                <Field
                  as="input"
                  type="color"
                  className="colourpicker"
                  id="middleColor"
                  name="middleColor"
                />
              </label>{" "}
              <label htmlFor="bottomColor" className="pickerLabel">
                <Field
                  as="input"
                  type="color"
                  className="colourpicker"
                  id="bottomColor"
                  name="bottomColor"
                />
              </label>
            </div>
            <div className="info">
              <div className="details">
                <p>
                  <label htmlFor="recipientName">To</label>{" "}
                  <Field
                    as="input"
                    type="text"
                    id="recipientName"
                    name="recipientName"
                    placeholder="A lolly for..."
                  />
                </p>
                <div className="message">
                  <label htmlFor="message">Say something nice</label>{" "}
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                  />
                </div>
                <p>
                  <label htmlFor="sendersName">From</label>{" "}
                  <Field
                    as="input"
                    type="text"
                    id="sendersName"
                    name="sendersName"
                    placeholder="from your friend..."
                  />
                </p>
              </div>
              <input
                type="submit"
                disabled={isCreating}
                value="Freeze this lolly and get a link"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewLollyForm;
