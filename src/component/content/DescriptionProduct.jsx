import { useState } from "react";
import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

const DescriptionProduct = ({ children, maxChars = 150 }) => {
  let [expanded, setExpanded] = useState(true);

  if (children.lenght <= maxChars) return <div>{children}</div>;

  let text = expanded
    ? children
    : children.length > maxChars
    ? `${children.substring(0, maxChars)} ...`
    : children;

  return (
    <>
      <p>{text}</p>
      {children.length > maxChars && (
        <Button size="sm" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less" : "Read More"}
        </Button>
      )}
    </>
  );
};

DescriptionProduct.propTypes = {
  children: PropTypes.string.isRequired,
  maxChars: PropTypes.number,
};

export default DescriptionProduct;
