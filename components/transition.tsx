import { ReactNode, useState, useEffect, useRef } from "react";

type TransitionKind<RC> = {
  children: RC;
  location: string;
};

type TransitionStatus = "entering" | "entered" | "exiting" | "exited";

// Calculate the transform offset needed to move from entered position (66px) to bottom (100vh)
const ENTER_OFFSET = "calc(100vh - 66px)";

const getTransitionStyles: { [key: string]: {} } = {
  entering: {
    opacity: 0,
    transform: `translateY(${ENTER_OFFSET})`,
  },
  entered: {
    transform: "translateY(0)",
    opacity: 1,
  },
  exiting: {
    transform: `translateY(${ENTER_OFFSET})`,
    opacity: 0,
  },
  exited: {},
};

const Transition: React.FC<TransitionKind<ReactNode>> = ({
  children,
  location,
}) => {
  const [status, setStatus] = useState<TransitionStatus>("entering");
  const [displayChildren, setDisplayChildren] = useState(children);
  const [exitingChildren, setExitingChildren] = useState<ReactNode | null>(null);
  const [exitingStatus, setExitingStatus] = useState<TransitionStatus>("entered");
  const previousLocationRef = useRef<string>(location);
  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // If location changed, immediately show new content and exit old content
    if (previousLocationRef.current !== location) {
      // Clear any pending exit timeout
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }

      // Store the old children for exit animation
      setExitingChildren(displayChildren);
      // Start exiting content from entered state, then transition to exiting
      setExitingStatus("entered");
      
      // Immediately switch to new content (enter: 0 - no delay)
      setDisplayChildren(children);
      previousLocationRef.current = location;
      
      // Start enter transition immediately - set to entering state
      setStatus("entering");
      
      // Wait for browser to paint the entering state, then transition to entered
      // Using double requestAnimationFrame ensures the entering state is rendered
      // Add a small delay to ensure smooth transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Small timeout to ensure the entering state is fully painted
          setTimeout(() => {
            setStatus("entered");
            // Now start the exit animation for old content
            setExitingStatus("exiting");
          }, 10);
        });
      });

      // After exit timeout, remove the old content
      exitTimeoutRef.current = setTimeout(() => {
        setExitingChildren(null);
      }, 300); // exit timeout
    } else {
      // Initial mount - enter immediately
      setStatus("entering");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setStatus("entered");
        });
      });
    }

    return () => {
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, [location, children, displayChildren]);

  // Get children type name for HomepageStub check
  // Check the original children prop (React element) before rendering
  const childrenTypeName = 
    children && 
    typeof children === "object" && 
    "type" in children &&
    typeof children.type === "function"
      ? (children.type as any).name || ""
      : "";

  const shouldSkipTransition = childrenTypeName === "HomepageStub";
  const effectiveStatus = shouldSkipTransition ? "" : status;

  return (
    <>
      {/* Old content exiting - on top while animating down */}
      {exitingChildren && (
        <div
          className="Page"
          style={{
            zIndex: 1,
            top: "66px", // Base position
            transition: "opacity 300ms ease 0s, transform 300ms ease 0s",
            willChange: "transform, opacity",
            ...getTransitionStyles[exitingStatus as keyof typeof getTransitionStyles] || {},
          }}
        >
          {exitingChildren}
        </div>
      )}
      {/* New content entering/entered - below exiting content, animating up */}
      <div
        className="Page"
        style={{
          zIndex: exitingChildren ? 0 : 1,
          top: "66px", // Base position
          transition: "opacity 300ms ease 0s, transform 300ms ease 0s",
          willChange: "transform, opacity",
          ...getTransitionStyles[effectiveStatus as keyof typeof getTransitionStyles] || {},
        }}
      >
        {displayChildren}
      </div>
    </>
  );
};

export default Transition;
