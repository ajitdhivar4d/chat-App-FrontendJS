import { keyframes, Skeleton, styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor } from "../../constants/color";

const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  height: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: "0",
});

const Link = styled(LinkComponent)`
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #4caf50;
  }
`;

const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${grayColor};
`;

const SearchField = styled("input")`
  padding: 1rem 2rem;
  width: 20vmax;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: #f1f1f1;
  font-size: 1.1rem;
`;

const CurveButton = styled("button")`
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: black;
  color: white;
  font-size: 1.1rem;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

const bounceAnimation = keyframes`
  0%{transform:scale(1)}
  50%{transform:scale(1.5)}
  100%{transform:scale(1)}
`;

const BouncingSkeleton = styled(Skeleton)(() => ({
  animation: `${bounceAnimation} 1s infinite`,
}));

export {
  Link,
  InputBox,
  SearchField,
  CurveButton,
  BouncingSkeleton,
  VisuallyHiddenInput,
};
