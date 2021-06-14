import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

import { ReactChild } from "react";

type TransitionKind<RC> = {
  children: RC;
  location: string;
};

const TIMEOUT: number = 1200;

const getTransitionStyles = {
  entering: {
    transform: "scale(10%)",
    right: "150px",
    top: "280px",
    bottom: "700px",
    left: "800px",
  },
  entered: {
    // transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    // opacity: 1,
    // transform: `translateX(0px)`,
    // animation: "blink .3s linear 2",

    left: "70px",
    right: "70px",
    top: "70px",
    bottom: "70px",
    transform: "scale(100%)",
  },
  exiting: {
    // transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    // opacity: 0,
    // transform: `translateX(-50px)`,
    transform: "scale(10%)",
  },
  empty: {},
};

const Transition: React.FC<TransitionKind<ReactChild>> = ({
  children,
  location,
}) => {
  return <div className="Page">{children}</div>;
  /*console.log(children);
  return (
    <TransitionGroup>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(status) => (
          <div
            className={"Page " + status}
            style={{
              ...getTransitionStyles[
                status
                // children.type.name === "HomepageStub" ? "" : status
              ],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>*/
  );
};
export default Transition;
