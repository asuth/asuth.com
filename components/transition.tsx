import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";

type TransitionKind = {
  children: ReactNode;
  location: string;
};

type Status = "entering" | "entered" | "exiting" | "exited";

type PageState = {
  key: string;
  child: ReactNode;
  status: Status;
};

const getTransitionStyles: Record<Status, CSSProperties> = {
  entering: {
    opacity: 0,
    top: "100vh",
  },
  entered: {
    top: "66px",
    opacity: 1,
  },
  exiting: {
    top: "100vh",
    opacity: 0,
  },
  exited: {},
};

const EXIT_DURATION = 300; // ms

const Transition: React.FC<TransitionKind> = ({ children, location }) => {
  const [current, setCurrent] = useState<PageState | null>(null);
  const [prev, setPrev] = useState<PageState | null>(null);
  const firstRenderRef = useRef(true);

  // Handle first render and subsequent location changes
  useEffect(() => {
    // First render: just show the page as "entered"
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      setCurrent({
        key: location,
        child: children,
        status: "entered",
      });
      return;
    }

    // On later renders when location changes:
    setPrev((oldPrev) => {
      // Move the existing current page to prev (exiting)
      if (current) {
        return { ...current, status: "exiting" };
      }
      return oldPrev;
    });

    // New page starts as "entering"
    setCurrent({
      key: location,
      child: children,
      status: "entering",
    });

    // After one tick, mark new page as "entered" so CSS can animate it
    let enterTimeout: number | undefined;
    if (typeof window !== "undefined") {
      enterTimeout = window.setTimeout(() => {
        setCurrent((curr) =>
          curr && curr.key === location ? { ...curr, status: "entered" } : curr
        );
      }, 0);
    }

    // After EXIT_DURATION, remove the previous page
    let exitTimeout: number | undefined;
    if (typeof window !== "undefined") {
      exitTimeout = window.setTimeout(() => {
        setPrev(null);
      }, EXIT_DURATION);
    }

    return () => {
      if (enterTimeout) window.clearTimeout(enterTimeout);
      if (exitTimeout) window.clearTimeout(exitTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, children]); // re-run on route changes

  const renderPage = (page: PageState | null) => {
    if (!page) return null;

    const { key, child, status } = page;

    const isHomepage =
      React.isValidElement(child) &&
      // `as any` to avoid TS complaining about `type.name`
      (child.type as any)?.name === "HomepageStub";

    const style = isHomepage ? {} : getTransitionStyles[status];

    return (
      <div key={key} className="Page" style={style}>
        {child}
      </div>
    );
  };

  return (
    <>
      {renderPage(prev)}
      {renderPage(current)}
    </>
  );
};

export default Transition;
