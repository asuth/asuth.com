import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

import { ReactChild } from "react";

type TransitionKind<RC> = {
  children: RC;
  location: string;
};

const getTransitionStyles: { [key: string]: {} } = {
  entering: {
    marginTop: 0,
    opacity: 0,
  },
  entered: {
    marginTop: "-91vh",
    opacity: 1,
  },
  // exiting: {
  //   marginTop: 0,
  //   opacity: 0,
  // },
  empty: {},
};

const Transition: React.FC<TransitionKind<ReactChild>> = ({
  children,
  location,
}) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location}
        timeout={{
          // don't wait to create the new element; don't totally understand why this needs to be zerod
          enter: 0,
          // don't destroy the element while it is animating away
          exit: 300,
        }}
      >
        {(status: string) => {
          return (
            <div
              className={"Page"} /* + status + " " + children.type.name} */
              style={{
                ...getTransitionStyles[
                  // @ts-ignore: Property 'type' does not exist on type 'ReactChild & ReactNode'.
                  children.type.name === "HomepageStub" ? "" : status
                ],
              }}
            >
              {children}
            </div>
          );
        }}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;
